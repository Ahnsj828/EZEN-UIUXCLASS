// 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요
// 입력설명 - 첫번째 줄에 20이하의 자연수 N이 입력된다
// 출력설명 - 첫번째 줄에 1부터 N까지의 합을 출력한다

// 입력예제1 - 6 / 출력예제1 - 21
// 입력예제2 - 10 / 출력예제2 - 55

// const n = Number(prompt("원하는 최대 숫자를 입력하세요"));

// let result = 0;
// for (let i = 0; i <= n; i++) {
//   result += i;
// }

// console.log(result);

// -------------------------------------------------------------------------
// < 쌤 >
const a = Number(prompt("숫자입력"));

const solution = (n) => {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    answer += i;
  }

  return answer;
};

console.log(solution(a));
