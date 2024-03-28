// 도형을 만들고 색상을 부여할 때, 투명도 정의하는 방법 2가지 학습!
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);

// ctx.globalAlpha = 0.3;
// 한번에 다같이 주는방법
// 0에 가까울수록 불투명해진다

// ctx.fillStyle = "rgb(255, 0, 0, 0.2)";
// ctx.fillRect(50, 50, 100, 50);
// // fillStyle은 fillRect가 없으면 의미없다
// // 0.2 마지막에 불투명도 줄 수 있다

// ctx.fillStyle = "rgb(255, 255, 0, 0.9)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 0, 255, 0.4)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 255, 0, 1)";
// ctx.fillRect(350, 50, 100, 50);

//
// ---------------------------------------------
//
// << 그라디언트 >>
// 선형 그라디언트 & 원형 그라디언트
// 리니어 그라디언트 && 래디얼그라디언트

// < 선형 그라디언트 >
// let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// // createLinearGradient 선형그라디언트
// // (x, y, x, y)
// // 브레이크 포인트 / 중집점?
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");
// // 여기까진 그라디언트 정의만한거다 / 도형을 정해주진 않았다

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// < 원형 그라디언트 >
//     - 2개의 원이 필요하다
//     - 먼저 입력되는 수치값 내부 원
//     - 나중 입력되는 수치값 외부 원
let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// createRadialGradient 원형그라디언트
radGrad.addColorStop(0, "white");
// "white" 헥사코드말고 문자열도 가능
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();
