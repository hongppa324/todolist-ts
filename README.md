## TypeScript 개인 과제

### 📢 과제 개요

**24. 03. 05 - 24. 03. 08**

- 과제: Typescript로 TodoList 만들기
- 내용: Level 1 ~ 5 내용에 따라, Typescript 버전으로 작성

```
- 레벨1 : React 이용 Todolist
- 레벨2 : RTK 이용 Todolist
- 레벨3 : RTK + json-server 이용 Todolist
- 레벨4 : RTK + redux thunk 이용 Todolist
- 레벨5 : RTK + react-query 이용 Todolist
```

### 📑 사용 기술

- React
- TypeScript
- Redux Toolkit
- React Query
- Json Server

### 💡 필수 구현 사항

- Todo 항목 추가 하기
  - 사용자가 새로운 Todo 항목을 입력하고 추가
- Todo 항목 목록 표시 기능
  - 각 Todo 항목은 고유 식별자를 가짐
- Todo 삭제 하기
  - 삭제 시 사용자에게 삭제 확인 요청
- Todo 완료 상태 표시 기능
  - 사용자가 Todo 항목을 완료했음을 표시
- 제출을 위한 GIT 관련 내용
  - 선택한 레벨에 맞는 branch명을 생성

### 📌 요구 사항

- 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성
- Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링
- Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현
- Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 전체 화면의 가운데로 정렬
- 컴포넌트 구조는 자유롭게
