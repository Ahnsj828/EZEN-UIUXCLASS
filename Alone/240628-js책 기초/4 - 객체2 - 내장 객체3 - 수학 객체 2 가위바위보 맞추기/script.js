// << 수학 객체 - 가위 바위 보 맞추기 >>

// ex) 웹사이트 방문 시 나타나는 창에 방문자가 "가위, 바위, 보"를 적어 컴퓨터가 내려는 가위, 바위, 보를 추측해 맞추는 예제
// const game = prompt("가위, 바위, 보 중 어떤거를 선택하시겠나요?");
// let gameNum;
// switch (game) {
//   case "가위":
//     gameNum = 1;
//   break;
//   case "바위":
//     gameNum = 2;
//   break;
//   case "보":
//     gameNum = 3;
//   break;
//   default: alert("잘못 입력하였습니다.");
//   location.reload()
// }
// 
// const computer = Math.ceil(Math.random() * 3)

// document.write("<img src=\"images/game_" + gameNum + ".png\">")
// document.write("<img src=\"images/game_" + computer + ".png\">")

// document.write("<br/>")

// if (gameNum == computer) {
//   document.write("잘 맞췄습니다! 축하합니다")
// } else {
//   document.write("틀렸습니다! 재도전 해보세요")
// }

document.write("<br/>")
document.write("============내가 해보기============")
document.write("<br/>")

const game = prompt("가위, 바위, 보 중 어떤걸 선택하시겠나요?");

let gameNum;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default: alert("잘못 입력하셨습니다.");
  location.reload()
}

const computer = Math.ceil(Math.random() * 3)

document.write("<img src=\"images/game_" + gameNum + ".png\">")
document.write("<img src=\"images/game_" + computer + ".png\">")
document.write("<br/>")

if (gameNum == computer) {
  document.write("축하합니다! 정답입니다~")
} else {
  document.write("틀렸습니다! 재도전 해보세요~")
}

// document.write("<br/>")
// document.write("============================================")
// document.write("<br/>")