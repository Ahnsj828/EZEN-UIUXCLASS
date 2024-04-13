// -----  id& pw 선택 => icon변경 추가 -----
//  << id & pw >>
const idInput = document.querySelector(".input_id input");
const idIconNoClick = document.querySelector(".idIcon_noClick");
const idIconClick = document.querySelector(".idIcon_click");

const pwInput = document.querySelector(".input_pw input");
const pwIconNoClick = document.querySelector(".pwIcon_noClick");
const pwIconClick = document.querySelector(".pwIcon_click");

// 초기 설정: ID 로그인 이미지만 보이기
document.querySelector(".idIcon_noClick").style.display = "inline";
document.querySelector(".idIcon_click").style.display = "none";

document.querySelector(".pwIcon_noClick").style.display = "inline";
document.querySelector(".pwIcon_click").style.display = "none";

// ID input - 클릭
const idInputClick = () => {
  document.querySelector(".idIcon_noClick").style.display = "none";
  document.querySelector(".idIcon_click").style.display = "inline";

  document.querySelector(".pwIcon_noClick").style.display = "inline";
  document.querySelector(".pwIcon_click").style.display = "none";
};

// pw input - 클릭
const pwInputClick = () => {
  document.querySelector(".idIcon_noClick").style.display = "inline";
  document.querySelector(".idIcon_click").style.display = "none";

  document.querySelector(".pwIcon_noClick").style.display = "none";
  document.querySelector(".pwIcon_click").style.display = "inline";
};

idInput.addEventListener("click", idInputClick);
pwInput.addEventListener("click", pwInputClick);
