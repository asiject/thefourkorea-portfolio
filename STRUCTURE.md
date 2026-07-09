# Sanitized 샘플 레포 — 폴더 트리

아래 구조를 `frontend-admin-patterns`라는 **별도 GitHub 저장소**로 복사해 사용하세요.

```
frontend-admin-patterns/
├── README.md
├── package.json
├── .env.example
├── .gitignore
├── docs/
│   ├── ARCHITECTURE.md
│   └── PORTFOLIO_NOTE.md
└── packages/
    ├── controlled-form/
    │   ├── package.json
    │   ├── README.md
    │   └── src/
    │       ├── components/
    │       │   └── ControlledTextField.tsx
    │       └── demo/
    │           └── RequestFormDemo.tsx
    ├── encrypted-storage/
    │   ├── package.json
    │   ├── README.md
    │   └── src/
    │       └── atoms/
    │           └── sessionUserAtom.ts
    ├── admin-dnd-board/
    │   ├── package.json
    │   └── README.md
    ├── social-auth-callback/
    │   ├── package.json
    │   └── README.md
    └── static-deploy/
        ├── package.json
        ├── README.md
        └── .github/
            └── workflows/
                └── deploy.yml
```

## GitHub에 올리는 순서

```bash
# 1. sanitized-repo 폴더를 새 디렉터리로 복사
cp -r portfolio/sanitized-repo ~/frontend-admin-patterns
cd ~/frontend-admin-patterns

# 2. git 초기화
git init
git add .
git commit -m "feat: add sanitized frontend admin pattern samples"

# 3. GitHub에 새 repo 생성 후 push
git remote add origin https://github.com/{username}/frontend-admin-patterns.git
git branch -M main
git push -u origin main
```

## 이력서에 넣을 링크 문구

```
패턴 샘플 (공개): github.com/{username}/frontend-admin-patterns
```
