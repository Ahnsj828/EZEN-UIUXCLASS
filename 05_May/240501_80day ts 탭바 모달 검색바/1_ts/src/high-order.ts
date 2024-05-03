// < 고차함수와 클로저 >
// 일반적인 함수
const add1 = (a: number, b: number): number => a + b;

// < 고차함수 >
// const add2 =
//   (a: number): ((arg0: number) => number) =>
//   (b: number): number =>
//     a + b; //  이걸 클로저라고 부른다 closure

// const result = add2(1)(2);
// console.log(result);
// tsx src/high-order.ts  => 3

// 👇🏼

export type numberToNumberFunc = (arg0: number) => number;
// numberToNumberFunc 숫자를 받아서 숫자를 반환하는 타입별칭

export const add = (a: number): numberToNumberFunc => {
  const _add: numberToNumberFunc = (b: number): number => {
    return a + b;
  };
  return _add;
};
// 함수안에 함수가 들어갈 수 있다

// "고차함수"는 함수 안에 또 다른 함수를 실행시킨 후 바깥쪽에서 실행된 결과값을 받아서 내부에서 연산 및 처리작업 후 최종 결과값을 출력할 수 있도록 하기 위해 고안된 함수

// 고차함수에서 수학적 사고 능력!!이 영향을 준다

// 클로저(closure)는 고차함수를 실행시키기 위한 중요한 JS개념
// 변수 : scope => Global / Local
