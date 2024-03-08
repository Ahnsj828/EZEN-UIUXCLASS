// XMLHttpRequest 과거에 사용하던 방식 / 서버와 비동기처리 방식으로
const xhr = new XMLHttpRequest();
// new 보면 => 어딘가에 프로토타입으로 만들어져있는거를 가져다 쓸거다
// new라는걸 보면 xhr는 인스턴스객체다

xhr.open("GET", "student.json", true);
// xhr객체 => 객체 뒤에는 속성값 혹은 함수를 적을 수 있다
// GET => 데이터를 찾아올거라서
// student.json데이터를 GET방식으로 true 비동기 방식으로 찾아오고싶다
xhr.send();
// 요청할거야

console.log(xhr); // XMLHttpRequest

// JS DOM => Event
// export. 버튼 / 오버
// 1) 이벤트 핸들러
//   button.onclick = function() {}
//     // 앞에 on붙었다 => 무언가 기능과의 매개체 역할을 하는 핸들러다!
// 2) addEventListner()

// onreadystatechange : 클라이언트가 서버에 데이터를 요청하고, 서버에서 데이터를 전송해주는 과정속에서 데이터가 이동될 때마다 실행되는 이벤트 핸들러! /이벤트 핸들러 역할을 한다
// readyState: 값
// readyState: 0 => 클라이언트가 서버에 아무런 요청을 하지 않은 단계
//             1 => 클라이언트가 서버에 자료를 요청하고 성공한 상태
//             2 => 클라이언트가 서버에 자료를 요청한 이후 서버가 클라이언트 측에 응답메세지를 헤더로 전송한 상태
//             3 => 서버에서 클라이언트 측으로 데이터가 전송중인 상태
//             4 => 서버가 정상적으로 클라이언트측에 데이터를 전송완료했고, 이제 클라이언트 측에서  데이터를 마음껏 사용할 수 있는 상태

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // xhr.onreadystatechange 값이 바뀌면 이거 해줘라
    // function() 다음과 같은 함수를 실행시켜줘
    // if(xhr.readyState == 4) 서버가 정상적으로 데이터를 줬다면
    // xhr.status == 200 정상적으로 잘 작동한다
    const student = JSON.parse(xhr.responseText);
    // JSON은 웹브라우저에 바로 출력할 수 없다
    // console.log(student);
    document.write(`${student.name}학생은 ${student.grade}학년 입니다.`);
  }
};
