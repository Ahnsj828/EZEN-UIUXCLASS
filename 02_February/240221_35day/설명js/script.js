// 변수 => 자료형
// 숫자형, 문자열, 논리형, 심블, 객체, 배열, 함수, BigInt(숫자형의 하위개념)

// 자료형 크게 두개로 나눌수 있다
// 1. 원시타입 자료형 = primitive type 의 자료다 라고 부른다
//    - 숫자형, 문자열, 논리형, BigInt(숫자형의 하위개념)
// 2. 참조타입 자료형 = reference type 의 자료다 라고 부른다
//    - 심블, 객체, 배열, 함수

let number1 = 100;
// console.log(number1);

let number2 = number1;
// console.log(number1);
// console.log(number2);

number2 = 200;
console.log(number1);
console.log(number2);
//
//
//
let bag1 = {
  color: "blue",
  with: 30,
  height: 50,
};
let bag2 = bag1;
bag2.color = "red";
console.log(bag1);
//처음에는 {color: 'blue', with: 30, height: 50} 나오고
// bag2.color = "red";하니까 {color: 'red', with: 30, height: 50} 이렇게 나온다
console.log(bag2); //{color: 'red', with: 30, height: 50}
