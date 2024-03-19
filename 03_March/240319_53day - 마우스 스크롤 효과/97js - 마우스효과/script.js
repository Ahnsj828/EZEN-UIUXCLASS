// // 마우스의 움직임에 따라 좌표값이 변경되고 있다는 사실을 확인해야한다!

// // 마우스가 움직이는 곳 => 웹브라우저

// // window 객체 안에 포함되어 있는 이벤트

// // 웹상에 움직여지는 효과들은 window객체가 관리하고 있는 속성값이다

// //
// //

// // clientX : 74 = 스크롤을 인식하지 않은 상태에서 단순히 웹브라우저상의 마우스의 위치값을 계속 반환
// // pageX : 74 = 스크롤할때 반드시 사용한다
// // screenX : -823 = 듀얼모니터일때 값이 차이가 난다
// // 사용빈도 = pageX > clientX > screenX

// // clientX pageX 평상시에는 똑같다
// // 웹페이지를 스크롤하게 되면 값이 바뀌어진다
// // 지금 만든페이지는 스크롤 안해도되는 페이지다 => 이럴땐 둘이 똑같은 값을 반환한다

// // if, 스크롤이 발생될 수 밖에 없는 페이지안에서 스크롤이 내려가는 상황에서도 나의 x 혹은 y좌표값을 찾아 오고 싶다면, 반드시 pageX 속성값을 사용해야한다!!

// // 만약 마우스 안움직이고 스크롤이 내려가도 clientX은 똑같은 값이다
// // pageX는 clientX의 상위개념이다

// //
// //

// const cursorItem = document.querySelector(".cursorItem");
// // console.log(cursorItem);
// let x = 0,
//   y = 0;
// // x와y의 좌표값을 일단 0으로
// // 굳이 초기좌표값을 밖에 선언하는 이유 => 스코프에 대한 개념 / 이벤트안에 선언하면 이벤트가 작동될때에만 선언할 수 있고 전역으로 선언해야지 나중에 값을 빼내올 수 있어서

// window.addEventListener("mousemove", (e) => {
//   // mousemove 마우스가 이동한다면 다음과 같은 콜백함수를 실행해라
//   // console.log("mousemove"); // 마우스가 이동하면 숫자가 늘어난다
//   x = e.pageX;
//   y = e.pageY;
//   // 재할당했다
//   // console.log(e.pageX, e.pageY);

//   cursorItem.style.transform = `translate(${x}px, ${y}px)`;
// });

// // x와 y는 잠깐 안에 들어갔다 나왔다

// // const loop = () => {
// //   cursorItem.style.transform = `translate(${x}px, ${y}px)`;
// // };
// // // loop라는 함수가 선언이 되었다
// // loop();
// // // loop라는 함수를 실행시켰다

//
//
// // ========================================================================
// //
// //  << 마우스 속도 >>

// // 현재 마우스가 위치해 있는 좌표값
// //  이동 후 마우스가 위치해 있는 좌표값
// // 현대 좌표값 => 이동 후 좌표값 속도 비율 =>  1 : 1
// //
// //

// const cursorItem = document.querySelector(".cursorItem");
// // console.log(cursorItem);
// let x = 0,
//   y = 0;

// let targetX = 0,
//   targetY = 0;
// // targetX, targetY 현재의 좌표값을 의미

// const speed = 0.05;
// // 마우스 속도
// // 0.5s => 1 :5
// // 1은 주나마나

// window.addEventListener("mousemove", (e) => {
//   x = e.pageX;
//   y = e.pageY;
//   // pageX, pageY 이동한 후의 결과값의 좌표를 의미

//   targetX += (x - targetX) * speed;
//   // 여기서 x는 x = e.pageX;
//   // 속도에 대한 비율
//   targetY += (y - targetY) * speed;

//   cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
// });

// // ========================================================================
// //
// //  << 네 아니오 갔을때 마우스효과 크기 변화 >>
// //
// //

// const cursorItem = document.querySelector(".cursorItem");
// // console.log(cursorItem);
// const circle = cursorItem.querySelector(".circle");
// const buttonAll = document.querySelectorAll("a");

// let x = 0,
//   y = 0;

// let targetX = 0,
//   targetY = 0;

// const speed = 0.03;

// buttonAll.forEach((button) => {
//   button.addEventListener("mouseenter", () => {
//     //마우스가 네 아니오 공간에 들어갔을때 => mouseenter
//     circle.style.transform = "scale(0.3)";
//   });
//   button.addEventListener("mouseleave", () => {
//     //마우스가 네 아니오 공간에서 나왔다 => mouseleave
//     circle.style.transform = "scale(1)";
//   });
// });

// window.addEventListener("mousemove", (e) => {
//   x = e.pageX;
//   y = e.pageY;

//   targetX += (x - targetX) * speed;
//   // 여기서 x는 x = e.pageX;
//   // 속도에 대한 비율
//   targetY += (y - targetY) * speed;

//   cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
// });
// ========================================================================
//
//
//
// << 더 부드럽게 하려고 재귀함수 형식으로 >>

const cursorItem = document.querySelector(".cursorItem");
// console.log(cursorItem);
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.05;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.5)";
  });
  button.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // 얘는 좌표값만 찾아오게만했다
});

const loop = () => {
  // 애니메이션에는 프레임이라는 개념이 있다
  // 움직일때마다 알아서 그때그때마다 프레임을 찾아오게 하려고한다
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  // 프레임 형식으로 분할시켰다

  window.requestAnimationFrame(loop);
};

loop();
// 아까보다 훨신 더 부드러워졌다
// 아까는 마우스무브 이벤트가 작동할때 동시에 순차적으로 처리해야되는게 세가지였다
// 지금은 윈도우에 의존하지말고 자체적으로 실행시키게한거다
// loop 재귀함수다 / 자체적으로 실행시켜라
// 컴퓨터의 메모리에 덜 무리가게 한다
