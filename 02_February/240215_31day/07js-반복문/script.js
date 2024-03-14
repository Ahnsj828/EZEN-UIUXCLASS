// 5. 제어문
//  - 조건문
//   > if문 - 만약에 ~라면 이거해줘
//   > if...else문 (*else if문) - 이거아니면 이거?
//   > switch문 -이중에서 골라

//  - 반복문
//   > for문 - ~하는 동안에
//   > forEach문
//   > for..in문
//   > for...of문
//   > while문
//   > do...while문
//  (*break문 & continue문)

// ==============================================================
// < 반복문 - for문 - ~하는 동안에 >
// for(초기값; 조건식; 증감문;) {
//   // 초기값; 조건식; 증감문; 이게있어야 for문이 실행이된다 -반드시 세개다 있어야한다
//  실행문
// }

// const students = ["Park", "Kim", "Lee", "Kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }
// let, const, var
// i라는 변수명을 갖은 식별자
// 초기값 let i = 0;
// 조건식 i < students.length;
// 증감문i++   증감연산자 ++

// 컴퓨터가 읽는 순서

// ==============================================================
// < forEach문 >
// 배열. forEach(function(배열안에 있는 각각의 아이템) {
//   //실행문
// })
// function()을 => callback함수
// forEach함수 안에 function()라는 또 함수가 있다

// const students = ["Park", "Kim", "Lee", "Kang"];
// students.forEach(function (student) {
//   document.write(`${student}, `);
//   // 배열은 복수로 사용한다
//   // student는 그냥 짓는거다 정해진게 아니다
// });

// ------------------------------------------------
// < for문을 활용해서 구구단 출력하기 >
// 중첩해서 쓸 수있다 if문안에 if문 들어 갈 수 있듯이 for문도 그렇다

// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[ 구구단 " + a + "단 ]" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "x" + b + " = " + a * b);
//     document.write("<br/>");
//   }
// }

// 하나끝나면 줄바꿔서 다른 행으로 바꾸고싶을때 br

// -----------------------------------------------------
// // < 중첩 for문을 활용해서 5행 5열 테이블 만들기 >
// let num = 1;
// // 테이블 안에 숫자를 넣어주기 위해서 let
// let t = "<table border=1>";
// // 테이블에는 border가 필요해서 border준거다
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//   }
//   t += "</tr>";
// }

// t += "</table>";
// document.write(t);

// -----------------------------------------------------
// < 중첩 for문을 활용해서 5행 5열 테이블 만들기 - 숫자가 증가하는거 >
// let num = 1;
// // 테이블 안에 숫자를 넣어주기 위해서 let
// let t = "<table border=1>";
// // 테이블에는 border가 필요해서 border준거다
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++;
//   }
//   t += "</tr>";
// }

// t += "</table>";
// document.write(t);

// html파일 만들지도 않았는데
// 개발자 도구에는 만들어져있다
//  => 이걸DOM 이라고한다
//
//
//
// ==============================================================
// // < for in문 >
// // for in => 객체 전용
// // for of => 배열전용

// const gitBook = {
//   title: "깃 & 깃허브",
//   pubDate: "2024-02-15",
//   pages: 272,
//   finished: true,
// };
// //finished: true, 책을 읽었냐 안읽었냐

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br/>`);
// }
// // for(key in gitBook) 객체안에 key를 찾아와라 / key라는 변수
// // document.write(`${key}`) key라는 해당요소를 가져오겠다
// // gitBook 객체안에 key값이 나온거다

// 연관성있는것들 title, nav.. 등등은 for in문으로
//
//
//
// ==============================================================
// // < for of문 >

// const students = ["Park", "Kim", "Lee", "Kang"];
// for (student of students) {
//   document.write(`${student}, `);
// }

//
//
//
// ==============================================================
// < while문 > < do while문 >
// while(조건식 => true) {
//   // 실행문
// }

// let stars = Number(prompt("별점을 매겨주세요!"));
// //       재할당 될수있어서 const에서 let으로 바꿨다
// // while (stars > 0) {
// //   document.write("*");
// //   stars--;
// // }

// // do {
// //   document.write("*");
// //   stars--;
// // } while (stars > 0);

// // do는 일단 실행시키고 조건식한다 / 안됐어도 한나는 나온다  -> 쓸일이 별로없다

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class=`red`>" + i + "</p>");
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }
// // if(i % 5 == 0) 5의배수다
// // 5의배수이면서 7의 배수는 아닌 경우라고한다면
//
//
//
// ==============================================================
// < break문 예시 > // 제어문의 종료 . 종결

// for (let i = 1; i <= 10; i++) {
//   if (i == 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }
// // 1부터 10까지 갔는데 break 6걸어서 5까지만 나오는거다
//
//
//
// ==============================================================
// // < break문 예시 >
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }
// // (i % 2 === 0) 짝수
//
//
//
// ==============================================================
// // << 예제 >>
// // 사용자에게 숫자를 하나 전달받으세요!!
// // 해당 숫자가 소수인지 아닌지 식별할 후, 만약 해당 숫자가 소수라면,
// // 웹 브라우저 화면에 "00숫자는 소수입니다" 라고 출력해주세요!
// // 소수 : 1과 자기 자신으로만 나눠질 수 있는 숫자
// //  => 단락회로 평가 : 특정값이 논리형 값으로 => true냐 false냐를 기준으로 잡고 나머지값들을 판단하는거

// const number = Number(prompt("숫자를 입력하세요"));
// let isPrime;
// // let isPrime; 식별자를 하나 선언했다 ture일지 false일지는 미정이다 / 선언만하고 할당하진않았다

// if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++)
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
// }

// if (isPrime) {
//   document.write(`${number}는 소수입니다.`);
// } else {
//   document.write(`${number}는 소수가 아닙니다.`);
// }
//
//
//
// ==============================================================
// // << 예제 >>
// // 웹 브라우저 화면에 아래 보이는 배열 아이템 중 10이상 되는 숫자만 출력해주세요!
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// // for of / forEach /
// // 배열이 나오면 얘를 내가 가져올 방법부터 고민해라
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}, `);
//   }
// }
//
//
//
// ==============================================================
// // << 예제 >>
// 사용자에게 1보다 큰 수를 하나 전달 받으세요!!
// 그리고 그 숫자 안에 있는 "짝수"들만 더해서 웹 브라우저 화면에 출력해주세요!

// -----------------------
// < 나 >
// 1. 사용자에게 1보다 큰 값을 받는다
// 2. 그 숫자보다 작은 짝수들을 찾는다
// 3. 그 짝수들을 합해서 출력한다

// const number = Number(prompt("숫자를 입력하세요"));
// for (let i = 1; i <= i; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// // -----------------------
// // < 쌤 >
// const number = Number(prompt("1보다 큰 숫자를 입력해주세요!"));
// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 1) {
//     continue;
//   } else {
//     sum += i;
//     document.write(`${i} ----- ${sum} <br/>`);
//   }
// }
// // continue 건너뛰는거

// -----------------------
// < 쌤2 >
// const number = Number(prompt("1보다 큰 숫자를 입력해주세요!"));

// let sum;
// // let sum 이건 비어있는 컨테이너다
// console.log(sum); => undefined라고 나온다 =값이 없는 상태 /정의가 되어잇지 않은 상태 /값이 아니라 상태를 의미

// let sum = 0;
// console.log(sum); => 0이라고 나온다
