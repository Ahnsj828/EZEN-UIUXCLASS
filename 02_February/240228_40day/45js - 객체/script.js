// // 객체
// // 객체는 프로퍼티로 구성되어있다
// // 프로퍼티 = 속성
// // key값과 value로 구성되어있따
// // key : vlaue 1쌍 => 프로퍼티
// const book1 = {
//   // {}가 나왔다 => 함수다
//   title: "자바스크립트",
//   // 문자열이라 "" 썼다
//   pages: 648,
//   // 숫자형 "" 안 썼다
// };
// // console.log(book1);

// // 온점표기법
// console.log(book1.title);

// // 대괄호 표기법 []
// console.log(book1["pages"]);

// book1.pages = 50;
// // console.log(book1);
// book1.author = "David";
// console.log(book1);

// new Date();
// new Object();
// new Array();

// const book2 = new Object();
// console.log(typeof book2);
// // 프로토타입 형식의 목적 / 일반함수랑 달라서 대문자로 시작
// // 반드시 new라는 예약어로 사용해야한다

// // 프로토타입 = 붕어빵 틀
// // 인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵

// book2.title = "typescript";
// book2.pages = 500;
// book2.author = "Alice";
// // 세개의 키를 만들었고 그 키에 각각의 값을 할당했다
// console.log(book2);

// delete book2.pages;
// console.log(book2);
// //
// //
// //
// //
// ------------------------------------------------------------
//
//
// < 객체 중첩 >
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {
//     // 반복문의 중첩 / 곱하기 구구단 / 테이블 등등을 만들었다
//   }
// }

// if (true) {
//   if (ture) {
//     // if 조건문에 대한 중첩 /로그인 사용자 아이디 pw 맞았을때 틀렸을때
//     console.log("true");
//   }
// }

// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     // 객체 안에 또다른 객체 => 중첩객체
//   },
// };
// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       // 여기 안에 함수도 넣을 수 있다
//       return (this.history + this.science) / 2;
//       // 외부로 꺼내고싶을때 return
//       // this는 score를 의미 / 왜 score를가 아니라 this는쓰는 이유 => 재사용성의 범위가 넓어져서 사용하는거다
//     },
//   },
// };

// window.document.querySelector();
// const window = {
//   document: {
//     querySelector: function () {
//       // 함수는 곧 객체다
//     },
//   },
// };

// // 메서드 = 함수
// // console.log(student.score.history); // 85
// // // JS는 모든게 객체다 => 그래서 객체 지향 언어라고 한다
// // console.log(student.score.average()); // 89.5

// const book3 = {
//   title: "파이썬",
//   pages: "360",
//   buy: function () {
//     // buy: function ()   =>  buy() 라고만 적어도 똑같이 나온다
//     console.log("이 책을 구입했습니다");
//   },
// };
// // 매서드 형태를 띄고 있다
// console.log(book3);
// console.log(book3.buy());
//
//
//
// this
// 1) addEventListener => 콜백함수 / 화살표함수 => window
// 2) addEventListener => 콜백함수 / 익명함수 => 바로 위에 상위요소
// 3) 객체 매서드 함수를 생성할 때 / 익명함수 => this 바로 위에 상위요소를 뜻한다
// 4) 객체 매서드 함수를 생성할 때 / 화살표함수 => this => whidow

// const book4 = {
//   title: "HTML5 + CSS3",
//   pages: 500,
//   author: "Peher",
//   done: false,
//   finish: function () {
//     book4.done === false ? console.log("읽는 중") : console.log("완독");
//     // 삼항 조건 연산자
//   },
// };
// book4.finish();

// const book7 = {
//   title: "HTML5 + CSS3",
//   pages: 500,
//   author: "Peher",
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("읽는 중") : console.log("완독");
//     // 삼항 조건 연산자
//   },
// };
// book7.finish();
// // 객체명 바뀌더라도 안에 내용을 똑같이 주고 싶을 때 this로 해주기

// 숫자, 문자, 논리 => 원시타입! / 원시타입 = primtive
// 객체 => 참조타입! / 참조타입 <=> 원시타입
// 원본 데이터 자료와 사본 데이터 자료
//
//
//
//
// ==========================================================================
