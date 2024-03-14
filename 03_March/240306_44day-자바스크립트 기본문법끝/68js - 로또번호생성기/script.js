// const button = document.querySelector("button");
// const result = document.querySelector("#result");

// // 로또 규칙!
// // 한번 추첨 시 : 6개의 숫자가 나와야한다 (*반드시 중복되서는 안된다!)

// // 각각의 6개의 숫자 : 최대 45까지 가능
// // 1~45까지의 구간 숫자를 랜덤으로 나오게한다 => 수학객체 random() * 45

// // 반복문!! * 6번

// // 절대로 중복되서는 안된다 => Set() / set이라는 인스턴스에 객체화
// // add()

// // result출력!
// // innerText

// const lottoPlay = () => {
//   // console.log("click"); // 버튼 클릭하면 숫자가 증가한다
//   const myNumber = new Set();
//   for (let i = 0; i < 6; i++) {
//     myNumber.add(Math.floor(Math.random() * 45) + 1);
//     // console.log(lucky);
//     // const lucky = Math.random() * 45; // 16.11781694293508 // 버튼 클릭하면 랜덤 실수가 나온다
//     // Math.floor => 정수로
//     // +1  => 45는 포함안되는 44까지만 나와서 1을 추가한거다
//   }
//   console.log(myNumber);
// };

// button.addEventListener("click", lottoPlay);

//
//
// ------------------------------------------------
//
//

// < 구조분해할당으로 바꿀거다 >
const button = document.querySelector("button");
const result = document.querySelector("#result");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    // 만약 값이 6이 아니면 한번 더 돌려라
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
  // console.log(myNumber);
};

button.addEventListener("click", lottoPlay);
