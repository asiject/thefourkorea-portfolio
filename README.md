# frontend-admin-patterns

> 실무 B2B 웹 프로젝트에서 사용한 프론트엔드 패턴을 **도메인·브랜드·API와 분리**해 재구성한 포트폴리오 샘플입니다.  
> 원본 THE FOUR B2B 프로젝트는 NDA로 비공개이며, 이 저장소는 학습·채용 포트폴리오 목적의 추상화 버전입니다.

## 포함 패턴

| 패키지 | 설명 | 원본에서 가져온 아이디어 |
|--------|------|--------------------------|
| `packages/controlled-form` | RHF + MUI Controlled 입력 래퍼 | 관리자 훈련 신청 폼 |
| `packages/encrypted-storage` | Recoil atom + sessionStorage AES | 사용자 세션 persist |
| `packages/admin-dnd-board` | 사용/미사용 칸반 DnD 리스트 | 훈련 타입 관리 |
| `packages/social-auth-callback` | OAuth 콜백 → 토큰 저장 흐름 | 카카오/네이버 로그인 |
| `packages/static-deploy` | Vite 빌드 + S3 + CloudFront CI | 프로덕션 배포 |

## 기술 스택

- React 18, TypeScript, Vite
- MUI, Emotion
- Recoil, TanStack Query v4
- React Hook Form, Yup
- react-beautiful-dnd
- GitHub Actions

## 시작하기

```bash
# 루트에서 의존성 설치 (모노레포 예시)
yarn install

# 개별 패키지 데모 실행
yarn workspace @portfolio/controlled-form dev
yarn workspace @portfolio/admin-dnd-board dev
```

## 디렉터리 구조

```
frontend-admin-patterns/
├── README.md
├── package.json                 # workspaces 루트
├── .env.example                 # 더미 환경 변수만
├── .gitignore
├── packages/
│   ├── controlled-form/
│   ├── encrypted-storage/
│   ├── admin-dnd-board/
│   ├── social-auth-callback/
│   └── static-deploy/
└── docs/
    ├── ARCHITECTURE.md
    └── PORTFOLIO_NOTE.md
```

## 공개 시 주의사항

- 실제 API URL, OAuth Client ID, AWS 리소스명 **절대 커밋하지 않기**
- `example.com`, `dummy-api.local` 등 플레이스홀더만 사용
- 브랜드 이미지·실제 문구·회원 데이터 사용 금지
- README에 "sanitized / portfolio purpose" 명시

## 라이선스

MIT (포트폴리오 샘플용)
