//  << Game >> Word game
const search = document.querySelector(".word_text form");
// 이벤트 트리거 역할을 할거다
// .word_text안에 있는 form요소
console.log(search);

const gameStart = (e) => {
  e.preventDefault();
  // console.log("game");
  let word = document.querySelector("#word").innerText;
  // 계속 사용자가 재할당할거라 const가 아니라 let
  // 안에 내용찾을거라 innerText
  // console.log(word);

  let myword = document.querySelector("#myword").value;
  // 사용자가 입력할 란
  // input 태그가 아니라 그 안에 value값
  // console.log(word, myword);

  let lastword = word[word.length - 1];
  // 슭이라는 단어
  let firstword = myword[0];
  // console.log(word, myword, lastword, firstword);

  if (lastword === firstword) {
    // const result = document.querySelector("#result");
    // result.innerText = "정답입니다";
    // 밑에로 줄일수 있다
    document.querySelector("#result").innerText = "정답입니다";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    // 틀렸을 경우
    document.querySelector("#myword").value = "";
    // 틀린 내용 지우려고
  }
};

search.addEventListener("submit", gameStart);
// search.addEventListener("submit", () => gameStart(n));
// 비동기방식으로 JS를 실행 시키게 되었을 때,

//
//
//
//

//  << Game >> Lotto game
// form태그가 없을때는 클릭이벤트?
const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const startLotto = () => {
  // console.log("lotto");
  const { digitCount, maxNumber } = luckyNumber;
  // 구조분해할당으로 6개의 숫자랑 45까지의 숫자
  let myNumber = new Set();
  // set이라는 프로토 타입은 new라는 예약어를 반드시써야한다
  // set은 중복값을 받아주지 않는다
  // console.log(myNumber);
  for (let i = 0; i < digitCount; i++) {
    // 6개의 숫자가 필요하다 => 인덱스 5개
    // Math.random() * maxNumber;
    // Math.floor(Math.random() * maxNumber) + 1;  //44.9999... 로 나오는데 45까지 필요하니까 Math.floor
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...maxNumber]}`;
  } else {
    // 중복된 숫자가 나와서 다시 뽑아야될때
    result.innerText = "재추첨하겠습니다!";
  }
};

button.addEventListener("click", startLotto);
