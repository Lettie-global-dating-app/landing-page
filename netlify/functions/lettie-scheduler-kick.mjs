// 레티 SNS 예약 게시(github.com/junhyeongkim2/lettie-scheduler)를 30분마다 깨운다.
// 깃허브 정기 실행(schedule)이 빠지는 날을 대비한 두 번째 방아쇠 — 실제 게시는 깃허브 워크플로가 한다.
// 이미 올린 항목은 posted.json 이 막고 실행은 concurrency 로 줄을 서므로 겹쳐 깨워도 두 번 올라가지 않는다.
// 토큰: Netlify 환경변수 LETTIE_GH_DISPATCH_TOKEN (세분화 토큰, lettie-scheduler 저장소 Actions 쓰기만)
export default async () => {
  const r = await fetch('https://api.github.com/repos/junhyeongkim2/lettie-scheduler/actions/workflows/post.yml/dispatches', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.LETTIE_GH_DISPATCH_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'lettie-scheduler-kick',
    },
    body: JSON.stringify({ ref: 'main' }),
  });
  console.log('lettie-scheduler dispatch', r.status);
};

export const config = { schedule: '20,50 0-3,11-15 * * *' };
