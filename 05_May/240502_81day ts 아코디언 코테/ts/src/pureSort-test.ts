import { pureSort } from "./pureSort";

const beforeSort = [6, 2, 9, 0];
const afterSort = pureSort(beforeSort);

console.log(beforeSort, afterSort); // [ 6, 2, 9, 0 ] [ 0, 2, 6, 9 ]

// filter는 자체적인 몇 안되는 순수함수에 들어간다
// splice라는 배열의 함수가 값을 제거하는건 맞다 / 원본데이터 값을 바꾼다 => 불순함수
// => filter함수 쓰는게 더 낫다
