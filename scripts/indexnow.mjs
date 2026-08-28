/**
 * IndexNow 핑 — 새 페이지·갱신 페이지를 Bing·Naver·Yandex 에 즉시 알린다.
 * Google 은 IndexNow 를 소비하지 않는다(sitemap lastmod 로 승부).
 *
 * sitemap.xml 을 그대로 읽으므로 페이지가 늘어도 이 스크립트는 고칠 일이 없다.
 */
const KEY = process.env.INDEXNOW_KEY;
const HOST = 'lettie-dating.com';

if (!KEY) {
  console.error('INDEXNOW_KEY 가 없다. public/<key>.txt 의 키를 환경변수로 넘겨라.');
  process.exit(1);
}

const xml = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('사이트맵에서 URL 을 하나도 못 읽었다. 중단한다.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${urlList.length}건 제출 → HTTP ${res.status}`);
process.exit(res.ok ? 0 : 1);
