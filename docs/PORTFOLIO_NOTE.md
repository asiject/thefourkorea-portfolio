# 포트폴리오 사용 가이드

## 이 레포를 GitHub에 올릴 때

1. **새 저장소**로 `frontend-admin-patterns` 이름 생성 (thefour-b2b와 분리)
2. `portfolio/sanitized-repo/` 폴더 내용만 복사해 push
3. README 상단에 NDA·sanitized 안내 유지
4. `.env.example`만 커밋, `.env`는 절대 커밋 금지

## 이력서·포트폴리오에 링크하는 방법

```
THE FOUR B2B 훈련 플랫폼 (NDA, 소스 비공개)
→ 동일 패턴 샘플: github.com/{username}/frontend-admin-patterns
```

## 면접에서 설명할 때

1. 원본: B2B 훈련 운영 플랫폼, 전체 FE 담당 (역할 구체화)
2. 비공개 이유: 클라이언트 NDA
3. 대신: 핵심 패턴 5개를 추상화해 샘플 레포로 공개
4. 데모: `yarn dev:form`, `yarn dev:dnd`로 라이브 확인 가능

## 채용 담당자가 볼 포인트

- [ ] Controlled Form 재사용 설계
- [ ] DnD + API 동기화 (optimistic vs refetch)
- [ ] OAuth 콜백·토큰 처리 흐름
- [ ] CI/CD 템플릿 이해도
- [ ] 보안 의식 (암호화 storage, secrets 분리)

## 다음 단계 (선택)

- [ ] 각 패키지에 Storybook 추가
- [ ] `admin-dnd-board` Vitest 테스트 1~2개
- [ ] Vercel/Netlify에 데모 배포
