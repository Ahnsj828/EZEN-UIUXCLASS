// 배열안에 함수들을 활용하는 방법
// const multiply = (result, val) => result * val
// val value
const multiply = (result: number, val: number): number => result * val;

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tempResult = numbers.filter((val) => val % 2 !== 0);
// // 매서드 체이닝 기법
// // 2 !== 0 나머지가 0과 같지 않다 => 홀수

// console.log(tempResult); // [ 1, 3, 5, 7, 9 ]
// -------------------------------------------제곱
// const tempResult = numbers
//   .filter((val) => val % 2 !== 0)
//   .map((val) => val * val);

// console.log(tempResult); // [ 1, 9, 25, 49, 81 ]
// -------------------------------------------더한거
const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tempResult = numbers
  .filter((val) => val % 2 !== 0)
  .map((val) => val * val);
	.reduce(multiply, 1)

	const result = Math.sqrt(tempResult)
console.log(tempResult); 