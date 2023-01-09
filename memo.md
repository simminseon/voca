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

7. JSON (Javascript Object Notation)

- 데이러틑 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식
- JSON은 어떠한 통신 방법도, 프로그래밍 문법도 아닌 단순히 데이터를 표시하는 표현 방법일 뿐이다.
- 객체의 형식을 기반으로 만들어졌다.
- {"string key" : "string value"}

7-1. JSON.stringify()

- 객체를 JSON 문자열로 변환한다.

7-2. JSON.parse()

- JSON을 객체로 변환한다.

8. fetch()

- API를 간편하게 호출할 수 있도록 브라우저에서 제공하는 함수
  fetch("url 필수", {옵션})

fetch('url')
.then(response => response.json())
.then(json => console.log(json))

- fetch()안에 기본적으로 요청할 url을 넣는다.
- get, post, put, delete중 default 값으로는 get이 동작한다.
- url에 요청을 하고 응답객체(response)를 받는다.
- 첫번재 .then()에서 응답을 받고, .json()메소드로 파싱한 json()값을 리턴한다.
- 두번째 .then()에서 리턴받은 json값을 받고, 원하는대로 처리가 가능하다.

8-1. fetch interface

- body : request에 대한 실제 데이터를 담고 있음, request를 보낼 때 어떤 데이터를 함께 보내야 된다면 body에 담아서 보내야 함
- headers : requset에 관한 부가적인 정보들을 담고 있음
- request
- response
