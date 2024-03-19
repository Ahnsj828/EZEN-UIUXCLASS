// // 잠수함 문어 상단바 밑에 글씨
// const progressBar = document.querySelector(".bar");
// const submarine = document.querySelector(".submarine");
// const depthWrap = document.querySelector(".depthWrap");
// const sponge = document.querySelector(".sponge");
// // console.log(progressBar, submarine, depthWrap, sponge);

// const percent = (scrollNum, documentHeight) => {
//   // scrollNum, documentHeight두개의 인자값을 받으니 두개의 매개변수값을 받아야한다
//   // return (scrollNum / documentHeight) * 100
//   return ((scrollNum / documentHeight) * 100).toFixed(0);
//   // toFixed 소수점 없애려고
// };

// const deepSea = () => {
//   // console.log("deep sea"); // 스크롤하면 숫자가 늘어난다
//   const scrollNum = window.scrollY;
//   // scrollNum 스크롤이 현재 시작한 좌표값을 찾아온다
//   const span = depthWrap.querySelector("span");
//   span.innerText = scrollNum;

//   const documentHeight = document.body.scrollHeight - window.innerHeight;
//   // 전체 문서 높이 - 현재 보고 있는 높이
//   const per = percent(scrollNum, documentHeight) + "%";
//   // scrollNum, documentHeight두개의 인자값을 받으니 두개의 매개변수값을 받아야한다
//   // console.log(per);

//   progressBar.style.width = per;

//   submarine.style.transform = `translateX(${per})`;
//   // 문자열과 변수를 같이 쓰고 싶어서 => ``
//   sponge.style.transform = `translateY(-${per})`;
// };

// window.addEventListener("scroll", deepSea);
//
//
// 이렇게 하거나
//
//
// 잠수함 문어 상단바 밑에 글씨
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const depthWrap = document.querySelector(".depthWrap");
const sponge = document.querySelector(".sponge");
// console.log(progressBar, submarine, depthWrap, sponge);

const percent = (scrollNum, documentHeight) => {
  // scrollNum, documentHeight두개의 인자값을 받으니 두개의 매개변수값을 받아야한다
  // return (scrollNum / documentHeight) * 100
  return ((scrollNum / documentHeight) * 100).toFixed(0);
  // toFixed 소수점 없애려고
};

const deepSea = () => {
  // console.log("deep sea"); // 스크롤하면 숫자가 늘어난다
  const scrollNum = window.scrollY;
  // scrollNum 스크롤이 현재 시작한 좌표값을 찾아온다
  const span = depthWrap.querySelector("span");
  span.innerText = scrollNum;

  const documentHeight = document.body.scrollHeight - window.innerHeight;
  // 전체 문서 높이 - 현재 보고 있는 높이
  const per = percent(scrollNum, documentHeight);
  // scrollNum, documentHeight두개의 인자값을 받으니 두개의 매개변수값을 받아야한다
  // console.log(per);

  progressBar.style.width = per + "%";

  submarine.style.transform = `translateX(${per}%)`;
  // 문자열과 변수를 같이 쓰고 싶어서 => ``
  sponge.style.transform = `translateY(${-per}%)`;
};

window.addEventListener("scroll", deepSea);
