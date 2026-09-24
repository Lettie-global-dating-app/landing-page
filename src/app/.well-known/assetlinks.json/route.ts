/**
 * Android App Links 확인 파일 — https://lettie-dating.com/open/... 을 레티 앱으로 연다.
 * 지문은 Google Play 앱 서명 인증서(Play 가 다시 서명한 APK 에서 apksigner 로 뽑음, 2026-09-24).
 * 앱 AndroidManifest 의 autoVerify intent-filter(host lettie-dating.com, /open) 와 짝이다.
 */
export const dynamic = 'force-static';

const PLAY_SIGNING_SHA256 =
  '81:EA:23:90:C9:97:77:FA:40:03:60:C8:06:D6:8A:AB:C2:6F:D8:2C:FE:DD:1B:6F:84:E4:C2:81:36:A1:71:D0';

export function GET() {
  return Response.json([
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: 'com.dearglobe.dearglobe',
        sha256_cert_fingerprints: [PLAY_SIGNING_SHA256],
      },
    },
  ]);
}
