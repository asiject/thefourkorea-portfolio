# @portfolio/social-auth-callback

OAuth **콜백 페이지 → 토큰 수신 → API 헤더 설정 → 리다이렉트** 흐름.

## 원본에서 가져온 아이디어

카카오/네이버 로그인 후 콜백 라우트에서 code를 백엔드에 넘기고 JWT를 받아 Axios 기본 헤더에 설정.

## 구조

```
social-auth-callback/
├── package.json
├── README.md
├── src/
│   ├── pages/
│   │   ├── OAuthCallbackPage.tsx
│   │   └── LoginPage.tsx
│   ├── api/
│   │   ├── httpClient.ts           # axios instance
│   │   └── authApi.ts              # mock exchange
│   ├── utils/
│   │   └── setAuthToken.ts
│   ├── demo/
│   │   └── AuthFlowDemo.tsx
│   └── index.ts
└── vite.config.ts
```

## 핵심 포인트

- `/oauth/callback?provider=a&code=...` 라우트
- `Authorization: Bearer {token}` 공통 설정
- 미가입 사용자 → 추가 정보 입력 플로우 분기 (mock)

## 공개 시 sanitize

- `KAKAO` → `PROVIDER_A`, `NAVER` → `PROVIDER_B`
- 실제 redirect URI, client secret 코드에 포함 금지

## 면접 한 줄

> "소셜 로그인은 콜백 전용 라우트에서 code를 서버로 교환하고, 받은 JWT로 이후 API 요청 헤더를 통일했습니다."
