// 1. 첫번째 수를 찾아온다
// 2. 두번째 수를 찾아온다
// 3. 버튼을 찾아온다
// 4. 버튼에 이벤트를 부여한다
// 5. 두 수를 계산한다
// 6. 값을 표시한다

// const firstNum = document.querySelector("#number1");
// // console.log(firstNum);
// const secondNum = document.querySelector("#number2");
// // console.log(secondNum);
// const countBtn = document.querySelector("#calc");
// // console.log(countBtn);

// viewBtn.onclick = function () {
//   detail.classList.toggle("hidden");
// };
//
//
//
//
// -------------------------------------
//  < 쌤 >
// 1. 사용자가 입력한 2개의 숫자를 찾아온다
// 2. 출력될 공간을 정의한다
// 3. 계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다
// 4. 값을 출력시켜주기 위한 연산작업이 필요하다.
// 5. 최대공약수에 대한 개념이 필요하다

const firstNum = document.querySelector("#number1");
// console.log(firstNum);
const secondNum = document.querySelector("#number2");
// console.log(secondNum);
const button = document.querySelector("form input[type='submit']");

const result = document.querySelector("#result");
// console.log(result);

// 연산작업할 함수
const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  //const max = firstNum > secondNum 만약 이게 참이라고 하면
  let GCD = 0;
  // 숫자를 넣어줘야 NaN이나 undefined가 안나온다 => 임의로 0을넣음
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
