1. css 적용 방법

1-1. inline style

- 객체로 작성해야함
- 카멜케이스 방식으로 작성해야함

1-2. css 파일

- 컴포넌트에 종속되지 않음, 전 페이지에 영향을 미침

1-3. css module

- 컴포넌트\_클래스\_\_ 형태로 네이밍이 정의됨

2. state

- useState를 통해 state를 업데이트 해야함

3. props

4. router

- Switch -> Routes / Route로 변경
- exact 사용X

5. REST API

- Create : POST
- Read : GET
- Update : PUT
- Delete : DELETE

npm install json-server
npx json-server --watch ./server/data.json --port 포트번호

6. useEffect

- 어떤 상태값이 바꼈을 때 동작할 수 있는 함수를 작성
