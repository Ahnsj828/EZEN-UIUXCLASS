// const button = document.querySelector("button");

// button.onclick = () => {
//   document.body.style.backgroundColor = "crimson";
// };
// // 이벤트 처리하는 방법(실행방법) - 2.외부 스크립트 방법 : 이벤트 핸들러를 사용하는 방법

// // ----------------------------------
// // // 이벤트 처리하는 방법(실행방법) - 3. 외부 스크립트 방법 : 이벤트 리스너를 사용하는 방법 (많이 사용할거다)

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });
// // 추가하겠다 이벤트를 리스너입장에서 받아서 어떤기능을 추가할지
// // 버튼이라는 클릭이라는 이벤트가 벌어진다면 다음과 같은 일이 벌어지게해줘
// // 콜벡함수(함수안에 또다른 함수)를 가져올 수 있다
// //
// //
// //
// =====================================================
//

// 1번방법
// const button = document.querySelector("input[type='submit']");
// console.log(button);

// 2번방법
// const btn = document.querySelector("#submit");
// console.log(btn);

// // 두 방법 다 가능하다

// // ---------------------
// const form = document.querySelector("form");
// const button = document.querySelector("input[type='submit']");

// // 1번방법
// // form.addEventListener("submit", () => {
// //   // 닭잡는데 소잡는 칼쓰는경우 (정석이긴한데 프론트앤드에는 과하다)
// // })

// // 2번방법
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const word = document.querySelector("input[type='text']").value;
//   // word라는 변수에 넣겠다
//   // 어떤값을 찾아올때 value
//   // console.log(word);
//   const result = document.querySelector(".result");

//   const count = word.length;
//   // 문자열의 길이를 확인할때도 length쓴다
//   result.innerText = count;
// });
//
//
// // ---------------------
// <<아이디 몇자 이상 일때 회원가입 될때>>
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
// 2번방법
button.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value;
  const result = document.querySelector(".result");

  const count = word.length;
  result.innerText = count;

  if (count >= 10) {
  } else {
    alert("아이디는 10자 이상이어야 합니다!");
  }
});
