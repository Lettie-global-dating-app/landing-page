#!/bin/zsh
# 배포 뒤 색인 등록 자동화.
#   1) IndexNow — Bing·Naver·Yandex 에 사이트맵 전체를 알린다 (Google 은 안 받는다)
#   2) Google Search Console — 지난번 스냅샷 이후 새로 생긴 URL 만 「색인 생성 요청」 (하루 한도 ~10건)
#      GSC 는 공개 API 가 없어 CDP Chrome(포트 9333, 구글 로그인된 프로필)을 tools/promo-video/gsc_request.mjs 가 눌러 준다.
#
#   ./scripts/publish-index.sh            평소 (새 URL 만 GSC 요청)
#   ./scripts/publish-index.sh --all-gsc  사이트맵 전체를 GSC 요청 (한도에 걸리면 거기서 멈춘다)
#
# 스냅샷: scripts/.sitemap-snapshot.txt (커밋하지 않는다)
set -u
cd "$(dirname "$0")/.."
SNAP=scripts/.sitemap-snapshot.txt
KEY=$(ls public/*.txt | grep -E '/[0-9a-f]{32}\.txt$' | head -1 | xargs -I{} basename {} .txt)

# 배포가 끝날 때까지 (최대 10분) 새 페이지가 실제로 뜨는지 본다
for i in $(seq 1 40); do
  curl -sf -o /dev/null https://lettie-dating.com/sitemap.xml && break
  sleep 15
done

echo "== IndexNow"
INDEXNOW_KEY=$KEY node scripts/indexnow.mjs || echo "IndexNow 실패 (계속 진행)"

echo "== Search Console"
curl -s https://lettie-dating.com/sitemap.xml | grep -oE '<loc>[^<]+</loc>' | sed -E 's#</?loc>##g' | sort > /tmp/sitemap.now.txt
if [[ "${1:-}" == "--all-gsc" || ! -f $SNAP ]]; then
  cp /tmp/sitemap.now.txt /tmp/sitemap.new.txt
else
  comm -13 $SNAP /tmp/sitemap.now.txt > /tmp/sitemap.new.txt
fi
n=$(wc -l < /tmp/sitemap.new.txt | tr -d ' ')
echo "새 URL $n 건"
if [[ $n -gt 0 ]]; then
  # 블로그 글을 먼저, 한도(10) 안에서
  { grep -E '/blog/' /tmp/sitemap.new.txt; grep -vE '/blog/' /tmp/sitemap.new.txt; } | head -10 > /tmp/sitemap.req.txt
  node ~/AndroidStudioProjects/dearglobe/tools/promo-video/gsc_request.mjs --file /tmp/sitemap.req.txt || echo "GSC 요청 중 오류 (CDP Chrome 이 켜져 있어야 한다: open -na 'Google Chrome' --args --user-data-dir=/tmp/chrome-lettie --remote-debugging-port=9333)"
fi
cp /tmp/sitemap.now.txt $SNAP
echo "done"
