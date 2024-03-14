// input 태그를 통해서 사용자에게 어떤 숫자를 받을 것 입니다!!

// 사용자를 숫자를 입력한 후 "입력"버튼을 클릭하게 되면, 다음과 같은 조건에 따라서 아래와 같은 결과가 출력되도록 할 것 입니다!!!

// 만약, 10보다 큰 숫자를 입력했다면, 알림창을 통해서 "10보다 작은 숫자를 입력하세요!"라는 메세지가 출력되게 할 것이고,

// 만약, 10보다 작은 숫자를 입력했다면, result라는 공간에 해당 숫자가 출력되도록 할 것 입니다!!

// 단, 해당 코드를 어제 배운 try문과 catch문과 finally문을 활용해서 코드를 작성해보세요

// try문 : 실행문을 작성하는 공간
// catch함수 : 만약 에러가 발생하게 되었을 때, 에러 메세지를 출력시켜줄 수 있는 공간
// finally문 : 상단 실행문이 정상 혹은 에러와 관계없이 무조건 실행되는 공간

//
//
//   << 나 >>
// const userNum = document.querySelector("#user-number");
// // console.log(userNum);
// const btn = document.querySelector("input[type=submit]");
// // console.log(btn);
// const result = document.querySelector("div#result");
// // console.log(result);

// // const json = '{"grade:3", "age:25}';

// try {
//   const userNum = JSON.parse(json);
//   if (!userNum) {
//     throw "값을 입력하지 않았습니다!"
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("통신완료");
// }

// -------------------------------------------
//
//  << 쌤 >>
const userNumber = document.querySelector("input[type='text']");
// console.log(userNumber);
const button = document.querySelector("form");
// console.log(button);

const resultNumber = (e) => {
  e.preventDefault();
  // console.log("click");
  // const n = userNumber.value;
  // value라는 값으로 가져올 수 있다 ?
  // const해서 재할당이 안됐다
  let n = userNumber.value;

  try {
    if (n === "" || isNaN(n)) {
      3;
      //n === "" 아무것도 입력하지 않은 상태라면
      // || 아니면
      // 숫자가 아니다 NaN
      throw "숫자를 입력하세요!";
      // 숫자가 아닌애를 입력하거나 아무것도 입력하지 않았을때
    }
    n = Number(n);
    // 숫자로 바꿔서 재할당하겠다
    if (n <= 10) {
      // 만약에 n이라는 변수가 10보다 작다면
      document.querySelector("#result").innerText = n;
      // 정상적 상황
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요!";
    }
    // 10보다 큰 수를 썼을때
    // 조건문 세개 썼다
  } catch (err) {
    alert(err);
    // 에러메세지를 출력하겠다
  } finally {
    userNumber.value = "";
  }
};

button.addEventListener("submit", resultNumber);
// 폼태그 안에 버튼을 클릭한다는거 => submit이다
