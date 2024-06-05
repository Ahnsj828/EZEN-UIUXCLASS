// // 피보나치 수열을 만드는 함수를 만들거다
// const fibonacci = (n) => {
//   if (n === 0 || n === 1) return n;
//   // 재귀함수에는 기저조건이 필요하다 / 없으면 계속..
//   // 0이 되거나 1이 되면 멈춰라
//   return fibonacci(n - 2) + fibonacci(n - 1);
//   // fibonacci(n - 2)  첫번째 재귀함수 / fibonacci(n - 1)두번째 재귀함수
// };

// 메모이제이션이 적용되지 않은 피보나치수열 연산 함수
const fibonacci1 = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
};

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] === null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
};

// 시간복잡도 계산하는 방법
let start = new Date(); // 연산을 시작하기 전 시간 측정
console.log(fibonacci1(40)); // 40까지 숫자를 하나씩 다 더한다
let end = new Date();
console.log(`fibonacci1 함수 실행 시간 : ${end - start}ms`);

start = new Date(); // 연산을 시작하기 전 시간 측정
console.log(fibonacci1(40, {})); // 40까지 숫자를 하나씩 다 더한다
end = new Date();
console.log(`fibonacci2 함수 실행 시간 : ${end - start}ms`);
