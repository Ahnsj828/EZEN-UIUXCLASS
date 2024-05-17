// // 10분안에 / 코딩테스트
// const number1 = prompt("첫번째 값을 주세요");
// const number2 = prompt("두번째 값을 주세요");
// const number3 = prompt("세번째 값을 주세요");

// const userNum = document.querySelector(".userNum");
// // console.log(userNum);
// const resultNum = document.querySelector(".resultNum");
// // console.log(resultNum);
// userNum.innerText = [number1, number2, number3];

// if (number1 < number2 && number1 < number3) {
//   resultNum.innerText = number1;
// } else if (number1 > number2 && number2 < number3) {
//   resultNum.innerText = number2;
// } else if (number1 > number3 && number2 > number3) {
//   resultNum.innerText = number3;
// }

// ===========================================

// < 쌤 >
const a = Number(prompt("첫번째 숫자"));
const b = Number(prompt("두번째 숫자"));
const c = Number(prompt("세번째 숫자"));

const solution = (a, b, c) => {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;
  // 표현식문;

  return answer;
};

console.log(solution(a, b, c));

// 이런게 알고리즘 테스트다
// 이사람이 알고리즘 사고를 할 수 있냐 없냐 알아보려고 테스트하는 거다
