/**
 * iOS 유니버설 링크 확인 파일 — https://lettie-dating.com/open/... 을 레티 앱으로 연다.
 *
 * 앱(2.0.12~)의 Associated Domains 에 applinks:lettie-dating.com 이 있어야 짝이 맞는다.
 * Apple CDN 은 리다이렉트를 따라가지 않으므로 이 경로는 루트 도메인에서 200 JSON 이어야 한다.
 * App Store 인앱 이벤트 딥링크·공유 링크가 /open 아래를 쓴다.
 */
export const dynamic = 'force-static';

const APP_ID = 'H8XQ667NCY.com.dearglobe.dearglobe';

export function GET() {
  return Response.json({
    applinks: {
      apps: [],
      details: [
        {
          appIDs: [APP_ID],
          appID: APP_ID,
          components: [{ '/': '/open' }, { '/': '/open/*' }],
          paths: ['/open', '/open/*'],
        },
      ],
    },
  });
}
