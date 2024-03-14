// // API
// // Aplication Progtaming Interface

// // 전국 캠핑장 정보 병원현황 미세먼지농도 등등
// // 정부에서 모아놓은 데이터
// // 그런데이터를 json형식으로 불러오는거

// // fetch함수도 api중 하나다

// // 웹과 서버가 통신하는 초창기 기법 => XMLHttpRequest

// const xhr = new XMLHttpRequest();
// // xhr는 인스턴스 객체가 할당된다
// // console.log(xhr);
// xhr.open("GET", "student-2.json", true);
// // 서버에서 데이터 가져올때 get
// // 서버에서 데이터 보낼때 post
// // student-2.json 이라는 파일을 가져올거다
// // 비동기 처리방식이라서 true
// xhr.send();
// // 서버에 student-2.json 파일을 보냈다

// // console.log(xhr);

// const renderHTML = (contents) => {
//   let output = "";
//   for (let content of contents) {
//     output += `
//       <h2>${content.name}</h2>
//       <ul>
//         <li>전공 : ${content.major}</li>
//         <li>학년 : ${content.grade}</li>
//       </ul>
//       <hr/>
//     `;
//     // contents안에있는 객체를 하나씩 꺼내와서 하나씩 할당해주려고한다
//     // 문자열과 배열을 같이 병행해서 쓰고싶으면 템프릿리터럴 문법써줘야한다 => ``백팃써줘야한다
//   }
//   document.querySelector("#result").innerHTML = output;
//   // 값을 출력할 공간이 #result라서
// };

// xhr.onreadystatechange = () => {
//   // 라는 이벤트 핸들러를 활용해서 다음과 같은 함수를 실행하겠다
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     // jsson을 객체로 바꾸려면 parse 함수를 써야한다
//     // console.log(students);
//     renderHTML(students);
//   }
// };

//
// -------------------------------------------------------------------------
//
// XMLHttpRequest를 안쓰고 fetch함수를 쓰는지

// 데이터를 가져오려고한다
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student-2.json", true);
// xhr.send();

// // 이렇게 줄일 수 있다 =>

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>        
        <li>전공 : ${content.major}</li>
        <li>학년 : ${content.grade}</li>
        </ul>
        <hr/>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  });
// then은 체이닝 기법 then 뒤에 then 뒤에.. 가능하다
// => 이렇게 간략해져서 fetch함수를 ㅆ는게 더 유리하다
