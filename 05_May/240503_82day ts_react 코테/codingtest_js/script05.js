// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요

// 입력설명 : 첫번째 줄에 7개의 수가 주어진다

// 출력설명 : 첫번째 줄에 가장 작은 값을 출력한다

// 입력예제 - 5 3  7 11 2 15 17
// 출력예제 - 2

// const a1 = Number(prompt("숫자입력"));
// const a2 = Number(prompt("숫자입력"));
// const a3 = Number(prompt("숫자입력"));
// const a4 = Number(prompt("숫자입력"));
// const a5 = Number(prompt("숫자입력"));
// const a6 = Number(prompt("숫자입력"));
// const a7 = Number(prompt("숫자입력"));

// console.log(a1, a2, a3, a4, a5, a6, a7);

// const result = () => {
//   if (
//     a1 < a2 &&
//     a1 < a3 &&
//     a1 < a4 &&
//     a1 < a4 &&
//     a1 < a5 &&
//     a1 < a6 &&
//     a1 < a7
//   ) {
//     console.log(a1);
//   } else if (
//     a2 < a1 &&
//     a2 < a3 &&
//     a2 < a4 &&
//     a2 < a4 &&
//     a2 < a5 &&
//     a2 < a6 &&
//     a2 < a7
//   ) {
//     console.log(a2);
//   } else if (a3 < a1 && a3 < a2 && a3 < a4 && a3 < a5 && a3 < a6 && a3 < a7) {
//     console.log(a3);
//   } else if (a4 < a1 && a4 < a2 && a4 < a3 && a4 < a5 && a4 < a6 && a4 < a7) {
//     console.log(a4);
//   } else if (a5 < a1 && a5 < a2 && a5 < a3 && a5 < a4 && a5 < a6 && a5 < a7) {
//     console.log(a5);
//   } else if (a6 < a1 && a6 < a2 && a6 < a3 && a6 < a4 && a6 < a5 && a6 < a7) {
//     console.log(a6);
//   } else if (a7 < a1 && a7 < a2 && a7 < a3 && a7 < a4 && a7 < a5 && a7 < a6) {
//     console.log(a7);
//   }
// };
// -------------------------------------------------------------------------
// < 쌤 >

// 자료구조 => 배열
const arr = [5, 3, 7, 11, 2, 15, 17];

const solution = (arr) => {
  // 변수 : 어떠한 값을 담을 수 있는 그릇
  let answer;
  // 작은 값이 담는 그릇이 계속 변할 수 있어서 => let
  // 값을 비교

  // JS에서 가장 큰 값을 초기값이랑 비교해서 담기
  let min = Number.MAX_SAFE_INTEGER;
  // MAX_SAFE_INTEGER JS에서가장 큰값

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    // i index 인덱스
  }

  answer = min;
  return answer;
};
console.log(solution(arr));

// 원리 - 변수를 어떻게 활용할 것인가 / JS에서 가장 큰 수
