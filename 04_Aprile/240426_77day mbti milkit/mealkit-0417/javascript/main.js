const frontSlider = document.querySelector(".frontslider");
// console.log(frontSlider);
const pics = [
  "front-slider-01.jpg",
  "front-slider-02.jpg",
  "front-slider-03.jpg",
];
frontSlider.style.backgroundImage = `url(../images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
// console.log(arrows);

// 배열 나왔다? => 반복문!

let i = 0;
// 오른쪽 버튼 누르면 => 인덱스값 숫자가 늘어난다 => 증감연산자

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    // console.log("click");
    // 사용자가 오른쪽 버튼 눌렀는지 왼쪽버튼 눌렀는지 어떻게 알까? =>  target이 left냐? right냐
    if (e.target.id === "left") {
      // 왼쪽 버튼 누른다면
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    frontSlider.style.backgroundImage = `url(../images/${pics[i]})`;
  });
});
