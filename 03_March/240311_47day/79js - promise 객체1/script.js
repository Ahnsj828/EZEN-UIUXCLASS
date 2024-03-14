// 동기 & 비동기
// 예제로 커피숍

// 외부에서 data를 받아와서 웹브라우저에 출력해야하는 상황이 많아졌다 => 스마트폰이라는 웹브라우저가 활성화 되어서
// JS는 동기 처리 방식의 언어인데 웹브라우저는 비동기 처리되어야지만 웹브라우저에 출력된다

// 그래서 동기처리방식인 JS를 비동기 처리 방식으로 사용하는 방법이 없을까? 하고나온게

// 1)Callback 함수를 활용한 방식
// setInterval()
// setClear()
//  => 콜백지옥 : 콜백에 콜백에 콜백을 호출해서 어디서 오류가 났는지 찾기 힘들다 => 사용을 지향해야한다

// ----------------------------------------------------------------------------------------

// 2) Promise 객체
// promise = 약속
// 계획한 실행이 예정대로 진행되었을 때, 무언가를 추가로 실행하겠다! 라는 약속

// const likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   // 프로토타입 사용할때는 new라는 예약어를 사용해야한다
//   // 콜백함수 형식으로 호출해야한다
//   // resolve 매개변수 / reject 매개변수 / 둘다 함수다
//   if (likePizza) {
//     // 만약 likePizza가 참이라면 다음과 같은 함수를 실행시켜라
//     resolve("피자를 주문합니다.");
//   } else {
//     // 만약 likePizza가 참이 아니라면 라면 다음과 같은 함수를 실행시켜라
//     reject("피자를 주문하지 않습니다.");
//   }
// });
// // promise객체에 대한 형태다

// // const likePizza = false;
// // const pizza = new Promise((resolve, reject) => {
// //   if (likePizza) {
// //     resolve("피자를 주문합니다.");
// //   } else {
// //     reject("피자를 주문하지 않습니다.");
// //   }
// // });

// pizza.then((result) => console.log(result)).catch((err) => console.log(err));
// // 약속을 한 영역과 실행할 영역을 나눈거다
// // 약속한 영역
// // if (likePizza) {
// //   resolve("피자를 주문합니다.");
// // } else {
// //   reject("피자를 주문하지 않습니다.");
// // }
// // });
// // then은 첫번째 함수인 resolve에 대한 실행값을 받는다
// // catch는 두번째인 reject 함수에 대한 실행값을 받는다

// // Promise 객체 별로안쓴다

// -----------------------------------------------------------------------------------------

// 외부 데이터를 가져올 때, 예외조항 처리를 할 수 있다!!
// 에러가 발생했을 때, 미리 에러 메세지를 커스텀 할 수 있다!!
// try문 / catch문 / finally문

const likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문 합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
    // 정상적이지 않을때는 reject를 실행시킬거다
  }
});

// pizza.then((result) => console.log(result));
// // 실질적으로 실행시켜주는건
// // then이라는 매서드를 활용해서 실행시켜주자

// // method chaining 기법 : 1개의 객체 뒤에 연달아서 복수의 매서드 함수를 붙여서 실행시키도록 설계한 코딩 기법
// pizza.then((result) => console.log(result)).catch((err) => console.log(err));
// // 실질적으로 실행시켜주는건
// // then이라는 매서드를 활용해서 실행시켜주자

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
// then가 실행되던 catch가 실행되던 finally로 마무리해라
// finally 마지막 종결이 아니라 옵션이다
