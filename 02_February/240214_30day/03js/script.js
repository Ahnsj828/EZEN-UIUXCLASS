// 코드먼저치지말고 순서를 먼저적어보아라
// 1. 사용자가 입력한 소비자가를 찾아온다
// 2. 사용자가 입력한 할인률값을 찾자온다
// 3. 사용자가 "할인 가격 계산하기" 버튼을
//    클릭한다면, 이벤트가 작동하게 해준다
// 4. 계산 이벤트를 정의 한다
// 5. "할인된 가격 출력" 공간에 계산된 값을 출력시켜준다.
//  = > 이런 사고 능력을 많이 하라!

// // 1. 사용자가 입력한 소비자가를 찾아온다
// const originPrice = document.querySelector("#price").value;

// // 2. 사용자가 입력한 할인률값을 차자온다
// const rate = document.querySelector("#rate").value;

// // 3. 사용자가 "할인 가격 계산하기" 버튼을
// //    클릭한다면, 이벤트가 작동하게 해준다
// const btn = document.querySelector("#button");

// const showResult = document.querySelector("#showResult");

// // 4. 계산 이벤트를 정의 한다
// btn.addEventListener("click", function () {
//   e.preventDefault();
//   const savedPrice = originPrice * (rate / 100);
//   const resultPrice = originPrice - savedPrice;
//   showResult.innerHTML = `${resultPrice}`;
// });

// =>
// const btn = document.querySelector("#button");

// const showResult = document.querySelector("#showResult");

// btn.addEventListener("click", function () {
//   e.preventDefault();
//   const originPrice = document.querySelector("#price").value;
//   const rate = document.querySelector("#rate").value;
//   const savedPrice = originPrice * (rate / 100);
//   const resultPrice = originPrice - savedPrice;
//   showResult.innerHTML = `${resultPrice}`;
// });

// =>
const btn = document.querySelector("#button");

const showResult = document.querySelector("#showResult");

btn.addEventListener("click", function () {
  e.preventDefault();
  const originPrice = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savedPrice = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrice;
  showResult.innerHTML = `삼품의 원래 가격은 ${resultPrice}원 이고, 할인률은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다!`;
});
