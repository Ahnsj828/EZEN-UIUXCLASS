// 중첩 배열로 되어있는거를 하나로 합칠거다

import { mergeArray } from "./mergeArray";

const mergeArray01: string[] = mergeArray(["hello"], ["world"]);

console.log(mergeArray01); // [ 'hello', 'world' ]

const mergeArray02: number[] = mergeArray([1], [2, 3], [4, 5, 6], [7, 8, 9]);

console.log(mergeArray02); // [   1, 2, 3, 4, 5,   6, 7, 8, 9 ]
