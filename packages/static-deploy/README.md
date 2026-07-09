# @portfolio/static-deploy

Vite SPA **GitHub Actions → S3 sync → CloudFront invalidation** 템플릿.

## 원본에서 가져온 아이디어

production 브랜치 push 시 빌드 후 S3 업로드·CDN 캐시 무효화.

## 구조

```
static-deploy/
├── package.json
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml              # sanitized — 버킷명·ID는 placeholder
├── vite.config.ts
├── src/
│   └── main.tsx                    # 최소 Hello SPA
└── public/
```

## workflow 핵심 단계 (sanitized)

```yaml
# 1. checkout
# 2. setup-node
# 3. yarn install
# 4. yarn build (env: VITE_API_BASE_URL from secrets)
# 5. aws s3 sync ./dist s3://YOUR_BUCKET_NAME --delete
# 6. aws cloudfront create-invalidation --distribution-id ${{ secrets.DIST_ID }}
```

## Secrets 목록 (예시 이름만)

| Secret | 용도 |
|--------|------|
| `VITE_API_BASE_URL` | 빌드 시 API 주소 |
| `AWS_ACCESS_KEY_ID` | 배포 권한 |
| `AWS_SECRET_ACCESS_KEY` | 배포 권한 |
| `AWS_REGION` | 리전 |
| `S3_BUCKET_NAME` | 대상 버킷 |
| `CLOUDFRONT_DISTRIBUTION_ID` | 캐시 무효화 |

## 면접 한 줄

> "프론트는 정적 호스팅이라 S3+CloudFront로 배포하고, GitHub Actions에서 환경별 secrets로 빌드 변수를 분리했습니다."
