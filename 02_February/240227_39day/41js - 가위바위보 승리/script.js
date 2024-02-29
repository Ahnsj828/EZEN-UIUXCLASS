const buttons = document.querySelectorAll("button");
// console.log(buttons);
const computerChoice = document.querySelector(".computer-choice");
const userrChoice = document.querySelector(".you-choice");
// 여기에 querySelectorAll해도 값은 나온다 / 하나만 있어서 / 문법은 틀린거다
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];
// 세가지의 문자열 / 가위index값 = 0 ,바위index값 = 1, 보index값 = 2

const show = (user, computer, message) => {
  userrChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};
//
//
//
const game = (user, computer) => {
  // user, computer 이름은 다르게해도 되지만 반드시 위치가 똑같아야한다
  if (user === computer) {
    // let message = "무승부";
    message = "무승부";
    // 밖에도 사용하려고 let 지움 /스코프
    // console.log("무승부");
  } else {
    switch (user + computer) {
      // + 연결연산자(문자+문자 = 문자) / 내가낸거랑 컴터가 낸거랑 같이써라
      // case "가위보":
      //   console.log("사용자승리!");
      //   break;
      // case "바위가위":
      //   console.log("사용자승리!");
      //   break;
      // case "보바위":
      //   console.log("사용자승리!");
      //   break;
      //
      //
      // 이렇게 줄일수 있다
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자승리!";
        // console.log("사용자승리!");
        break;
      //
      //
      //  반대로 컴터가 이긴경우
      case "가위바위":
      case "바위보":
      case "보가위":
        // console.log("컴퓨터승리!");
        break;
    }
  }
  show(user, computer, message);
};
//
//
//
const play = (e) => {
  // 화살표함수 쓰려고 위에씀
  // console.log("click");
  // 프리벤트 디퍼 는 a태그 서버에 전송해야될때에 넣는거다
  // console.log(e);
  // console.log(e.target.innerText);
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  // 소수점 없애려고 floor / 랜덤하게 나와야되니까 random
  const computer = result[randomIndex];

  game(user, computer);
  // console.log(user, computer);
};

buttons.forEach((button) => {
  // buttons 유사배열이다 어느정도의 배열을 쓸 수있다
  button.addEventListener("click", play);
});
