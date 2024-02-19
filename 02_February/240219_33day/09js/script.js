// 값을 하나하나 주려고한다 => 배열
const bodyTag = document.querySelector("#thebody");
const btn = document.querySelector("button");

const colors = ["yellow", "aqua", "purple", "crimson"];
//     => 배열
let i = 0;
const changeColor = () => {
  i++;
  if (i >= colors.length) {
    i = 0;
  }
  bodyTag.style.backgroundColor = colors[i];
};

btn.addEventListener("click", changeColor);
