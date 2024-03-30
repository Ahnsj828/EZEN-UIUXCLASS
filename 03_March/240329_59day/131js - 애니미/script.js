const staggerWrap = document.querySelector("ul");
// console.log(staggerWrap);
const fragment = document.createDocumentFragment();
// createDocumentFragment() 의미가 없는애다 / 그룹화 해주는 역할만

// const grid = [9, 3];
// // 3행 9열
// const [col, row] = grid;
// // 구조분해할당
// // console.log(col, row);  // 9 3
// const allElem = row * col;
// // console.log(allElem);  // 27

// for (let i = 0; i < allElem; i++) {
//   const li = document.createElement("li");
//   fragment.appendChild(li);
// }

// staggerWrap.appendChild(fragment);

// // anime.js의 기본문법이다
// anime({
//   targets: "ul li",
//   easing: "linear",
//   duration: 1000,
//   scale: anime.stagger([0.5, 1], {
//     // from 0.5 / to 1
//     grid: [9, 3],
//     // 9-열 3-행
//     from: "center",
//     axis: "z",
//   }),
// });

//
//
//

const grid = [9, 5];
// 5행 9열
const [col, row] = grid;
const allElem = row * col;
// console.log(allElem);  // 45

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}

staggerWrap.appendChild(fragment);

// anime.js의 기본문법이다
// anime({
//   targets: "ul li",
//   easing: "linear",
//   duration: 1000,
//   scale: anime.stagger([0.5, 1], {
//     // from 0.5 / to 1
//     grid: [9, 5],
//     // 9-열 5-행
//     from: "center",
//     axis: "z",
//   }),
// });

const tl = anime.timeline({
  // timeline 순차적으로 무언가를 실행시킨다
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], frome: "center", axis: "z" }),
  loop: true,
  direction: "alternate",
});
tl.add({
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutQuad", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, {
    grid: [9, 5],
    form: "center",
    axis: "x",
  }),
  translateY: anime.stagger(10, {
    grid: [9, 5],
    form: "center",
    axis: "y",
  }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], from: "center", axis: "x" }),
});
