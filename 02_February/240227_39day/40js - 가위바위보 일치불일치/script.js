// << 가위바위보 >>
// 나 : 가위, 바위, 보
// 컴 : 가위, 바위, 보 (랜덤으로 내게 지정)
// => 내가 선택한것과 컴터가 선택한것이 일치하는지 불일치하는지 / 일치 여부
// 컴터 : 랜덤이라는 함수를 쓸거다 => 값이 랜덤으로 나온다 => 1(가위),2(바위),3(보)
// if=> 두개일경우 / 세개니까 switch

document.write("<h1>컴퓨터 & 나의 가위.바위.보 맞추기 게임</h1>");

const game = prompt("가위, 바위, 보 중 선택하세요", "ex.가위 바위 보");
// 내가 셋중하나를 선택한다

// 내가 낸것과 컴터가 선택한것과 일치하느냐 불일치하냐
let gameNum = 0;
switch (game) {
  case "가위":
    gameNum = 1;
    break;
  // break로 종결시켜주기!
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 작성했습니다!");
    // default 가위 바위 보가 아닐경우
    location.reload();
  // 끝나면 다시 할 수 있게
}

const com = Math.ceil(Math.random() * 3);
// 컴터는 랜덤하게
// () 안에 올수 있는 가장큰 정수는 2다 / 2.99999999...가 와도 2다
document.write(`<img src="./images/math_img_${com}.jpg">`);
// ${com}에 1 혹은 2혹은 3이 올거다

if (gameNum == com) {
  document.write("컴퓨터와 동일합니다!");
} else {
  document.write("컴퓨터와 동일하지 않습니다!");
}

console.log(gameNum, com); // 1 3 // 난 가위 컴터는 보

// -----------------------------여기까지는 일치하냐 일치하지않냐
// 누가 이겼는가
