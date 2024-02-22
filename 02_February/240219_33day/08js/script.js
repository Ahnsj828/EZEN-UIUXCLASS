// prompt();
// // prompt함수
// // alert();
// alert함수
// document.write();
// // write함수 document는 함수가 아니다 객체다

// *함수의 생김새
//  단어(=키워드) () => 함수

// 함수가 작동하려면 무엇이 필요할까?
// 1. 함수를 구현 해야한다 = 제작
// 2. 함수를 호출해야한다 = 실행

// 함수를 구현하려면 어떻게 해야할까?
// 함수를 구현하는 방법은 총 3가지가 있다
// (정답은 없다 상황에 맞춰서 효율적인 방법을 써라)
//   1. 클래스 함수를 구현하는 방법
//   2. 익명의 함수를 구현하는 방법 (함수의 이름을 정의하지 않고 구현하는거)
//   3. 화살표 함수를 구현하는 방법 (가장 최신문법 but, 늘 정답은 아니다)

// < 초보 레벨 단계 >
// 1부터 5까지 더하라
// let num = 0;
// nut += 1;
// nut += 2;
// nut += 3;
// nut += 4;
// nut += 5;
// 이러다 더 많아지면 힘들어진다
//
// -------------------------------------------
//
//
// < 중급 레벨단계 > 반복문 사용
// 반복문을 사용하면 된다
// let sum = 0
// for(let i = 1; i <= 5; i++) {
//   sum += i;
// }
// 만약 숫자를 1~5 이 아니라 1~100까지 더해야된다면
// 매상황에 맞춰서 코드를 신규로 맞춰야된다 => 비효율적이다
// let sum = 0
// for(let i = 1; i <= 100; i++) {
//   sum += i;
// }
//
// -------------------------------------------
//
//
// < 고급 레벨단계 > 함수 활용 - 재활용이 가능한 코드 업그레이드
// function calSum() {
//   let sum = 0;
//   for (let i = 1; i <= 5; i++) {
//     sum += i;
//   }
//   cosole.log("1부터 5까지 더하면 ${sum} 입니다");
// }
//  => 클래스 함수를 구현했다 / 함수로 감싸 안았다
//  calcSum()
//  => 함수를 호출했다
// prompt(), alert() => 내장함수라 구현하지 않았다  호출만했다
// calSum함수명
// () 매개변수의 자리
// 매개변수 = 매개체

// // 매번 숫자를 번거롭게 바꾸지 않고 밑에처럼 하면된다
// function calSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   cosole.log("1부터 ${n}까지 더하면 ${sum} 입니다");
// }
// calcSum(20);
// // 20 인수값 인자값
// // 인수값/인자값만 바꾸면된다
//
// -------------------------------------------
//
//
// < 클래스 함수 >
// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));
//
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }
// sum(userNum01, userNum02);
//
//
//
// < 익명 함수 > 익명의 함수를 구현하는 방법 (함수의 이름을 정의하지 않고 구현하는거)
// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }
// sum(userNum01, userNum02);
// 함수를 변수로 할당할수 있어야 익명함수를 쓸수 있다
//
//
// < 화살표 함수 >
// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요!"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요!"));
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }
// sum(userNum01, userNum02);
//
//
//
//
// =====================================================================================
//
// //
// // < retrun문 >
// const num = Number(prompt("몇 가지 숫자를 더할까요?"));
// // 연산 기능을 갖고있는 함수를 구현할거다
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// calcSum(num);
// // 인수, 인자값(num)이 매개변수(n)와 이름이 같지 않아도 된다
// // document.write(`1부터 ${num}까지 더하면 ${sum} 입니다`);

