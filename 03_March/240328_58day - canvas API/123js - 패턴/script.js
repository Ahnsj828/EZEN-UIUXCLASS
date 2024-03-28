// JS 수업 첫시간에 변수가 가장 중요하다고 했었다!
// 어떻게 사용하냐에 따라서
// 변수가 값 담는거로만 그치지마라
// 변수를 어떻게 어디에 담냐에 따라 값이 달라진다

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);

let img = new Image();
img.onload = () => {
  let pattern = ctx.createPattern(img, "repeat");
  // 패턴화하고자 하는 소스 / 반복하고자하냐 "repeat" , "no-repeat"
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 200, 200);
};

img.src = "./pattern.png";
