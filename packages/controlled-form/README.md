# @portfolio/controlled-form

React Hook Form + MUI 기반 **재사용 Controlled 입력 컴포넌트** 패턴.

## 원본에서 가져온 아이디어

관리자 훈련 신청 폼에서 `ControlledTextField`, `ControlledSelectbox`, `ControlledPostcode` 등을 조합해 복합 폼을 구성했던 방식.

## 구조

```
controlled-form/
├── package.json
├── README.md
├── src/
│   ├── components/
│   │   ├── ControlledTextField.tsx
│   │   ├── ControlledSelect.tsx
│   │   └── FormSection.tsx
│   ├── schemas/
│   │   └── requestFormSchema.ts    # Yup 검증
│   ├── demo/
│   │   └── RequestFormDemo.tsx     # 실행 가능한 데모 페이지
│   └── index.ts
└── vite.config.ts
```

## 핵심 포인트 (포트폴리오 어필)

- `Control<T>` 제네릭으로 타입 안전
- TextField / Select / Date를 동일 API로 래핑
- Yup 스키마와 `resolver` 연동
- 생성·수정 폼에서 `defaultValues`만 바꿔 재사용

## 실행

```bash
yarn workspace @portfolio/controlled-form dev
```

## 면접 한 줄

> "관리자 폼 필드가 15개 이상이라 RHF Controller + 공통 래퍼로 분리했고, 생성/수정 모달이 같은 Form 컴포넌트를 공유합니다."