// // 밖으로 꺼내고 싶을때 retun
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다`);
//
//
// // const userNum01 = Number(prompt("첫번째 숫자!"));
// // const userNum02 = Number(prompt("두번째 숫자!"));
// // const userNum03 = Number(prompt("세번째 숫자!"));
// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(1, 2, 3));
// // 이걸 기본 매개 변수 라고 부른다
//
//
//
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(5);

// JS 코드를 작성하다보면 큰 이슈!
// JS는 엄청 큰 문제점을 발견하면 => 콘솔창을 통해서 알려준다
// 아주 사소한 문법상의 문제점은 알려주지 않는다! => 오타 등등
// 코드상의 문제가 발생했다 =>  버그가 발생했다고 한다!
// 이거를 해결해주기 위해 나온게 => TS => JS를 알아야 쓸 수 있다
// 보다 효율적으로 버그를 찾는 방법!!!!!

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// function greeting02() {
//   console.log(hi);
// }
// greeting();
//
//
//
//

// let hi = "hello";
// // => 글로벌 스코프
// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// // change합수호출했다
// console.log(hi);
// // 대체됐다

//
//

// const factor = 5;
// // factor는 전역변수다 전국방송
// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);
//
//
//
// ==============================================================
//
//
// << JS 권장사항!! >>
// 1. var보다는 let, const 키워드로 변수를 선언해라!
// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);

// 2. 가급적이면, 전역 스코프의 변수선언은 피해라! (하지말라는건 아니다)
// (지역 혹은 블록으로)

// 3. 그래서 var, let 보다는 const에 적응해라!
//     const위주로 쓰고 재할당이 필요한 순간에서는 let을써라
//
//
//
//
// << 즉시 실행 함수!! >> - 한방에 붙여서쓰는거 / 고차함수 쓸 때 많이 쓴다!!
// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// }
// sum(1, 2);
// ------------------------------
// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);
// ------------------------------
// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);
//
//
//
//
// const example = function () {
//   console.log("hello");
// };

// example();
// ------------------------------
// example();

// function example() {
//   console.log("hello");
// }
// ------------------------------

// Hoisting 기법
// 무언가를 끌어올리다!
// class함수는 Hoisting이 가능 / 화살표 함수와 익명 함수는 Hoisting이 불가능하다
// example();

// const example = () => {
//   console.log("hello");
// };

// const example01 = function () {
//   console.log("hello")
// }
//
//
// ========================================================================
// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는
// 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동 가능하다!!
// let hi = function () {
//   return `안녕하세요!`;
// };
// console.log(hi());

// let hi = () => {
//   return `안녕하세요!`;
// };
// console.log(hi());

// let hi = () => `안녕하세요!`;
// console.log(hi());
// ------------------------------

// let sum = function (a, b) {
//   return a + b;
// };

// let sum = (a, b) => a + b;
//
//
// 화살표 함수 탄생 이유 : (ES6문법)
//   1. 반복적으로 사용되는 function & 함수명을 생략!
//   2. JS 근본없는 구현 & 호풀부의 순서를 명확하게 정의!
//   3. 함수의 실행문에서 굳이 중괄호 & return문 사용하지 않아도 구현할 수 있도록 해주기 위한 목적!
//
//
//
// 변수 선언 시, let과 const와 var 사용하지 않으면 무조건 전역 변수화!!
// function greeting() {
//   hi = "hello";
// }
// console.log(greeting());

// const hi = "hello";
// function greeting() {}
// console.log(hi);

// function greeting() {
//   hi = "hello";
// }
// greeting();
// console.log(hi);
//
//
//
//
// ===============================================================
// <<콜백함수>> - 함수 안에 또다른 함수를 호출할 때 부르는 용어
// const btn = document.querySelector("button");
// // console.log(btn);
// const display = () => {
//   alert("오늘도 파이팅 입니다!");
// };
// btn.addEventListener("click", display);
// // click 이라는 이벤트 종류를 선언해줘야한다
// // 함수안에 함수가 들어와야하는 상황 => 콜백함수가 들어온다
// // display라는 콜백함수를 호출했다
// ----------------------------
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   alert("오늘도 파이팅 입니다!");
// });
// // 쌤은 이걸 더 좋아하는데 복잡한 함수 쓸때는 이렇게 안쓴다
//
//
//
// ----------------------------
// const showData = (name, age) => {
//   alert(`안녕하세요! ${name} 나이가 ${age}살 이군요!`);
// };
// // ${} 사용자에게 받겠다

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };
// // getData();
// // showData();
// getData(showData);
//
//
//
//
// ===============================================================

// Java / python / C 등등 기타 프로그래밍 언어 함수!
// JS 함수 => 1급 시민이라고 부른다 => first-class citizen
// 모든 프로그래밍 언어에서 1급시민이 되려면 다음과 같은 조건에 부합해야 한다!
//   1. 함수를 변수에 값으로 할당할 수 있어야 한다!
//   2. 함수가 또다른 함수의 매개변수 혹은 인자값으로 사용될 수 있어야 한다!
//   3. 함수가 또다른 함수의 return안에 반환값으로 들어올 수 있어야한다! (자바스크립트가 고차함수가 될수 있는 이유)
//       => 이걸 다 깨우치면 고차함수를 할 수 있다

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`init(30, 20)) : ${init(30, 20)}`);
//
//
// ----------------------------
// // const addNum = (a, b) => {
// //   return a + b;
// // };

// const addNum = (a, b) => a + b;

// console.log(addNum(1, 3, 5, 7));
// // 결과는 똑같이 4다  => 왼쪽부터 두개가져가 쓴거
//
//
// ----------------------------
// ... < 전개연산자 / 스프레드 연산자 >
// const addNum = (...numbers) => {
//   let sum = 0;
//   이 연산에 영향을 주지 않는 0이라는 숫자를 줬다
//   값을 주지 않으면 undefined라는게 뜨면서 Nan이라고 뜬다
//   for (let Number of numbers) {
//     sum += Number;
//   }
//   return sum;
// };
// // numbers식별하기 위함이다 다른 이름 정해줘도 된다
// // ... 은 -> 다받아줘 / ...=> 전개연산자 / numbes는 명이다
// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));
// 인자값의 개수와 상관없이 함수들을 다 실행되게 하고싶다
// ... => 인자값 갯수 상관없이 다 받아라
// ...numbers 배열형태를 띄고 있다
//
//
//
// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   return str;
// };
// console.log(displayFavorites("사과", "포도", "토마토"));
//
//
// ==============================================================
// << window 운영체제안에 => 내장함수!! 사용할거다 >>
// JS => 싱글스레드로 작동하는 객체지향 프로그래밍 언어이다
// JS 최대약점 -> 싱글스레드다 / 싱글 -> 1 , 스레드-> 길  => 1차선 통행
// 위에서 작성한 순서대로 읽는걸 싱글스레드라고한다
// 동시성이 안된다X / 비동기 처리가 안된다X
// 로딩 스피너가 없으면 JS는 꽝이다

// <-> 멀티스레드 :  복수차선 / 동시로 가능하다 / 대표적으로 파이썬이 있다

// < 비동기처리 함수 >
// // 1. setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수!
// const greeting = () => {
//   console.log("안녕하세요!");
// };
// setInterval(greeting, 2000);
// // setInterval(실행시키고자하는 함수, 시간)
// // 1000밀리초 = 1초
// // 여기에서 greeting은 콜백함수다
// setInterval(() => {
//   console.log("안녕하세요!")
// }, 2000);

// // clearInterval(): 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
// // 단락회로평가!!
// let counter = 0;
// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);
// // 여기서 timer를 재귀함수라고 부른다!!

// setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수!!
// heap / callstack / Que;
setTimeout(() => {
  console.log("안녕하세요!"), 3000;
});
