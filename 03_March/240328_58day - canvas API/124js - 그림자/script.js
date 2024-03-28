const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let radGrad = ctx.createConicGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "orange");
radGrad.addColorStop(1, "red");

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 20;
ctx.shadowBlur = 10;

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();
