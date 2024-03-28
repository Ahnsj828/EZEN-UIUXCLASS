const canvas = document.querySelector("canvas");
// console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(ctx);

let img = new Image();
img.onload = () => {
  // 이미지가 로딩된다면 다음과같은 함수를 실행시켜라
  //
  // drawImage함수 : canvas영역안에 이미지를 넣고자 할때 사용!
  // 총 3개의 매개변수가 할당이 된다
  // 이미지 경로 / x축, y축으로 얼만큼 떨어지는 지점에 넣을거냐 / 가로, 세로 (없을경우 canvas에 맞춰서 채워진다 cover)
  //
  // ctx.drawImage(img, 0, 0, 300, 200);
  // 이미지 크기 지정도 가능  // 가로 300, 세로 200
  //
  // ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
  //
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  // 해당이미지를 전체 canvas w, h에 맞춰서 가득채우겠다
};
img.src = "./bird.jpg";

ctx.beginPath();
// beginPath 지금까지 작업한건 그대로 두고 이제부터 새로 작업하겠다는 의미
ctx.arc(300, 200, 150, 0, (Math.PI / 180) * 360, false);
ctx.clip();

/* < 이미지를 일부분만 나타나게 하는 방법 >
drawImage(img / 현재 캔버스를 기준으로 x, y축 / w,h / 현재 캔버스를 기준으로 x, y축 / w,h)
*/
