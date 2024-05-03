// 2) 선언형 방식으로
// declarative-sum.ts
import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);
//numbers:number[] => number타입을 갖고있는 배열이야라고 선언
// range(1, 101); => 1이 101이 되는순간 종료된다

// console.log(numbers); // [1, 2, 3, ... 100]

// const result = fold(numbers, (result, value), 0);
// (numbers,(result, value), 0) => numbers, (초기값, 배열안에 담겨진값) 초기값

const result = fold(numbers, (result, value) => result + value, 0);
console.log(result);
