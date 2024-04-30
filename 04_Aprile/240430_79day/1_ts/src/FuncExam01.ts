// < 함수 >
// 왜 사용하고 어떻게 사용하는가?
// 어떤 값을 받은(*매개체) 후 어떤 연산 및 기능작업을 거쳐서 어떤 값을 반환(*제공)하려고 사용하는거다
// 타입스크립트 : 어떤 값들의 타입을 정의한다
// 매개변수 타입 정리 => 매개변수도 변수다
// 반환값 에대한 타입 정리

// < 기본적인 함수형태 >
// function add(a, b) {
//   // 반환하는 형태면 return을 사용
//   return a + b;
// }
// 👇🏼 매개변수에 타입을 정의 해줘야한다 / 함수의 타입을 정의해줘야한다
function add(a: number, b: number): number {
  return a + b;
}

// < 익명 함수 형태 >
// const add1 = function () {

// };
// 👇🏼
const add1 = function (a: number, b: number): number {
  return a + b;
};

// < 화살표 함수형태 > => ES6이후 JS 문법이라서 수업시간에 많이 사용했다
// 이벤트 리스너에서는 화살표함수를 사용했을 때, this객체가 가리키는 것이 이벤트 대상이 아니라 window function
// const add2 = () => {

// };
// 👇🏼
const add2 = (a: number, b: number): number => {
  return a + b;
};

// ----------------------------------------------------------------------------------------

// 반환값이 없는 함수는 결과 값으로 어떤 타입(eturn문을 사용하지 않는 함수)을 정의해야할까?
// => void : 반환값을 갖지 않고 있는 함수의 최종 타입을 정의하고자 할 때
//  void : 피하다 회피하다

// function printMe(name, age) {
//   console.log(`name: ${name}, age: ${age}`);
// }
// 👇🏼
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}

// ----------------------------------------------------------------------------------------

// <타입시그니처>

interface Product {
  name: string;
  price: number;
}
// 첫번째 방법
const goods: Product = {
  name: "색연필",
  price: 2000,
};
// 두번째 방법
const goods2: {
  name: string;
  price: number;
} = {
  name: "색연필",
  price: 2000,
};

// const printMe01 = function (name, price) {
//   // 반환값이 존재하지 않는
//   console.log(`${name}은 ${price} 입니다.`);
// };
// 👇🏼
// const printMe01 = function (name: string, price: number): void {
//   console.log(`${name}은 ${price} 입니다.`);
// };
// 👇🏼 시그니처 타입(: (arg0: string, arg1: number) => void)을 앞에
const printMe01: (arg0: string, arg1: number) => void = function (name, price) {
  // arg = argument
  console.log(`${name}은 ${price} 입니다.`);
};
