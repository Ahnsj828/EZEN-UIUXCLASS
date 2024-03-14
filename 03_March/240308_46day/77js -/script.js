// JS 언어 이야기
// JS 언어 => 객체 지향 언어

// 외부에서 json 형식의 데이터를 가져와서 웹브라우저 출력해야하는 상황!!

// JS 언어 => 태생적으로 동기 처리 방식을 하도록 만들어졌다

// 동기 => 순차적으로 무언가를 처리한다는 뜻!!

// 예시 => 커피숍에 10명넘게 줄이 서있다 / 근데 알바가 한명이라 주문도 받고 커피도 받아야하는 상황이다 / 첫번째 손님커피를 만드느라 뒤에 9명의 주문을 못받게 됐다 => 그래서 키오스크가 나왔다 /
// 키오스크 탄생 => 비동기 처리
// A사람 키오스크로 주문 => 결제완료 => 제조된 커피를 기다린다
// B사람 키오스크로 주문 => 결제완료 => 제조된 커피를 기다린다
// .
// .
// .

// cpu와 메모리램을 늘리는거 = 알바생을 늘리는거
// 최신식컴터 = 바리스타

// 동기처리방식인 JS를 비동기처리로 바꾸지 않는 이유 => 큰 리스크가 있다 => 문법이 다 바뀐다
// 그래서 보완 => 문법 업데이트만 하고있다

// XHR(XMLHttpRequest) => 비동기
// JS => 동기

// JS가 태생이 동기처리 방식이지만, 특정 상황에 닥쳤을 때, 해당상황에서는 비동기처리를 할 수 있도록 해야하지 않을까? 라고 생각했다

// JS 비동기처리방식이 총 3번에 걸쳐서 업그레이드가 되어왔다
// 1첫번째) 콜백함수를 사용해서 비동기처리방식으로 바꾸는 방법
// 2두번째) Promise 객체 사용하는방법
// 3세번째) async, await 키워드를 사용하는 방법 => finaly
//
//
// -------------------------------------------------------
//
//
// << 동기처리방식 >>

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// // displayA라는 함수를 호출하고
// displayB();
// // displayB라는 함수를 호출하고
// displayC();
// // displayC라는 함수를 호출하고

// 동기처리방식이라 무조건 A-> B -> C 순서대로 나올거다  //  A  //  B  //  C

// 제 아무리 displayB함수의 호출이 displayC함수 호출보다 발생했어도, displayC함수의 결과값이 먼저 나오게 할 수만 있다면, 우리는 자바스크립트언어를 비동기처리가 된것처럼 만들어 낼 수 있는 것이다!

//
//
// -------------------------------------------------------
//
//

// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   // c가 b보다 실행되게 하겠다
//   setTimeout(() => {
//     // 특정 시간이 경과되야 실행되는 함수
//     // 실행시키고자 하는 함수
//     //  setTimeout활용해서 비동기 처리했다
//     console.log("B");
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

//
//
// -------------------------------------------------------
//
// << 콜백함수활용 >>

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// a 나오고 2초 있다가 b,c나온다
// 첫번째 동기처리방식과 비슷해보이지만 다르다
// 얘는 비동기 처리방식이다

//
//
// =============================================================
//
// << 콜백함수 활용해서 만든 예시 >>

// const display = (result) => {
//   console.log(`${result} 준비 완료`);
// };

// const order = (coffee, callback) => {
//   // coffee문자열 callback함수
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//     // 함수
//   }, 3000); // 3000 딜레이시간
// };

// order("아메리카노", display);
// // 매개변수(아메리카노)와 콜백함수(display)

//
//
// -----------------------------------------
//
//
//  << 콜백지옥 >>
// const displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//   }, 1000);
// };

// displayLetter();

//
//

const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop!");
        });
      });
    });
  }, 1000);
};

displayLetter();

// 콜백의 인기가 높아져서 콜백에 콜백에 콜백을 사용했다
//   => 여기서 문제 찾기가 힘들다
//     => 콜백지옥
