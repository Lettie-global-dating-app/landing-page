#!/bin/bash
# 레티 랜딩 매일 SEO 점검 — launchd com.lettie.seo-daily (매일 10:40 KST, gsc-drain 10:20 뒤).
# launchd 는 늘 url/main 판 이 파일을 실행한다(원본 체크아웃이 다른 브랜치여도 같다):
#   git show url/main:scripts/seo/daily/run.sh > ~/.lettie-seo-daily/run.sh && bash ~/.lettie-seo-daily/run.sh
# 순서: 네트워크·자동화 크롬 확인 → url/main 워크트리 → measure.mjs(정해진 측정) → Claude Code(규칙집 안에서 판단·작은 변경) → 알림.
# 쉬게 하려면: echo 2026-12-01 > ~/.lettie-seo-daily/paused-until  (그날부터 다시 돈다)
# 오늘 다시 돌리려면: rm ~/.lettie-seo-daily/reports/<오늘>.md
set -uo pipefail
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
REPO=$HOME/Develop/dearglobe-landing-page
STATE=$HOME/.lettie-seo-daily
DATE=$(TZ=Asia/Seoul date +%F)
mkdir -p "$STATE/measure" "$STATE/reports" "$STATE/logs"
LOG=$STATE/logs/$DATE.log
REPORT=$STATE/reports/$DATE.md
notify() { osascript -e "display notification \"${1//\"/\'}\" with title \"Lettie SEO\"" >/dev/null 2>&1; }

if [[ -f $STATE/paused-until && "$DATE" < "$(cat "$STATE/paused-until")" ]]; then echo "$(date '+%F %T') 쉼 ($(cat "$STATE/paused-until") 부터)" >>"$LOG"; exit 0; fi
[[ -f $REPORT ]] && { echo "$(date '+%F %T') 오늘 보고서 있음 — 끝" >>"$LOG"; exit 0; }
# 두 개가 겹쳐 돌지 않게
LOCK=$STATE/run.lock
if ! mkdir "$LOCK" 2>/dev/null; then
  if [[ $(find "$LOCK" -maxdepth 0 -mmin +180 2>/dev/null) ]]; then rm -rf "$LOCK"; mkdir "$LOCK"; else echo "$(date '+%F %T') 이미 도는 중" >>"$LOG"; exit 0; fi
fi
trap 'rm -rf "$LOCK"' EXIT

caffeinate -i -w $$ &
exec >>"$LOG" 2>&1
echo "=== $(date '+%F %T') 시작"

# 맥이 잠든 사이 시각이 지나면 깨어난 순간(네트워크 없음)에 돈다 — 최대 60분 기다린다
for i in $(seq 1 120); do curl -s -m 5 -o /dev/null https://lettie-dating.com/ && break; sleep 30; done
curl -s -m 5 -o /dev/null https://lettie-dating.com/ || { echo "네트워크 없음"; notify "네트워크 없음 — 오늘 점검 못 함"; exit 1; }

# 자동화 크롬(9333). 프로필은 지우거나 다시 복사하지 않는다(로그인이 날아간다).
if ! curl -s -m 3 http://127.0.0.1:9333/json/version >/dev/null; then
  open -na "Google Chrome" --args --user-data-dir="$HOME/.lettie-chrome" --remote-debugging-port=9333
  for i in $(seq 1 30); do curl -s -m 2 http://127.0.0.1:9333/json/version >/dev/null && break; sleep 2; done
fi

# url/main 기준 워크트리 (원본 체크아웃·다른 세션 작업을 건드리지 않는다)
cd "$REPO" || exit 1
git fetch -q url main || { notify "git fetch 실패"; exit 1; }
WT=$STATE/wt
git worktree remove --force "$WT" 2>/dev/null; rm -rf "$WT"; git worktree prune
git worktree add -q --detach "$WT" url/main || { notify "워크트리 실패"; exit 1; }
ln -s "$REPO/node_modules" "$WT/node_modules"
cd "$WT" || exit 1

MEASURE=$(node scripts/seo/daily/measure.mjs 2>&1)
echo "$MEASURE"

PROMPT="$(cat scripts/seo/daily/playbook.md)

---
# 오늘
- 날짜(KST): $DATE
- 지금 폴더(워크트리): $WT
- 상태 폴더: $STATE — history.tsv, actions.md, measure/$DATE.json, measure/pages-*.tsv, reports/
- 보고서 경로: $REPORT (반드시 이 파일을 Write 로 쓰고 끝낸다)

## 오늘 측정 요약
$MEASURE

## history.tsv (최근 21줄)
$(head -1 "$STATE/history.tsv" 2>/dev/null; tail -21 "$STATE/history.tsv" 2>/dev/null | tail -n +2)

## actions.md (최근 기록)
$(tail -60 "$STATE/actions.md" 2>/dev/null || echo '(아직 없음)')

## 어제 보고서
$(ls -1 "$STATE/reports/"*.md 2>/dev/null | grep -v "$DATE" | tail -1 | xargs cat 2>/dev/null || echo '(없음)')
"

ALLOW=(Read Glob Grep Edit Write
  "Bash(git:*)" "Bash(gh pr:*)" "Bash(npm run build:*)" "Bash(npx next:*)" "Bash(npx tsc:*)"
  "Bash(node scripts/:*)" "Bash(curl:*)" "Bash(pkill:*)" "Bash(sleep:*)"
  "Bash(cat:*)" "Bash(grep:*)" "Bash(sed -n:*)" "Bash(ls:*)" "Bash(head:*)" "Bash(tail:*)" "Bash(wc:*)"
  "Bash(sort:*)" "Bash(uniq:*)" "Bash(awk:*)" "Bash(cut:*)" "Bash(diff:*)" "Bash(comm:*)" "Bash(jq:*)" "Bash(date:*)" "Bash(python3:*)")
DENY=(WebFetch WebSearch "Bash(git push --force:*)" "Bash(git push -f:*)" "Bash(git reset --hard:*)" "Bash(git checkout main:*)"
  "Bash(git branch -D:*)" "Bash(rm -rf:*)" "Bash(gh repo:*)" "Bash(node scripts/indexnow.mjs:*)" "Bash(npm run indexnow:*)")

# 모델 하나가 한도에 막혀도 다음 모델로 (threads generate.sh 와 같은 방식)
OK=0
for M in claude-opus-5-5 opus sonnet; do
  echo "--- claude ($M) $(date '+%T')"
  claude -p "$PROMPT" --model "$M" --strict-mcp-config --permission-mode acceptEdits \
    --add-dir "$STATE" --allowedTools "${ALLOW[@]}" --disallowedTools "${DENY[@]}" \
    --output-format text < /dev/null && [[ -s $REPORT ]] && { OK=1; break; }
  echo "claude($M) 실패 또는 보고서 없음"
done
pkill -f "next start -p 3124" 2>/dev/null

if [[ $OK = 1 ]]; then
  notify "$(head -1 "$REPORT" | cut -c1-120)"
else
  { echo "점검 실패 — Claude 실행 오류"; echo; echo "## 측정"; echo "$MEASURE"; } > "$REPORT.failed"
  notify "[실패] 오늘 SEO 점검이 끝나지 않음 — logs/$DATE.log"
fi
echo "=== $(date '+%F %T') 끝 (ok=$OK)"
