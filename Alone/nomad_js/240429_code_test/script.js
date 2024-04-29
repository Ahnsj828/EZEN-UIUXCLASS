// 범위 입력 요소
const range = document.getElementById("range");
// 사용자가 선택한 숫자 입력 요소
const userPick = document.getElementById("userPick");
// 게임 플레이 버튼
const button = document.querySelector("button");
// 사용자 선택 결과를 표시할 요소
const resultUser = document.querySelector(".resultUser");
// 머신 선택 결과를 표시할 요소
const resultMachine = document.querySelector(".resultMachine");
// 게임 결과를 표시할 요소
const result = document.querySelector(".result");

// 범위 입력 요소의 값이 변경될 때마다 머신이 선택한 숫자를 갱신하는 함수
range.addEventListener("input", () => {
  // 범위를 양수로 만들기 위해 Math.abs() 함수 사용
  const maxRange = Math.abs(parseInt(range.value));
  // 머신이 선택한 랜덤 숫자 생성
  const machineNumber = Math.floor(Math.random() * (maxRange + 1));
  // 게임 시작 전에는 머신이 선택한 숫자를 숨김
  resultMachine.innerHTML = "";
});

// 게임 플레이 버튼 클릭 시 게임 시작
button.addEventListener("click", () => {
  // 사용자가 선택한 숫자
  const userNumber = parseInt(userPick.value);
  // 범위를 양수로 만들기 위해 Math.abs() 함수 사용
  const maxRange = Math.abs(parseInt(range.value));
  // 머신이 선택한 랜덤 숫자 생성
  const machineNumber = Math.floor(Math.random() * (maxRange + 1));

  // 사용자가 선택한 숫자와 머신이 선택한 숫자 출력
  resultUser.innerHTML = userNumber;
  resultMachine.innerHTML = machineNumber;

  // 게임 결과 확인 및 표시
  if (userNumber === machineNumber) {
    result.innerHTML = "You won!";
  } else {
    result.innerHTML = "You lost!";
  }
});
