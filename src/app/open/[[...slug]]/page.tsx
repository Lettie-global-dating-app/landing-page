import type { Metadata } from 'next';

/**
 * 앱 전용 링크(/open/...)가 브라우저로 열렸을 때의 페이지.
 * 앱이 있으면 iOS 가 이 주소를 앱으로 열기 때문에(유니버설 링크) 여기 오는 사람은
 * 앱이 없거나 링크를 지원하기 전 버전이다 → 스토어로 안내한다. 검색에는 내보내지 않는다.
 */
export const metadata: Metadata = {
  title: { absolute: 'Lettie' },
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ['world-post-day'] }];
}

export default function OpenInApp() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#102040] px-5 text-center text-[#F1EADB]">
      <div className="max-w-sm py-8">
        <h1 className="text-[22px] font-bold mb-2">Lettie ✉️</h1>
        <p className="text-sm leading-relaxed text-[#B8BFD3] mb-5">
          This link opens in the Lettie app. Get the app or update it, then tap the link again.
          <br />
          레티 앱에서 열리는 링크예요. 앱을 받거나 업데이트한 뒤 다시 눌러 주세요.
        </p>
        <a
          href="https://apps.apple.com/app/id6746454876"
          className="block my-2.5 rounded-xl bg-[#F5ECD8] py-3.5 text-[15px] font-semibold text-[#2B2418]"
        >
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
          className="block my-2.5 rounded-xl bg-[#F5ECD8] py-3.5 text-[15px] font-semibold text-[#2B2418]"
        >
          Google Play
        </a>
      </div>
    </main>
  );
}
