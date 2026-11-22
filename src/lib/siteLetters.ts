/**
 * 랜딩에 싣는 동의 편지 (2026-11-23 대표 「그 공개 허가한 편지들 랜딩페이지에도 싣으세요」).
 *
 * 앱에서 「레티 인스타그램·홈페이지에 실려도 좋아요」에 동의한 편지 가운데, 인스타 대기열이 한 번 더 거른 것만 싣는다
 * (탈퇴·정지·운영자, 100자 미만, 미성년 신호, 연락처·@아이디 제외 + claude 확인). 서버 /featured-letters 는 이 거름이 없어
 * (최근 24통 그대로) 쓰지 않는다.
 *
 * 목록은 맥의 ~/.cache/lettie/insta1108/export_site.py 가 매일 20:30 공개 API 로 하나씩 다시 확인하고(탈퇴·내림·공유 끔은 빠진다)
 * 레티 번역(ko·en)을 붙여 S3 에 낸다. 이름·인스타 아이디는 들어 있지 않다 — 화면은 「나라의 펜팔」.
 */
export type SiteLetter = {
  token: string;
  /** 원문 언어(모르면 null) */
  lang: string | null;
  countryCode: string | null;
  characterKey: string | null;
  characterImageUrl: string | null;
  stamp: string | null;
  prompt: string;
  body: string;
  imageUrl: string | null;
  publishedAt: string | null;
  /** 레티 번역. 원문과 같은 언어거나 아직 못 받은 것은 없다 */
  tr: Partial<Record<'ko' | 'en', { prompt: string; body: string }>>;
};

export const SITE_LETTERS_URL =
  process.env.LETTIE_SITE_LETTERS_URL || 'https://dearglobe.s3.ap-northeast-2.amazonaws.com/insta/letters/site.json';

const TOKEN = /^[A-Za-z0-9]{8,16}$/;
const str = (v: unknown) => (typeof v === 'string' ? v : null);

/** 10분마다 다시 받는다(ISR). 못 받으면 빈 목록 — 홈 칸은 숨고 편지 쪽은 noindex 가 된다. */
export async function fetchSiteLetters(): Promise<SiteLetter[]> {
  try {
    const res = await fetch(SITE_LETTERS_URL, { next: { revalidate: 600 } });
    if (!res.ok) return [];
    const data = (await res.json()) as { letters?: unknown };
    if (!Array.isArray(data?.letters)) return [];
    return data.letters.flatMap((raw): SiteLetter[] => {
      const l = raw as Record<string, unknown>;
      const token = str(l.token);
      const body = str(l.body)?.trim();
      if (!token || !TOKEN.test(token) || !body) return [];
      const trRaw = (l.tr ?? {}) as Record<string, { prompt?: unknown; body?: unknown }>;
      const tr: SiteLetter['tr'] = {};
      for (const to of ['ko', 'en'] as const) {
        const b = str(trRaw[to]?.body)?.trim();
        if (b) tr[to] = { prompt: str(trRaw[to]?.prompt) ?? '', body: b };
      }
      return [{
        token,
        lang: str(l.lang),
        countryCode: str(l.countryCode),
        characterKey: str(l.characterKey),
        characterImageUrl: str(l.characterImageUrl),
        stamp: str(l.stamp),
        prompt: str(l.prompt)?.trim() ?? '',
        body,
        imageUrl: str(l.imageUrl) && /^https:\/\//.test(str(l.imageUrl)!) ? str(l.imageUrl) : null,
        publishedAt: str(l.publishedAt),
        tr,
      }];
    });
  } catch {
    return [];
  }
}

/** 편지 쪽 경로 — 한국어는 루트, 그 밖의 언어는 영어 쪽 */
export const lettersPath = (lang: string) => (lang === 'ko' ? '/letters' : '/en/letters');
