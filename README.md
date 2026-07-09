# thefourkorea-portfolio

> 실무 B2B 웹 프로젝트에서 사용한 프론트엔드 패턴을 **도메인·브랜드·API와 분리**해 재구성한 포트폴리오 샘플입니다.  
> 원본 THE FOUR B2B 프로젝트는 NDA로 비공개이며, 이 저장소는 학습·채용 포트폴리오 목적의 추상화 버전입니다.

## 포함 패턴

| 패키지 | 설명 | 실행 가능 여부 |
|--------|------|----------------|
| `packages/controlled-form` | RHF + MUI Controlled 입력 래퍼 | **데모 실행 가능** |
| `packages/encrypted-storage` | Recoil atom + sessionStorage AES | 코드 참고용 |
| `packages/admin-dnd-board` | 사용/미사용 칸반 DnD 리스트 | 문서 참고용 |
| `packages/social-auth-callback` | OAuth 콜백 → 토큰 저장 흐름 | 문서 참고용 |
| `packages/static-deploy` | Vite 빌드 + S3 + CloudFront CI | workflow 참고용 |

## 사전 준비

- **Node.js** 18 이상 (20 LTS 권장)
- **Yarn** 4.x (`corepack enable` 후 사용 가능)
- Git

버전 확인:

```bash
node -v
yarn -v
```

## 1. 저장소 받기

```bash
git clone https://github.com/asiject/thefourkorea-portfolio.git
cd thefourkorea-portfolio
```

## 2. 의존성 설치

루트 폴더에서 한 번만 실행합니다.

```bash
corepack enable
yarn install
```

> Yarn 4 모노레포입니다. `packages/*` 워크스페이스가 함께 설치됩니다.

## 3. 데모 실행 (Controlled Form)

신청 폼 패턴 데모를 로컬에서 띄웁니다.

```bash
yarn dev:form
```

또는 패키지 디렉터리에서 직접 실행:

```bash
yarn workspace @portfolio/controlled-form dev
```

실행 후 브라우저에서 아래 주소로 접속합니다.

- http://localhost:5173

### 데모에서 확인할 수 있는 것

- React Hook Form + Yup 검증
- MUI `ControlledTextField` 재사용 패턴
- 제출 시 콘솔 로그 + 알림 (API는 연결하지 않은 데모)

### 종료 방법

터미널에서 `Ctrl + C`

## 4. 프로덕션 빌드 (선택)

```bash
yarn workspace @portfolio/controlled-form build
```

빌드 결과는 `packages/controlled-form/dist/`에 생성됩니다.

로컬에서 빌드 결과 미리보기:

```bash
yarn workspace @portfolio/controlled-form preview
```

## 5. 환경 변수 (선택)

루트의 `.env.example`을 복사해 사용합니다.

```bash
cp .env.example .env
```

| 변수 | 용도 |
|------|------|
| `VITE_API_BASE_URL` | API 주소 (데모 폼에서는 미사용) |
| `VITE_STORAGE_SECRET_KEY` | `encrypted-storage` 패턴 참고용 |
| `VITE_OAUTH_PROVIDER_*` | OAuth 패턴 참고용 |

> **주의:** 실제 API URL, OAuth Client ID, AWS 정보는 절대 커밋하지 마세요.

## 6. 다른 패키지는 어떻게 보나요?

현재 **바로 실행되는 데모는 `controlled-form` 하나**입니다.  
나머지 패키지는 아래 README에서 패턴과 구조를 확인합니다.

```bash
# 각 패키지 README 위치
packages/encrypted-storage/README.md
packages/admin-dnd-board/README.md
packages/social-auth-callback/README.md
packages/static-deploy/README.md
```

포트폴리오 설명 문서:

- `docs/PROJECT_CARD.md` — 이력서·면접용 요약
- `docs/ARCHITECTURE.md` — 아키텍처 개요
- `docs/PORTFOLIO_NOTE.md` — 공개·면접 가이드

## 자주 하는 문제

### `yarn install`이 상위 프로젝트를 참조한다

`sanitized-repo`를 다른 프로젝트 폴더 안에 둔 경우 발생할 수 있습니다.  
**이 저장소 루트에서** `yarn install`을 실행하거나, 클론한 폴더에 `yarn.lock`이 있는지 확인하세요.

### 포트 5173이 이미 사용 중

`packages/controlled-form/vite.config.ts`의 `server.port` 값을 변경하세요.

### Windows에서 `corepack enable` 오류

관리자 권한 터미널에서 다시 실행하거나, Node.js를 재설치한 뒤 시도하세요.

## 디렉터리 구조

```
thefourkorea-portfolio/
├── README.md
├── package.json
├── yarn.lock
├── .env.example
├── packages/
│   ├── controlled-form/     # 데모 실행 가능
│   ├── encrypted-storage/
│   ├── admin-dnd-board/
│   ├── social-auth-callback/
│   └── static-deploy/
└── docs/
    ├── ARCHITECTURE.md
    ├── PORTFOLIO_NOTE.md
    └── PROJECT_CARD.md
```

## 라이선스

MIT (포트폴리오 샘플용)
