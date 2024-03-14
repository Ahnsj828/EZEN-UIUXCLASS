// const order = new Promise((resolve, reject) => {
//   const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
//   if (coffee != null && coffee != "") {
//     document.querySelector(".start").innerText = `${coffee} 주문 접수`;
//     setTimeout(() => {
//       resolve(coffee);
//     }, 3000);
//     // 두번째 매개변수인 시간 3000이 지나면 첫번째 함수 resolve(coffee);를 실행하라
//   } else {
//     // 아무것도 입력하지 않고 확인을 누르거나 취소버튼을 누르면
//     reject("커피를 주문하지 않았습니다!");
//     // 저 문구를 뜨게 하겠다
//   }
// });
// // 여기까지 약속만했다

// // 아무것도 입력하지 않고 확인을 누르면 빈문자열 => undefined
// // 취소를 누르면 => null

// // 이걸써야 화면에나올 수 있다
// order
//   .then((result) => {
//     document.querySelector(".end").innerText = `${result} 준비완료`;
//   })
//   .catch((err) => (document.querySelector(".start").innerText = `${err}`));

// ---------------------------------------------------------------
// ↓ 함수를 깔끔하게 정리

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee != null && coffee != "") {
    document.querySelector(".start").innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
    // 두번째 매개변수인 시간 3000이 지나면 첫번째 함수 resolve(coffee);를 실행하라
  } else {
    // 아무것도 입력하지 않고 확인을 누르거나 취소버튼을 누르면
    reject("커피를 주문하지 않았습니다!");
    // 저 문구를 뜨게 하겠다
  }
});

const display = (result) => {
  document.querySelector(".end").innerText = `${result} 준비완료`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
};

const showErr = (err) => {
  document.querySelector(".start").innerText = `${err}`;
};

order.then(display).catch(showErr);

// 함수를 깔끔하게 썻다 => 리팩토링
