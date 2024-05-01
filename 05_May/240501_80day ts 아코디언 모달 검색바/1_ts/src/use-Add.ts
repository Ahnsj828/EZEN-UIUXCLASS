import { numberToNumberFunc, add } from "./high-order";

// const fn = add(1);
const fn: numberToNumberFunc = add(1);
const result = fn(2);

console.log(result); // 3
console.log(add(1)(2)); // 3
