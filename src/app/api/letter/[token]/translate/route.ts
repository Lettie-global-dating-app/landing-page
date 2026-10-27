import { NextResponse, type NextRequest } from 'next/server';
import { APP_LANGS, fetchTranslation } from '@/lib/letterShare';

/**
 * 웹 편지 번역 (2026-10-27). 브라우저 → 여기 → 서버 공개 번역 API. 같은 도메인이라 CORS 가 필요 없다.
 * 서버는 (편지, 언어) 결과를 저장해 두고, 공유 하나당 언어 수·하루 새 번역 수·IP 당 횟수로 비용을 막는다 —
 * 모든 요청이 넷리파이 IP 로 가므로 보는 사람 IP 를 X-Lettie-Viewer-Ip 로 넘긴다.
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const to = req.nextUrl.searchParams.get('to') ?? '';
  if (!/^[A-Za-z0-9-]{4,32}$/.test(token) || !APP_LANGS.includes(to)) return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  const ip = req.headers.get('x-nf-client-connection-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
  try {
    const r = await fetchTranslation(token, to, ip);
    if (!r.data) return NextResponse.json({ error: 'unavailable' }, { status: r.status === 404 ? 404 : r.status === 429 ? 429 : 502 });
    return NextResponse.json(r.data, { headers: { 'Cache-Control': 'private, max-age=300' } });
  } catch {
    return NextResponse.json({ error: 'unavailable' }, { status: 502 });
  }
}
