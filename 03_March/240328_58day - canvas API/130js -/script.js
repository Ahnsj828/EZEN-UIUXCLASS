const staggerWrap = document.querySelector("ul");
// console.log(staggerWrap);
const fragment = document.createDocumentFragment();
// createDocumentFragment 새로운 빈 공간을 만드는 함수
// 가상의 node / 아무런 내용이 없다
// 쓰는 이유 => 그룹화하려고
// console.log(fragment);

const grid = [9, 3];
const [col, row] = grid;
// console.log(col, row);
const allElem = col * row;
// console.log(allElem);  // 27

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}

staggerWrap.appendChild(fragment);

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,

  // scale: 0.5,
  // scale: anime.stagger([0.5, 1], { grid: [9, 3], axis: "x" }),
  // 위에서부터 아래로   // axis 축 / axis: "x" => x축을중심으로
  scale: anime.stagger([0.5, 1], { grid: [9, 3], axis: "y" }),
});
