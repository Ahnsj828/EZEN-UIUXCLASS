// // 마우스가 이동하면 이미지들이 움직일거다
// // 이미지요소들을 다 찾아와야한다

// const contentAll = document.querySelectorAll(".contentWrap img");
// // // contentWrap 안에 모든 img들
// // // console.log(contentAll); // nodelist

// // const shadow = contentAll[0];
// // // 0 번째 인덱스
// // const date = contentAll[1];
// // const human = contentAll[2];
// const [shadow, date, human, textImg] = contentAll;
// // 위에 일일이 가져온걸 구조분해할당으로 가져왔다

// let x = 0;
// // 마우스가 이동하기 전 값
// let targetX = 0;
// // 마우스가 이동 final 값
// const speed = 0.1;
// // 마우스 이동속도

// // window.addEventListener("mousemove", (e) => {
// //   // 마우스가 움직이게 된다면 다음과 같은 함수를 작동하게해줘라

// //   x = e.pageX;

// //   shadow.style.transform = `translateX(${x}px)`;
// //   // css에서 transform줘서
// //   human.style.transform = `translateX((${-x})px)`;
// // });

// // 초당 프레임값으로 움직이게하려고
// window.addEventListener("mousemove", (e) => {
//   // 마우스가 움직이게 된다면 다음과 같은 함수를 작동하게해줘라

//   x = e.pageX;
// });

// const loop = () => {
//   shadow.style.transform = `translateX(${x}px)`;
//   // css에서 transform줘서
//   human.style.transform = `translateX(${-x}px)`;

//   window.requestAnimationFrame(loop);
// };

// loop();
//
//
// =====================================================================
//
//
// 이 요소가 웹브라우저 안에서만 움직이게 할거다 / 웹브라우저의 절반값만 움직이게할거다

const contentAll = document.querySelectorAll(".contentWrap img");
const [shadow, date, human, textImg] = contentAll;

let x = 0;
let targetX = 0;
const speed = 0.1;
window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  // 절반만 움직임만 움직이게할거다
  // 전체 너비를 쓰지 않고 절반만 쓰게할거다
});

const loop = () => {
  targetX += (x - targetX) * speed;
  // 처음 위치 - 처음 이동한 값 * 속도값
  // 이동속도에 맞춰서 바로 반응하는게 아니라 조금 느리게

  shadow.style.transform = `translateX(${x / 35}px)`;
  date.style.transform = `translateX(${x / 20}px)`;
  human.style.transform = `translateX(${-x / 20}px)`;
  textImg.style.transform = `translateX(${-x / 20}px)`;
  // 나눴다 => 움직임의 폭을 줄이게 / 전체를 쓰지못하게

  window.requestAnimationFrame(loop);
};

loop();
