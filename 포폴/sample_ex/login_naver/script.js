// //  << navigation >>
// const idLogin = document.querySelector("#idLogin");
// const disposableLogin = document.querySelector("#disposableLogin");
// const qrLogin = document.querySelector("#qrLogin");
// // console.log(idLogin, disposableLogin, qrLogin);

// const contentFrame = document.querySelector("#contentFrame");
// console.log(contentFrame);

// const idChange = () => {
//   //   console.log("id");
//   contentFrame.setAttribute("src", "./id.html");

//   //   👇🏼css
//   //   menuGame.style = "colr: #fff; background: #298db5";
//   //   menuJukebox.style = "colr: #fff; background: #298db5";
//   //   // 다른거를 누르면 리셋되게 할거다
//   //   menuHome.style = "color: #000; background: #fff";
// };

// const disposableChange = () => {
//   //   console.log("disposable");
//   contentFrame.setAttribute("src", "./disposable.html");
//   //   // setAttributeNode 속성자체를
//   //   // setAttribute생성하고자 하는 속성의 값을 두번째 매개변수로 줄 수 있다

//   //   👇🏼css
//   //   menuHome.style = "colr: #fff; background: #298db5";
//   //   menuGame.style = "colr: #fff; background: #298db5";
//   //   // 다른거를 누르면 리셋되게 할거다
//   //   menuGame.style = "color: #000; background: #fff";
//   //   // 버튼이 눌려졌다는게 식별이 될수 있게 효과를 줬다
// };

// const qrChange = () => {
//   //   console.log("qr");
//   contentFrame.setAttribute("src", "./qr.html");

//   //   👇🏼css
//   //   menuGame.style = "colr: #fff; background: #298db5";
//   //   menuHome.style = "colr: #fff; background: #298db5";
//   //   // 다른거를 누르면 리셋되게 할거다
//   //   menuJukebox.style = "color: #000; background: #fff";
// };

// idLogin.addEventListener("click", idChange);
// disposableLogin.addEventListener("click", disposableChange);
// qrLogin.addEventListener("click", qrChange);

//
//
// --------- Login 방법 선택 => 안에 요소들 변경 => i태그변경 -----
//
//

// //  << navigation >>
// const idLogin = document.querySelector("#idLogin");
// const disposableLogin = document.querySelector("#disposableLogin");
// const qrLogin = document.querySelector("#qrLogin");

// const contentFrame = document.querySelector("#contentFrame");
// console.log(contentFrame);

// const idChange = () => {
//   contentFrame.setAttribute("src", "./id.html");
// };

// const disposableChange = () => {
//   contentFrame.setAttribute("src", "./disposable.html");
// };

// const qrChange = () => {
//   contentFrame.setAttribute("src", "./qr.html");
// };

// idLogin.addEventListener("click", idChange);
// disposableLogin.addEventListener("click", disposableChange);
// qrLogin.addEventListener("click", qrChange);

//
//
// --------- Login 방법 선택 => icon변경 추가 -----
//
//

//  << navigation >>
const idLogin = document.querySelector("#idLogin");
const disposableLogin = document.querySelector("#disposableLogin");
const qrLogin = document.querySelector("#qrLogin");

const contentFrame = document.querySelector("#contentFrame");
console.log(contentFrame);

// 초기 설정: ID 로그인 이미지만 보이기
document.querySelector(".idLogin_icon.login_click").style.display = "inline";
document.querySelector(".idLogin_icon.login_noClick").style.display = "none";
document.querySelector(".disLogin_icon.login_click").style.display = "none";
document.querySelector(".disLogin_icon.login_noClick").style.display = "inline";
document.querySelector(".qrLogin_icon.login_click").style.display = "none";
document.querySelector(".qrLogin_icon.login_noClick").style.display = "inline";

// ID 로그인 - 클릭
const idChange = () => {
  contentFrame.setAttribute("src", "./id.html");

  // ID 로그인 이미지 보이기, 나머지 이미지 숨기기
  document.querySelector(".idLogin_icon.login_click").style.display = "inline";
  document.querySelector(".idLogin_icon.login_noClick").style.display = "none";

  document.querySelector(".disLogin_icon.login_click").style.display = "none";
  document.querySelector(".disLogin_icon.login_noClick").style.display =
    "inline";

  document.querySelector(".qrLogin_icon.login_click").style.display = "none";
  document.querySelector(".qrLogin_icon.login_noClick").style.display =
    "inline";
};

// 일회용번호 로그인 - 클릭
const disposableChange = () => {
  contentFrame.setAttribute("src", "./disposable.html");

  // 일회용 번호 이미지 보이기, 나머지 이미지 숨기기
  document.querySelector(".idLogin_icon.login_click").style.display = "none";
  document.querySelector(".idLogin_icon.login_noClick").style.display =
    "inline";

  document.querySelector(".disLogin_icon.login_click").style.display = "inline";
  document.querySelector(".disLogin_icon.login_noClick").style.display = "none";

  document.querySelector(".qrLogin_icon.login_click").style.display = "none";
  document.querySelector(".qrLogin_icon.login_noClick").style.display =
    "inline";
};

// QR 로그인 - 클릭
const qrChange = () => {
  contentFrame.setAttribute("src", "./qr.html");

  // QR코드 이미지 보이기, 나머지 이미지 숨기기
  document.querySelector(".idLogin_icon.login_click").style.display = "none";
  document.querySelector(".idLogin_icon.login_noClick").style.display =
    "inline";

  document.querySelector(".disLogin_icon.login_click").style.display = "none";
  document.querySelector(".disLogin_icon.login_noClick").style.display =
    "inline";

  document.querySelector(".qrLogin_icon.login_click").style.display = "inline";
  document.querySelector(".qrLogin_icon.login_noClick").style.display = "none";
};

idLogin.addEventListener("click", idChange);
disposableLogin.addEventListener("click", disposableChange);
qrLogin.addEventListener("click", qrChange);
