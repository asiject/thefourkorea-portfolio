# 아키텍처 개요

## 목적

원본 B2B 플랫폼의 기술 결정을 **도메인 없이** 재현합니다.

## 레이어

```
┌─────────────────────────────────────────┐
│  Demo Pages (각 packages/*/src/demo)    │
├─────────────────────────────────────────┤
│  Feature Components                     │
│  - Form, DnD Board, Auth Callback       │
├─────────────────────────────────────────┤
│  State                                  │
│  - Recoil (client/session)              │
│  - TanStack Query (server)              │
├─────────────────────────────────────────┤
│  API Layer (mock / example.com)         │
└─────────────────────────────────────────┘
```

## 원본 대비 매핑

| 원본 (비공개) | 샘플 패키지 |
|---------------|-------------|
| 관리자 TrainingForm | `controlled-form` |
| Recoil userState AES | `encrypted-storage` |
| TrainingTypeDraggableList | `admin-dnd-board` |
| KakaoAuth / NaverAuth | `social-auth-callback` |
| .github/workflows/production.yml | `static-deploy` |

## 상태 관리 원칙

- **서버 데이터**: React Query (fetch, cache, invalidate)
- **UI·세션**: Recoil atom
- **폼**: React Hook Form (로컬, submit 시 API)

## 공개하지 않는 것

- 실제 API 스키마·엔드포인트
- 회원·훈련·상품 도메인 모델
- 브랜드 에셋·카피
