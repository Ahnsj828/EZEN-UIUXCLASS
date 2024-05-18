// -----  id& pw 선택 => icon변경 , border효과 변경 -----
//  < id 요소 >
const idDiv = document.querySelector(".input_id");
const idInput = document.querySelector(".input_id input");
//  < id 아이콘 >
const idIconNoClick = document.querySelector(".idIcon_noClick");
const idIconClick = document.querySelector(".idIcon_click");
// xGray_button_id 버튼 선택
const xGrayButtonId = document.querySelector(".xGray_button_id");
//  < pw 요소 >
const pwDiv = document.querySelector(".input_pw");
const pwInput = document.querySelector(".input_pw input");
//  < pw 아이콘 >
const pwIconNoClick = document.querySelector(".pwIcon_noClick");
const pwIconClick = document.querySelector(".pwIcon_click");
// xGray_button_pw 버튼 선택
const xGrayButtonPw = document.querySelector(".xGray_button_pw");

// < 초기 설정: border효과 기본 상태로 적용 >
idDiv.classList.remove("input_click");
pwDiv.classList.remove("input_click");

// < ID input 클릭(포커스) > 아이디 입력 요소에 포커스 이벤트 리스너 추가
idInput.addEventListener("focus", () => {
  // 포커스가 되었을 때 input_click 클래스 추가
  idDiv.classList.add("input_click");
  // 아이콘 이미지 변경
  idIconNoClick.classList.remove("idIcon_noClick");
  idIconClick.classList.remove("idIcon_click");
});

// < ID input 클릭 해제(포커스 아웃) > 아이디 입력 요소에 포커스 아웃 이벤트 리스너 추가
idInput.addEventListener("blur", () => {
  // 포커스가 해제되었을 때 input_click 클래스 제거
  idDiv.classList.remove("input_click");
  // 아이콘 이미지 변경
  idIconNoClick.classList.add("idIcon_noClick");
  idIconClick.classList.add("idIcon_click");
});

// < PW input 클릭(포커스) > 비밀번호 입력 요소에 포커스 이벤트 리스너 추가
pwInput.addEventListener("focus", () => {
  // 포커스가 되었을 때 input_click 클래스 추가
  pwDiv.classList.add("input_click");
  // 아이콘 이미지 변경
  pwIconNoClick.classList.remove("pwIcon_noClick");
  pwIconClick.classList.remove("pwIcon_click");
});

// < PW input 클릭 해제(포커스 아웃) > 비밀번호 입력 요소에 포커스 아웃 이벤트 리스너 추가
pwInput.addEventListener("blur", () => {
  // 포커스가 해제되었을 때 input_click 클래스 제거
  pwDiv.classList.remove("input_click");
  // 아이콘 이미지 변경
  pwIconNoClick.classList.add("pwIcon_noClick");
  pwIconClick.classList.add("pwIcon_click");
});

//
//
//
//
// -----  input 내용 입력 => x아이콘 => 클릭하면 없어지게 -----

// < ID 입력 요소 입력 이벤트 > ID 입력시 : x버튼 생성
idInput.addEventListener("input", () => {
  if (idInput.value.trim() == "") {
    xGrayButtonId.style.display = "none";
    // 입력된 내용이 없을 경우 xGray_button_id 버튼 안 보이기
  } else {
    xGrayButtonId.style.display = "inline-block";
    // 입력된 내용이 있을 경우 xGray_button_id 버튼 보이기
  }
});

// < xGray_button_id 버튼 클릭 이벤트 > 버튼 클릭 시 : 기입된 내용과 버튼 숨기기
xGrayButtonId.addEventListener("click", () => {
  // 입력된 내용과 버튼 숨기기
  idInput.value = ""; // 입력 내용 초기화
  xGrayButtonId.style.display = "none"; // 버튼 숨기기
});

// < PW 입력 요소 입력 이벤트 > PW 입력시 : x버튼 생성
pwInput.addEventListener("input", () => {
  if (pwInput.value.trim() == "") {
    xGrayButtonPw.style.display = "none";
    // 입력된 내용이 없을 경우 xGray_button_pw 버튼 안 보이기
  } else {
    xGrayButtonPw.style.display = "inline-block";
    // 입력된 내용이 있을 경우 xGray_button_pw 버튼 보이기
  }
});

// < xGray_button_pw 버튼 클릭 이벤트 > 버튼 클릭 시 : 기입된 내용과 버튼 숨기기
xGrayButtonPw.addEventListener("click", () => {
  // 입력된 내용과 버튼 숨기기
  pwInput.value = ""; // 입력 내용 초기화
  xGrayButtonPw.style.display = "none"; // 버튼 숨기기
});

//
//
//
//
// ----- 로그인 상태 유지 체크 => 클릭시 버튼이 바뀌게 -----
const stateItems = document.querySelectorAll(".state");
const stateBtn = document.querySelector(".state_button");

stateBtn.classList.remove("state_button_click");

stateItems.forEach((stateItem) => {
  stateItem.addEventListener("click", () => {
    if (stateBtn.classList.contains("state_button_click")) {
      stateBtn.classList.remove("state_button_click");
    } else {
      stateBtn.classList.add("state_button_click");
    }
  });
});

//
//
//
//
// ----- IP보안 상태 체크 => 클릭시 버튼이 바뀌게 -----
const ipBtn = document.querySelector(".ip label");
const ipBtnCircle = ipBtn.querySelector(".ip_button_circle");

ipBtn.classList.remove("ip_button_check");

ipBtn.addEventListener("click", () => {
  if (ipBtn.classList.contains("ip_button_check")) {
    ipBtn.classList.remove("ip_button_check");

    ipBtnCircle.style.cssText =
      "transform: translateX(0px); transition: all 0.2s ease;";
  } else {
    ipBtn.classList.add("ip_button_check");

    ipBtnCircle.style.cssText =
      "transform: translateX(15px); transition: all 0.2s ease;";
  }
});

//
// --------<< 알림메세지 >> 입력 않고 로그인시 알림메시지 --------
const error = document.querySelector(".error-msg")
// const numberInput = document.querySelector(".idInput")
const noIDPW =document.querySelector(".noIDPW")
const loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", function() {
  if (idInput.value === "") {
    error.style.opacity = "1";
    noIDPW.innerHTML = "아이디"
  } else if (pwInput.value === "") {
    error.style.opacity = "1"
    noIDPW.innerHTML = "비밀번호"
  }
});

// 
// --------<< 알림메세지 >> 서버로 데이터 전송 못하게 --------
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); 
  });
});

// --------<< id&pw 입력 후 로그인 >> 지정 서버로 이동 --------
// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.querySelector("form");

//   form.addEventListener("submit", function(event) {
//       event.preventDefault(); // 기본 동작(페이지 이동)을 막습니다.

//       // 입력된 아이디와 비밀번호 가져오기
//       const idValue = idInput.value.trim();
//       const pwValue = pwInput.value.trim();

//       // 아이디와 비밀번호가 비어있지 않은지 확인
//       if (idValue && pwValue) {
//           // 입력된 아이디와 비밀번호가 있으면 페이지 이동
//           window.location.href = "https://www.naver.com/"; // 지정한 페이지 URL로 이동
//       } 
//   });
// });