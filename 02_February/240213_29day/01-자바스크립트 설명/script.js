// const button = document.querySelector("button");
// // console.log(button);
// // 콘솔창을 통해서 알려줘
// // console 찾기 위해서 쓰는거다
// button.addEventListener("click", () => {
//   alert("오늘도 화이팅입니다!");
//   // alert() : 알림창 사용 (alert함수)
// });

// -------------------------------------------

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   confirm("오늘도 화이팅 하시겠습니까?");
//   // confirm() : 승인여부 사용  (confirm함수)
// });

// ------------------------------------------

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   prompt("당신의 이름을 입력해주세요!");
//   // prompt() : 사용자로 하여금 어떤 값을 받고자 할 때 사용  (prompt함수)
// });

// -----------------------------------------

// const name = "안성진",
// document.write("제 이름은" + name + "입니다")

// defer 쓸때
// => html에서 찾아올게 있을때만 쓴다
// defer 안쓸때
// => html에서 찾아올게 없을때 쓴다
// => 이때쓰면 하염없이 기다린다

// ----------------------------------------------//

// const name = "안성진",
// window.document.write("제 이름은 " + name + "입니다")
// 원래 정식문법은 앞에 window. 를 쓰는게 정식이다
// 하지만 어차피 document window자식이라는거 아니까 안쓰는거다

// -------------------------------------------

// window.addEventListener("DOMContentLoaded"), function () {
//   const button = document.querySelector("button");
//   button.addEventListener("click", () => {
//     alert("오늘도 화이팅입니다!");
//   });
// }

// const name = "안성진",
// window.document.write("제 이름은 " + name + "입니다")

// 굳이 html에 defer안써도된다
// 두가지를 동시에 할 수 있다
// 보통은 이렇게 잘 안한다

// -------------------------------------------

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   const userName = prompt("당신의 이름을 입력해주세요!");
//   document.write("userName");
// });
