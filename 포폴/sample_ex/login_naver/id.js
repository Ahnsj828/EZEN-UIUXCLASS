// -----  id& pw 선택 => icon변경 추가 -----
//  << id & pw >>
const idDiv = document.querySelector(".input_id")
const idInput = document.querySelector(".input_id input");

const idIconNoClick = document.querySelector(".idIcon_noClick");
const idIconClick = document.querySelector(".idIcon_click");

const pwDiv = document.querySelector(".input_pw")
const pwInput = document.querySelector(".input_pw input");

const pwIconNoClick = document.querySelector(".pwIcon_noClick");
const pwIconClick = document.querySelector(".pwIcon_click");


// 초기 설정: ID 로그인 이미지만 보이기

idDiv.classList.remove("input_click")
pwDiv.classList.remove("input_click")

// // ID input - 클릭
// const idInputClick = () => {
//   document.querySelector(".idIcon_noClick").style.display = "none";
//   document.querySelector(".idIcon_click").style.display = "inline";

//   document.querySelector(".pwIcon_noClick").style.display = "inline";
//   document.querySelector(".pwIcon_click").style.display = "none";

//   idDiv.classList.add("input_click")
//   pwDiv.classList.remove("input_click")
// };


//  ID input - 클릭(포커스) - 아이디 입력 요소에 포커스 이벤트 리스너 추가
idInput.addEventListener("focus", () => {
  // 포커스가 되었을 때 input_click 클래스 추가
  idDiv.classList.add("input_click");

  idIconNoClick.classList.remove("idIcon_noClick");
  idIconClick.classList.remove("idIcon_click");
});

//  ID input - 클릭 해제(포커스 아웃) - 아이디 입력 요소에 포커스 아웃 이벤트 리스너 추가
idInput.addEventListener("blur", () => {
  // 포커스가 해제되었을 때 input_click 클래스 제거
  idDiv.classList.remove("input_click");

  idIconNoClick.classList.add("idIcon_noClick");
  idIconClick.classList.add("idIcon_click");
});


//  PW input - 클릭(포커스) - 비밀번호 입력 요소에 포커스 이벤트 리스너 추가
pwInput.addEventListener("focus", () => {
  // 포커스가 되었을 때 input_click 클래스 추가
  pwDiv.classList.add("input_click");

  pwIconNoClick.classList.remove("pwIcon_noClick");
  pwIconClick.classList.remove("pwIcon_click");
});

//  PW input - 클릭 해제(포커스 아웃) - 비밀번호 입력 요소에 포커스 아웃 이벤트 리스너 추가
pwInput.addEventListener("blur", () => {
  // 포커스가 해제되었을 때 input_click 클래스 제거
  pwDiv.classList.remove("input_click");

  pwIconNoClick.classList.add("pwIcon_noClick");
  pwIconClick.classList.add("pwIcon_click");
});

// // pw input - 클릭
// const pwInputClick = () => {
//   document.querySelector(".idIcon_noClick").style.display = "inline";
//   document.querySelector(".idIcon_click").style.display = "none";

//   document.querySelector(".pwIcon_noClick").style.display = "none";
//   document.querySelector(".pwIcon_click").style.display = "inline";

//   // idDiv.classList.remove("input_click")
//   // pwDiv.classList.add("input_click")
// };



// idInput.addEventListener("click", idInputClick);
// pwInput.addEventListener("click", pwInputClick);
