// 숫자를 문자로

import { range } from "./range";

// const array = range(1, 11)
const array: number[] = range(1, 11);

// const names:string[] = array  // => 문자열을 숫자로?  에러떴다
const names: string[] = array.map((value, index) => `[${index}]: ${value}`);

console.log(names);
