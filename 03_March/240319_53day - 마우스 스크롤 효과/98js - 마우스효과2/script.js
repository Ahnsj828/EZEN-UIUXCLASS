// h1 태그와 나비를 찾아올거다
const h1 = document.querySelector("h1"); // 좌표값
const box = document.querySelector(".box"); // 나비

// mouse 이동 시, 최종 좌표값 = pageX, pageY
let x = 0;
let y = 0;

// mouse 이동하기 전, 좌표값
let targetX = 0;
let targetY = 0;

// mouse 이동 전.후 아이콘의 속도 비율
let speed = 0.03;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // 재할당했다

  h1.innerText = `x : ${e.pageX} y : ${e.pageY}`;
});

const loop = () => {
  // 함수선언
  // loop는 재귀함수다
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  // 속도에 맞춰서 나비가 따라올거다

  box.style.top = targetY + "px";
  box.style.left = targetX + "px";

  window.requestAnimationFrame(loop);
  // 재귀함수로 쓰고자하는걸 다시 넣어준거다
  // requestAnimationFrame 존재하지 않으면 loop는 움직이는값을 자동으로 업데이트하지 않는다

  // targetX += (x - targetX) * speed;
  // targetY += (y - targetY) * speed;
  // box.style.top = targetY + "px";
  // box.style.left = targetX + "px";
  // 위에 내용들을 window.requestAnimationFrame(loop)이 프레임 형식으로 업데이트 한거다
};

loop();
// 함수 실행
