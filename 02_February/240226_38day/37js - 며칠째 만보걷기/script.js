// 사용자로부터  "오늘부터 며칠간 만 보 걷기"를 했는지를 물어보고 임의 날짜를 받으세요!!
// 00일 연속 달성 출력될 수 있도록 해주세요!!

// 1. 사용자에게 날짜를 받는다
// 2. 며칠 연속 되었는지 계산한다
// 3. 출력한다

// const today = new Date();
// document.write();

//
//
// --------------------------------------
// 현재시점의 날짜
// 사용자로부터의 날짜
const userQuery = prompt(
  "만보 걷기를 시작한 날짜를 입력해주세요!",
  "ex.204-01-09"
);
const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedDay / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
