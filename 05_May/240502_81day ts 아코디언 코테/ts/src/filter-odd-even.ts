import { range } from "./range";
// range을 가져다쓰면 배열을 가져다쓸 수 있다

// const array = range(1, 11);
const array: number[] = range(1, 11);

const odds: number[] = array.filter((value) => value % 2 !== 0); // 홀수
const evens: number[] = array.filter((value) => value % 2 == 0); // 짝수

console.log(odds, evens); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
