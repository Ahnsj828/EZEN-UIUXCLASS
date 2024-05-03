// 전개연산자
// const array = [1, 2, 3, 4];
// const deepCopied = [...array];

// console.log(array, deepCopied); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

const array = [1, 2, 3, 4];
const deepCopied = [...array];

deepCopied[0] = 0;

console.log(array, deepCopied); // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]
