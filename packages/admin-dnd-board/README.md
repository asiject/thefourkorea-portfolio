# @portfolio/admin-dnd-board

**사용/미사용** 두 컬럼 칸반 + `react-beautiful-dnd` + API 동기화 패턴.

## 원본에서 가져온 아이디어

관리자 훈련 타입을 드래그로 활성/비활성 전환하고 서버에 PATCH하는 UI.

## 구조

```
admin-dnd-board/
├── package.json
├── README.md
├── src/
│   ├── components/
│   │   ├── DndBoard.tsx
│   │   ├── BoardColumn.tsx
│   │   └── BoardItem.tsx
│   ├── hooks/
│   │   └── useBoardItems.ts        # React Query
│   ├── api/
│   │   └── mockItemApi.ts          # example.com 대체 mock
│   ├── types/
│   │   └── board.ts
│   ├── demo/
│   │   └── DndBoardDemo.tsx
│   └── index.ts
└── vite.config.ts
```

## 핵심 포인트

- `DragDropContext` + `onDragEnd`에서 상태·API 업데이트
- React Query로 목록 fetch, mutation 후 invalidate
- 컬럼 키: `ACTIVE` / `INACTIVE` (도메인 중립 이름)

## 면접 한 줄

> "운영자가 훈련 타입 활성화를 코드 배포 없이 바꿀 수 있게 DnD 보드로 만들고, 드롭 시 API로 즉시 반영했습니다."
