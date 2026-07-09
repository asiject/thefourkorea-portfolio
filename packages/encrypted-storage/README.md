# @portfolio/encrypted-storage

Recoil atom + **sessionStorage AES 암호화** persist 패턴.

## 원본에서 가져온 아이디어

로그인 사용자 정보를 sessionStorage에 저장할 때 `crypto-js`로 암호화해 평문 노출을 줄였던 방식.

## 구조

```
encrypted-storage/
├── package.json
├── README.md
├── src/
│   ├── atoms/
│   │   └── sessionUserAtom.ts      # effects로 encrypt/decrypt
│   ├── utils/
│   │   └── storageCrypto.ts
│   ├── demo/
│   │   └── SessionDemo.tsx
│   └── index.ts
└── vite.config.ts
```

## 핵심 포인트

- Recoil `effects`의 `onSet`으로 storage 동기화
- `VITE_STORAGE_SECRET_KEY` 환경 변수 사용 (샘플은 더미)
- reset 시 storage 항목 제거

## 주의 (면접에서 말할 수 있는 한계)

- 클라이언트 암호화는 **완전한 보안이 아님** (키가 번들에 노출)
- 민감 정보는 서버 세션·HttpOnly 쿠키가 더 적합
- 이 패턴은 "평문 storage보다 나은" 실무적 선택으로 설명

## 면접 한 줄

> "클라이언트 저장소에 사용자 프로필을 넣을 때 평문 대신 AES로 감쌌고, 토큰은 메모리·헤더로만 관리했습니다."
