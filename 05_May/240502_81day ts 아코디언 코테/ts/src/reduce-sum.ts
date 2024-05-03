// 누산기  /  1부터 100까지 더한값
import { range } from "./range";

// const reduceSum = range(1, 101)

// const reduceSum:number = range(1, 101)
// range는 숫자가 담겨진 배열인데  reduceSum:number 는 숫자라 에러뜬다

const reduceSum: number = range(1, 101).reduce(
  (result: number, value: number) => result + result,
  0
);

// (result: number, value: number) => result + result, 0); => 콜백함수

console.log(reduceSum); // 5050
