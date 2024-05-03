// * 1~100까지의 숫자가운데 짝수만 찾아서 더한 값 도출
//   2) 선언형 방식으로

// 2) 선언형 방식으로
// declarative-sum.ts
import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";

const numbers: number[] = range(1, 101);
const idOdd = (n: number): boolean => n % 2 == 0;

const result = fold(
  filter(numbers, idOdd),
  (result, value) => result + value,
  0
);

console.log(result); // 2550
