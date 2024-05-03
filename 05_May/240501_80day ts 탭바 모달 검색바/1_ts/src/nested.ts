// const calc = () => {
// // 함수에 대한 선언
// };

// calc() // 함수에 대한 호출

// // 👇🏼
// const calc = (value, cb) => {
//   // value, cb 숫자와 콜백함수
// };

// calc(30, () => {});

// // 👇🏼
// const calc = (value: number, cb: () => void) => {
//   // 반환값이 없는 void타입
// };

// calc(30, () => {});

// 👇🏼
// const calc = (value: number, cb: (arg0: number) => void) => {

// };

// calc(30, () => {});

// 👇🏼
// const calc = (value: number, cb: (arg0: number) => void) => {
//   const add = (a: number, b: number): number => a + b;
// 	// 숫자와 숫자를 더한값은 당연히 숫자가 되니까 결과값도 숫자: number를 셋다 써줌
// };

// calc(30, () => {});

// // 👇🏼
// const calc = (value: number, cb: (arg0: number) => void) => {
//   const add = (a: number, b: number): number => a + b;
//   const multiply = (a: number, b: number): number => a * b;
// };

// calc(30, () => {});

// // 👇🏼
// const calc = (value: number, cb: (arg0: number) => void) => {
//   const add = (a: number, b: number): number => a + b;
//   const multiply = (a: number, b: number): number => a * b;
//   const result = multiply(add(1, 2), value); // multiply(3, 30) // 3*30 // 90
//   cb(result);
// };

// calc(30, (result: number) => {});

// 👇🏼
const calc = (value: number, cb: (arg0: number) => void) => {
  const add = (a: number, b: number): number => a + b;
  const multiply = (a: number, b: number): number => a * b;
  const result = multiply(add(1, 2), value); // multiply(3, 30) // 3*30 // 90
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));
