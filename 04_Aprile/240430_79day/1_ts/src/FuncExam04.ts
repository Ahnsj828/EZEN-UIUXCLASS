// 함수를 정의할 때
// 일반함수, 익명함수, 화살표 함수를 사용하면서 function을 줬었다

// 배열 혹은 객체
// 배열 만들때
const arr = ["1", "2", "3"];

// < 변수 선언문 방식 >
// 배열 만드는 정석은
const arr1 = new Array();
// 객체 만드는 정석은
const obj1 = new Object();

// const fnc = new Function("a", "b", "return a + b");
// 👇🏼
function fnc(a, b) {
  return a + b;
}

// < 함수 타입 정의 : 실행문 / 표현식문 >

// 컴퓨터 프로그래밍 언어에는 실행문 지향 언어 방식와 현식문 지향 언어 방식으로 나뉜다

// 실행문 지향 언어 방식
// C언어, Java
const sum1 = (a: number, b: number): number => {
  return a + b;
};
// 👇🏼
// 표현식문 지향 언어 방식
// JS, TS, Python
const sum2 = (a: number, b: number): number => a + b;

// JS는 굉장히 유연한 언어다!
// 근본 & 플렉서블
// TS, JS => 다중 패러다임 지향 언어방식이다 (양다리 걸쳤다)

console.log(sum1(1, 2));
console.log(sum2(1, 2));
