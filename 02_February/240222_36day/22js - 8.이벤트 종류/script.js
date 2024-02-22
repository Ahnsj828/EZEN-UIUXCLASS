// window.onload = alert("안녕하세요!");

// const body = document.querySelector("body");
// const button = document.querySelector("button");

// // 이벤트가 발생했을 때 그 함수가 작동할 수 있게 핸들링할 수 있어야한다
// // click은 이벤트  앞에 on이 붙으면 => onclick은 핸들러다

// button.onclick = () => {
//   body.style.backgroundColor = "green";
// };
// // button.onclic 버튼이 클릭되었을 때 뒤에 함수를 실행시켜주세요

// // 변수뒤에 속성(onclick)이거나 메써드(함수)거나 둘중에 하나만 붙는다

// --------------------------------------
// const button = document.querySelector("button");
// const btnFnc = () => {
//   document.body.style.backgroundColor = "green";
// };
// button.onclick = btnFnc;

// =============================================
// //  <keydown> 키를 누르는 순간 /  (*어떤 키를 눌렀는 가에 대한 관심)
// const result = document.querySelector("#result");
// document.body.onkeydown = (event) => {
//   // event 변수명이다 피카츄라고 해도 된다 / 직관적으로 적어줘야한다
//   result.innerText = event.key;
//   // event.key 이 객체의 속성
// };
// // 어떤 키를 눌렀는지 알아챈다
// // 키보드 키를 누르는 순간 알아챈다
// // 로그인 버튼을 누르는것 대신 enter로 대체할때도 사용한다

// =================================================
// const result = document.querySelector("#result");
// document.body.onkeydown = (event) => {
//   result.innerText = `
//   code : ${event.code},
//   key : ${event.key}
//   `;
// };

//
//
//
// =================================================
