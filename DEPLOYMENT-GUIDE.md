# Lettie 랜딩 페이지 배포 가이드

## 🚀 배포 전 필수 설정

### 1. 환경변수 설정

배포 플랫폼에서 다음 환경변수를 설정하세요:

```bash
# 실제 배포 도메인 설정
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 2. robots.txt 수정

`public/robots.txt` 파일에서 실제 도메인으로 변경:

```txt
# 현재:
Sitemap: https://your-domain.com/sitemap.xml

# 변경 예시:
Sitemap: https://lettie-app.vercel.app/sitemap.xml
```

### 3. Google Search Console 인증코드 설정

`src/app/layout.tsx`에서 실제 인증코드로 변경:

```typescript
verification: {
  google: "실제-구글-인증-코드",
}
```

## 📱 배포 플랫폼별 설정

### Vercel 배포

1. **프로젝트 연결**
   ```bash
   vercel --prod
   ```

2. **환경변수 설정**
   - Vercel 대시보드 → Settings → Environment Variables
   - `NEXT_PUBLIC_SITE_URL` = `https://your-project.vercel.app`

3. **도메인 연결 (선택사항)**
   - Vercel 대시보드 → Domains
   - 커스텀 도메인 추가

### Netlify 배포

1. **빌드 설정**
   ```toml
   # netlify.toml
   [build]
   publish = ".next"
   command = "npm run build"
   ```

2. **환경변수 설정**
   - Netlify 대시보드 → Site settings → Environment variables
   - `NEXT_PUBLIC_SITE_URL` = `https://your-site.netlify.app`

### AWS Amplify 배포

1. **amplify.yml 설정**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

2. **환경변수 설정**
   - AWS Amplify 콘솔 → Environment variables
   - `NEXT_PUBLIC_SITE_URL` = `https://your-app.amplifyapp.com`

## 🔧 배포 후 확인사항

### 1. SEO 확인
- [ ] `https://your-domain.com/sitemap.xml` 접근 가능
- [ ] `https://your-domain.com/robots.txt` 접근 가능
- [ ] Google Search Console에 사이트 등록
- [ ] 구조화된 데이터 검증 (Rich Results Test)

### 2. 성능 확인
- [ ] Google PageSpeed Insights 점수 확인
- [ ] Core Web Vitals 측정
- [ ] Lighthouse 점수 확인

### 3. 소셜 미디어 확인
- [ ] Facebook Sharing Debugger 테스트
- [ ] Twitter Card Validator 테스트
- [ ] OpenGraph 이미지 표시 확인

## 📊 SEO 모니터링 설정

### Google Analytics 4 설정 (선택사항)

```typescript
// src/app/layout.tsx에 추가
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `
}}/>
```

### Google Search Console 설정

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성 추가 → URL 접두어 방식
3. HTML 태그 인증 방법 선택
4. `layout.tsx`의 verification 코드 업데이트

## 🚨 주의사항

1. **환경변수 우선순위**
   - `NEXT_PUBLIC_SITE_URL` (최우선)
   - `VERCEL_URL` (Vercel 자동 생성)
   - `http://localhost:3000` (기본값)

2. **캐시 무효화**
   - 배포 후 브라우저 캐시 클리어
   - CDN 캐시 무효화 (필요시)

3. **이미지 최적화**
   - OpenGraph 이미지 1200x630 크기로 제작
   - Apple Touch Icon 180x180 크기로 제작

## 📞 문제 해결

### 사이트맵이 로드되지 않을 때
```bash
# Next.js 재빌드
npm run build

# 캐시 클리어 후 재배포
```

### OpenGraph 이미지가 표시되지 않을 때
- 이미지 파일 경로 확인
- 이미지 크기 1200x630 확인
- Facebook Sharing Debugger로 캐시 갱신

### 검색엔진 인덱싱이 안 될 때
- robots.txt 설정 확인
- Google Search Console 크롤링 요청
- 사이트맵 제출 