#!/bin/zsh
# GSC 「색인 생성 요청」 대기열(scripts/.gsc-pending.txt)을 하루 10건씩 비운다 (launchd com.lettie.gsc-drain, 매일 10:20).
# 대기열이 비면 아무것도 안 한다. 언어 홈을 먼저(대기열 순서 그대로) 보낸다. CDP Chrome(9333, 구글 로그인)이 켜져 있어야 한다.
set -u
cd "$(dirname "$0")/.."
PENDING=scripts/.gsc-pending.txt
[[ -s $PENDING ]] || { echo "$(date '+%F %T') 대기열 없음"; exit 0; }
head -10 $PENDING > /tmp/gsc.drain.req.txt
node ~/AndroidStudioProjects/dearglobe/tools/promo-video/gsc_request.mjs --file /tmp/gsc.drain.req.txt | tee /tmp/gsc.drain.result.txt
grep -E '^(requested|already-indexed)' /tmp/gsc.drain.result.txt | awk '{print $2}' > /tmp/gsc.drain.done.txt
grep -vxF -f /tmp/gsc.drain.done.txt $PENDING > /tmp/gsc.drain.left.txt; mv /tmp/gsc.drain.left.txt $PENDING
echo "$(date '+%F %T') 남은 URL $(wc -l < $PENDING | tr -d ' ') 건"
