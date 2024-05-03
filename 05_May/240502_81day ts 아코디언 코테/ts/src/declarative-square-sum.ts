// * 1~100까지의 숫자들을 제곱한 값들의 합
//   2) 선언형 방식으로

import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";
import { map } from "./map";

const numbers: number[] = range(1, 101);
const result = fold(
  // fold() 값을 더해주는 함수
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);

console.log(result); //  338350
