// * 삼각형이 완성되기 위한 전제조건!!
// 3개의 변 중 가장 긴 변의 길이가 나머지 2개의 변의 길이의 합과 같거나 크면 삼각형이 될 수 없다

// const A = Number(prompt("첫번째 막대길이"));
// const B = Number(prompt("두번째 막대길이"));
// const C = Number(prompt("세번째 막대길이"));

// if (A > B && A > C && A >= B + C) {
//   console.log("NO");
// } else if (A > B && A > C && A < B + C) {
//   console.log("Yes");
// } else if (A < B && B > C && B >= A + C) {
//   console.log("NO");
// } else if (A < B && B > C && B < A + C) {
//   console.log("Yes");
// } else if (A < C && B < C && C >= A + B) {
//   console.log("NO");
// } else if (A < C && B < C && C < A + B) {
//   console.log("Yes");
// }
// ===========================================

// < 쌤 >
const a = Number(prompt("첫번째 숫자"));
const b = Number(prompt("두번째 숫자"));
const c = Number(prompt("세번째 숫자"));

const solution = (a, b, c) => {
  let answer = "Yes";
  let max;
  // a,b,c 중에 가장 큰놈을 찾아야되니까
  let total = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) max = c;

  if (total - max <= max) answer = "NO";
  // total - max 나머지 두개의 변의 합

  return answer;
};

console.log(solution(a, b, c));

// 10, 9, 8 => Yes
// 20, 4, 5 => No
