// 언어별 페이지의 <html lang> 을 그 언어로 고친다 (2026-10-04).
// Next App Router 는 <html> 을 루트 레이아웃 하나만 그려서 /en·/ja … 도 응답 HTML 이 lang="ko" 였다.
// 레이아웃의 스크립트가 브라우저에서 고치긴 하지만 크롤러(빙·답변엔진)와 첫 렌더는 ko 를 본다.
// 루트에서 headers() 로 경로를 읽으면 사이트 전체가 동적 렌더링이 되므로, 정적 HTML 은 그대로 두고 가장자리에서 한 단어만 바꾼다.
// 실패하면 원래 응답을 그대로 내보낸다(onError: bypass).
const LOCALES = [
  'en', 'es', 'pt', 'ja', 'fr', 'zh', 'de', 'hi', 'id', 'ru', 'it',
  'bn', 'fil', 'tr', 'vi', 'th', 'ms', 'sw', 'pl', 'nl', 'uk', 'ro', 'el', 'cs',
];

export default async (request, context) => {
  const res = await context.next();
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html')) return res;
  const seg = new URL(request.url).pathname.split('/')[1];
  if (!LOCALES.includes(seg)) return res;
  const html = await res.text();
  if (!html.includes('<html lang="ko"')) return new Response(html, res);
  const out = new Response(html.replace('<html lang="ko"', `<html lang="${seg}"`), res);
  out.headers.set('content-language', seg);
  out.headers.delete('content-length');
  out.headers.delete('content-encoding');
  out.headers.delete('etag');
  return out;
};

export const config = {
  path: [
    '/en', '/en/*', '/es', '/es/*', '/pt', '/pt/*', '/ja', '/ja/*', '/fr', '/fr/*', '/zh', '/zh/*',
    '/de', '/de/*', '/hi', '/hi/*', '/id', '/id/*', '/ru', '/ru/*', '/it', '/it/*',
    '/bn', '/bn/*', '/fil', '/fil/*', '/tr', '/tr/*', '/vi', '/vi/*', '/th', '/th/*', '/ms', '/ms/*', '/sw', '/sw/*',
    '/pl', '/pl/*', '/nl', '/nl/*', '/uk', '/uk/*', '/ro', '/ro/*', '/el', '/el/*', '/cs', '/cs/*',
  ],
  onError: 'bypass',
};
