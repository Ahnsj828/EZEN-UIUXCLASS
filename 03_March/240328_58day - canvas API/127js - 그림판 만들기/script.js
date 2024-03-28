const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");
// console.log(canvas, toolbar);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;
// 위에 툴바 영역의 높이는 빼줘야하니까
// offsetHeight 어떤 지점으로부터의 높이
// console.log(canvas);

const canvasOffsetY = canvas.offsetTop;
// console.log(canvasOffsetY);

const ctx = canvas.getContext("2d");

let isDrawing = false;
// 처음에는 그림이 그려지면 안되니까 초기값을 false로 주는거다
let startX;
let startY;
// 툴바를 고려하지 않은 좌표값이다
let lineWidth = 2;

// 마우스가 클릭이 된 상태에서 움직여야 그림이 그려진다
// 마우스가 클릭이 떼어지지 않은상태에서 움직이면 그림이 그려지게할거다

canvas.addEventListener("mousedown", (e) => {
  // console.log("start");

  // 단락회로평가
  isDrawing = true;
  // 마우스다운 하고부터는 그림이 그려지게 true로

  startX = e.clientX;
  startY = e.clientY;
  // console.log(e.clientX, e.clientY);
  // pageX와 pageY를써도 되지만 굳이 쓰지 않아도 된다
  // 스크롤을 안하는 상황이니 clientX와 clientY 로 써도 된다
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    // 마우스가 눌려지고 움직여져야한다
    return;
  }
  // console.log("moving");

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  // e.clientX, e.clientY 스타트x좌표, 스타트y좌표
  // canvasOffsetY 툴바의 높이를 빼줬다
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

//
//
//
// < 지우기버튼 활성화>
toolbar.addEventListener("click", (e) => {
  // console.log("click");
  if (e.target.id === "reset") {
    // console.log("it's me");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
//
//
//
// < 색변화 활성화 >
toolbar.addEventListener("change", () => {
  if (e.target.id === "stroke") {
    // 아이디가 stroke와 같다면 / 색을 변경한다면
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    // 아이디가 lWidth 같다면 / 선 두께를 변경한다면
    lineWidth = e.target.value;
  }
});
