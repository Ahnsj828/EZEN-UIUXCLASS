const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// canvas API 에서 선을 그릴 때, 선의 끝자락 모양 스타일 정의
// 1) butt : 기본값 = 선의 끝모양을 단면으로 처리
// 2) round : 선의 끝모양을 동그랗게 처리
// 3) square : 선의 끝에 선 높이의 1/2 정도만큼 추가로 더함

const lineCap = ["butt", "round", "square"];
ctx.strokeStyle = "#222";
// 이 값을 공통으로 갖되 butt, round, square 세 스타일로 줄거다
//  => 반복문
for (let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(50, 50 + i * 30);
  ctx.lineTo(350, 50 + i * 30);

  ctx.stroke();
}
