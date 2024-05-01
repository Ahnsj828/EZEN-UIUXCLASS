// < 선언형 방식으로 >
// 1~100 까지의 숫자를 더하는 코드를 작성 (*선언형 방식으로)
// 숫자를 생성하는 함수를 선언.생성 : range()
// 생성된 숫자를 더하는 함수를 선언.생성 : fold() // 배열의 값을 찾아와서 더하는 함수

import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);
// 100까지면 101이라고해야한다
// console.log(numbers);

// const result = fold(numbers, (), 0)
// numbers 배열, 콜벡함수, 초기값0
const result = fold(numbers, (result, value) => result + value, 0);
console.log(result); // 5050
// =>선언형으로 만들었다
