// 다크모드, 라이트모드 - 포폴 기본으로 나온다

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

// 가상클래스 지정해주기

// const button = document.querySelector("#toggle-box button");
// console.log(button);

// const section = document.querySelectorAll("p")[0];
// console.log(section);

// title.onclick = () => {
//   title.style.backgroundColor = "#000";
//   title.style.color = "#fff";
// };
//
//
//
// ==============================================
//
// < 쌤 >
const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");
// console.log(body);
// console.log(button);

// button.onclick = () => {
//   // console.log("click");
//   body.classList.toggle("dark");
// };

// < 이럴때(다크모드 바꾸기도 바꿔야하는 상황)는 if조건문 쓰는게 정석이다! >
button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
