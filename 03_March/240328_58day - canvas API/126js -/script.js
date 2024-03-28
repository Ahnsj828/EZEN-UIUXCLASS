const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 선과 선이 교차하는 지점
// canvas API에서 선의 교차지점 스타일 정의
// 1) bavel : 선이 교차하는 지점을 단면으로
// 2) miter : 선이 교차하는 지점에서 각지게
// 3) round : 선이 교차하는 지점에서 둥글게

const lineJoin = ["bavel", "miter", "round"];
ctx.strokeStyle = "#222";

for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.stroke();
}
