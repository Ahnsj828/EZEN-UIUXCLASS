// const array1 = [1]
// const array2 = [2, 3];
// const mergeArray = [...array1, ...array2];

const array1: number[] = [1];
const array2: number[] = [2, 3];
const mergeArray: number[] = [...array1, ...array2];
// array1도 array2복사 도 복사 => 깊은복사?

console.log(mergeArray); // [ 1, 2, 3 ]
