// const accent = document.querySelector("#accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");

// const userDay = prompt("원하시는 기념일을 입력하세요!", "ex.2024-01-09");

// const now = new Date();
// // 프로토타입이 활성화된다
// // 현시점
// // const firstDay = new Date("2024-01-09");
// // // 목업으로
// const firstDay = new Date("${userDay}일");

// const toNow = now.getTime();
// const toFirst = firstDay.getTime();
// const passedTime = toNow - toFirst;
// // 특정날부터 현시점까지를 밀리초화 해야한다
// const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));
// // 24일60시60분
// // console.log(passedDay); // 48  48일 됐다
//
//

//
//
//
// // < 100일 프로젝트 >
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// // 처음만난날 + 100일 시간
// let someday = new Date(future);
// // 프로토타입
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();

// date100.innerText = `${year}년 ${month}월 ${date}일`;
// //
// //
// //
// // < 200일 프로젝트 >
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// // 처음만난날 + 100일 시간
// someday = new Date(future);
// // 프로토타입
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// date200.innerText = `${year}년 ${month}월 ${date}일`;
// //
// //
// //
// // < 1년 프로젝트 >
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// // 처음만난날 + 100일 시간
// someday = new Date(future);
// // 프로토타입
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// date365.innerText = `${year}년 ${month}월 ${date}일`;
// //
// //
// //
// // < 500일 프로젝트 >
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// // 처음만난날 + 100일 시간
// someday = new Date(future);
// // 프로토타입202
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();

// date500.innerText = `${year}년 ${month}월 ${date}일`;
//
//
//
//
//
// --------------------------------------이렇게 줄일 수 있다
// 함수로 프로토타입 만드는 방법
const toNow = now.getTime();
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDay}일`;

const calcDate = () => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();

  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
