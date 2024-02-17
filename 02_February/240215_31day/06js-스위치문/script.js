// 5. 제어문
//  - 조건문
//   > if문 - 만약에 ~라면 이거해줘
//   > if...else문 (*else if문)  - 이거아니면 이거?
//   > switch문 -이중에서 골라

//  - 반복문
//   > for문 - ~하는 동안에
//   > forEach문
//   > for..in문
//   > for...of문
//   > while문
//   > do...while문
//  (*break문 & continue문)

// ==================================================

// << switch문 >>
//  이중에서 골라

// switch(// 조건식 =>) {
//   case 값 : 실행문
//   break;
// }

// switch(// 조건식 =>) {
//   case 1 : 실행문
//   break;
//   case 2 : 실행문
//   break;
//   case 3 : 실행문
//   break;
//   case 4 : 실행문
//   break;
//   case 5 : 실행문
//   break;
// }

// ----------------------------------------------------

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   //    = 얕은비교
//   //   == 깊은비교
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다!");
//       break;
//     case "2":
//       alert("CSS를 신청하셨습니다!");
//       break;
//     case "3":
//       alert("JS를 신청하셨습니다!");
//       break;
//     default:
//       alert("잘못입력하셨습니다!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }
// // null undefined 0만 아니면된다

// ----------------------------------------------------

// //  < 예제 >
// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요!
// 쇼핑몰 후보 : 쿠팡 / G마켓 / 11ST / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면, prompt창에 "확인"버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요!

// window 객체안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체안에 href 속성 => 경로를 지정해주는 속성
// 쿠팡을 사용자가 선택했다면, location.href = "https://www.coupang.com" 결과값을 설정하면, 쿠팡사이트로 이동할 수 있습니다!!

// // < 나 >
// const webSite = prompt(
//   "즐겨찾는 쇼핑몰은 무엇인가요?",
//   "1_쿠팡, 2_G마켓, 3_11st 4_마켓컬리"
// );

// if (webSite !== null) {
//   switch (webSite) {
//     case "1":
//       alert("쿠팡을 자주 방문하시는군요!");
//       break;
//     case "2":
//       alert("G마켓을 자주 방문하시는군요!");
//       break;
//     case "3":
//       alert("11번가를 자주 방문하시는군요!");
//       break;
//     case "4":
//       alert("마켓컬리를 자주 방문하시는군요!");
//       break;
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// -------------------------------------------
