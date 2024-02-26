// const today = new Date();
// // new 예약어
// // Date() 함수 () 안에 아무 값도 안넣으면 기본값인 지금 시점으로 나온다
// // new 예약어와 Date() 함수를 활용해서 생성된 객체를 today라는 객체를 할당해준다
// // new Date() 내장함수 내장객체
// // Date 의도적 대문자로 만들어서 사용자들에게 class값을 줬다고 식별시켜주기위해서

// console.log(today);
// console.log(today.getFullYear());
// // 해당 년도만 가져오려고
// // getFullYear Date()를 할당받은 객체(today)한테만 쓸 수 있다

// const theDay = new Date("2025-02-25");
// // 특정시점에 대한 시간
// // theDay 인스턴스 객체

// console.log(theDay);
// // 해당 날짜의 정보값을 가져온다
// // 하나의 문자열 안에 다 가져온다

// const theDay2 = new Date(2025, 2, 25);
// console.log(theDay2);
// // 매개변수로 쪼개서 가져온다
// // 2025, 2, 25 프로토타입

// const theDay3 = new Date(2025, 2, 25);
// console.log(theDay3.getMonth());

// const object = new Object();
// const arr = new Array();
// // array라는 클래스값
// // 누군가가 원판(붕어빵틀)을 만들어놔서 우리가 쓸 수 있는거다
//
// ---------------------------------------------------------------------------------
// // 프로그래밍 언어!!!
// const book1 = {
//   title: "자바스크립트",
//   price: 30000,
//   publishing: "2025-05-05"
// }
// // 만약 교보문고사이트에서 신간이 들어오면
// // const book1 = {
// //   title: "자바스크립트",
// //   price: 30,000,
// //   publishing: "2025-05-05"
// // } 이거를 계속 만들면 몇천줄이 나온다

// class Book {
//   constructor(title, price, publishing) {
//     this.title = title;
//     this.price = price;
//     this.publishing = publishing;
//   }
//   // Book이라는 class(붕어빵틀)
//   // constructor 생성자 함수
//   // 이건 프로토타입이다
// }
// const book2 = new Book("자바스크립트", 30000, "2025-05-05");
// // 프로토타입 쓴는 방법
// // 이래서 new를 쓴는거다
// // 유사한 객체를 쓸때 / 붕어빵찍듯 만들어낼때
// console.log(book2);

//
//
//
// -------------------------------------------------------------------------

// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// // 1을 더하는 이유 => month는 0부터 사직이라서
// const nowDate = today.getDate();

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월 : ${nowMonth}월, <br />`);
// document.write(`현재 일 : ${nowDate}일`);
// // document.write(`${nowMonth}월, ${nowDate}일`);

// const open = new Date("2025-01-09");
// // console.log(open);
// // const theMonth = open.getMonth();
// const theMonth = open.getMonth() + 1;
// // 원하는 1월이 되려면 +1 / 월은 0부터 시작이라서
// // console.log(theMonth);
// const theDate = open.getDate();

// document.write("<h1>개강일 날짜 정보</h1>");
// document.write(`개강일 몇 월 : ${theMonth}월, <br />`);
// document.write(`개강일 몇 일 : ${theDate}일`);
//
//
// ==========================================================
//
// << 밀리초 >>
// 1밀리초 = 1/1000초 (1000분의 1초)
// 1초 = 1000밀리초
// setInterval 할때도 사용했었다
// 1분 = 60초 (60 * 1000 = 60000밀리초)
// 1시간 = 60분 (60 * 60 * 1000 = 3,600,000밀리초)
// 1일 = 24시간 (24 * 60 * 60 * 1000)

// const today = new Date();
// const nowYear = today.getFullYear();
// const theDate = new Date(nowYear, 11, 31);
// const diffDate = theDate.getTime() - today.getTime();
// // getTime( ) : 시간의 값을 가져올 때
// // 지금 이순간부터 12월 31일까지의 밀리초
// // console.log(diffDate); //26654730067

// const result = diffDate / (24 * 60 * 60 * 1000);
// // 밀리초단위를 날짜로 바꾸려고 나눈거다
// // 1일 = 24시간 (24 * 60 * 60 * 1000)
// console.log(result); // 308.5024816550926 => 308일 남았다
// ----------------------------
const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);

const diffDate = theDate.getTime() - today.getTime();
const result = diffDate / (24 * 60 * 60 * 1000);
