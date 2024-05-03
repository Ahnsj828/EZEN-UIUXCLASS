// * 1~100까지의 숫자가운데 짝수만 찾아서 더한 값 도출
//  1) 명령형 방식으로

// let evenSum = 0;
// for (let i = 0; i <= 100; i += 2) {
//   evenSum += i;
// }
// console.log(evenSum); // 2550

// ---------------------------------------------------------
// <쌤>
let evenSum = 0;
for (let i = 0; i <= 100; i += 2) {
  evenSum += i;
}
console.log(evenSum); // 2550
