const canvas = document.querySelector("canvas");
// console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(ctx);

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(260, 100);
ctx.lineTo(120, 250);
ctx.lineTo(170, 30);
ctx.lineTo(220, 250);

ctx.closePath();

ctx.stroke();
