# THE FOUR B2B — 포트폴리오 / 이력서용 프로젝트 카드

> 원본 소스는 NDA로 비공개. 아래 문구는 도메인·수치를 일반화한 포트폴리오용입니다.

---

## 한 줄 요약 (이력서 프로젝트명 아래)

B2B 훈련 신청·운영 플랫폼 프론트엔드. 사용자·강사·관리자 3역할 SPA, 소셜 로그인, 관리자 백오피스, AWS 정적 배포 자동화.

---

## 짧은 버전 (이력서 3~4줄)

**THE FOUR 전도 훈련 B2B 웹 플랫폼** | React · TypeScript · Vite  
- 훈련 신청, 강사 마이페이지, 관리자 백오피스(회원·훈련·상품·문의·리뷰) 프론트엔드 개발  
- 카카오/네이버 소셜 로그인, React Hook Form 기반 복합 신청 폼, Recoil + TanStack Query 상태 관리  
- GitHub Actions → S3 → CloudFront 무효화 파이프라인 구축 및 운영 환경 배포

---

## 중간 버전 (포트폴리오 카드 / 노션)

### 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | THE FOUR B2B 훈련 운영 플랫폼 |
| 역할 | 프론트엔드 개발 |
| 기간 | (본인 실제 기간 입력) |
| 팀 구성 | (예: FE 1, BE 1, 디자인 1) |
| 스택 | React 18, TypeScript, Vite, MUI, Recoil, TanStack Query, React Hook Form, Yup, Axios |
| 배포 | AWS S3 + CloudFront, GitHub Actions |
| 공개 | 소스 비공개 (NDA) — 패턴 샘플 레포 별도 제공 |

### 담당 업무

- 사용자 영역: 서비스 소개, 훈련 신청, 공지/FAQ/문의, 훈련 후기
- 강사 영역: 마이페이지(프로필, 교육 이력, 강의 목록, 강의 자료)
- 관리자 영역: 회원·훈련·상품·리뷰·문의·강사신청·보고서 CRUD
- 인증: 카카오/네이버 OAuth 콜백 처리, JWT 기반 API 연동
- 인프라: 환경별 빌드 변수 분리, 프로덕션 CI/CD 파이프라인

### 주요 성과 (수치는 본인 환경에 맞게 수정)

- 관리자 훈련 타입 설정을 UI 드래그앤드롭으로 전환해 운영 코드 수정 의존 감소
- 복합 신청 폼(주소, 날짜, 인원, 강사 배정)을 재사용 가능한 Controlled 컴포넌트로 구조화
- 배포 자동화로 수동 S3 업로드 제거, 릴리스 소요 시간 단축

### 기술 하이라이트

1. **다역할 라우팅** — Layout / Mypage / AdminPage 분리, 모바일·데스크톱 반응형
2. **폼 아키텍처** — RHF + Yup + MUI Controlled 래퍼로 관리자 폼 일관성 확보
3. **상태 관리** — Recoil(세션·UI) + React Query(서버 캐시) 역할 분담
4. **보안** — sessionStorage 사용자 정보 AES 암호화 persist
5. **관리자 UX** — react-beautiful-dnd 기반 사용/미사용 항목 관리

---

## 상세 버전 (포트폴리오 상세 페이지 / 면접 준비)

### 배경

교회·단체 대상 전도 훈련을 온·오프라인으로 신청·운영하는 B2B 웹 서비스입니다.  
기존 전화·수기 신청 방식을 웹으로 전환하고, 강사와 운영자의 업무를 하나의 플랫폼에서 처리할 수 있도록 했습니다.

### 문제와 해결

| 문제 | 접근 | 결과 |
|------|------|------|
| 훈련 유형이 늘어나 관리가 어려움 | 드래그앤드롭으로 사용/미사용 타입 관리 UI 구현 | 운영자가 코드 없이 설정 변경 |
| 신청 폼 필드가 많고 검증이 복잡함 | RHF Controller + Yup 스키마 + 공통 Input 래퍼 | 폼 로직 재사용·유지보수성 향상 |
| 사용자·관리자 API 인증 혼용 | Axios 인스턴스 분리, Bearer 토큰 헤더 공통 처리 | 인증 흐름 일원화 |
| 배포가 수동·환경별 설정 혼란 | GitHub Actions + 환경 변수 secrets 분리 | dev/prod 자동 배포 |

### 아키텍처 (면접 설명용)

```
[Browser SPA]
  ├─ Public Routes (소개, 신청, 공지, 후기)
  ├─ Mypage Routes (프로필, 강의)
  └─ Admin Routes (CRUD 백오피스)
        ↓
[Recoil] 세션·UI 상태  +  [React Query] 서버 데이터
        ↓
[Axios] REST API (withCredentials, Bearer)
        ↓
[Backend API] (비공개)
```

### 비공개 안내 문구 (포트폴리오 하단)

> 본 프로젝트는 클라이언트 NDA로 전체 소스를 공개할 수 없습니다.  
> 대신 동일 기술 패턴을 추상화한 [sanitized 샘플 레포](./sanitized-repo/README.md)를 제공합니다.

---

## 이력서 bullet 예시 (복사용)

```
• B2B 훈련 신청·운영 웹 플랫폼 프론트엔드 개발 (React, TypeScript, Vite)
• 사용자/강사/관리자 3역할 SPA 라우팅 및 반응형 UI 구현
• 카카오·네이버 소셜 로그인 연동 및 JWT API 인증 처리
• React Hook Form + Yup 기반 복합 신청·관리자 폼 및 Controlled 컴포넌트 설계
• Recoil + TanStack Query를 활용한 클라이언트·서버 상태 분리
• 관리자 훈련 타입 드래그앤드롭 관리, 회원·상품·문의 CRUD 백오피스 구현
• GitHub Actions → S3 → CloudFront 자동 배포 파이프라인 구축
```

---

## LinkedIn / 자기소개 한 문장

B2B 훈련 운영 플랫폼에서 사용자·강사·관리자 영역 전반의 React SPA, 소셜 로그인, 관리자 백오피스, CI/CD 배포를 담당했습니다.
