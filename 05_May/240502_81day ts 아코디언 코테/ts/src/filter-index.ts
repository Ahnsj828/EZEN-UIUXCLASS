// import { range } from "./range";

// const array1: number[] = range(1, 6);
// const array2: number[] = range(6, 11);

// const re1: number[] = array1.filter((value) => value);
// const re2: number[] = array2.filter((value) => value);

// console.log(re1, re2); //[ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]

// ----------------------------------------------------------
// < 쌤 >
import { range } from "./range";

const array: number[] = range(1, 11);
const half = array.length / 2;

const belowHalf = array.filter((value, index) => index < half);
// index < half => index는 0부터 시작하는데 절반인 half보다 작아야..
const overHalf = array.filter((value, index) => index >= half);

console.log(belowHalf, overHalf); //[ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]
