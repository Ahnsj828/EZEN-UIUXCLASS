document.addEventListener("DOMContentLoaded", () => {
  const idLogin = document.querySelector(".id");
  const disposableLogin = document.querySelector(".once");
  const qrLogin = document.querySelector(".qr");
  const contentFrame = document.querySelector("#contentFrame");

  // 초기 설정 : ID 탭만 효과주기
  idLogin.classList.add("click_nav");
  disposableLogin.classList.remove("click_nav");
  qrLogin.classList.remove("click_nav");
  // 초기 설정 : 추가 효과
  idLogin.style = "border-radius: 20px 20px 0 0; border-right: none; ";
  disposableLogin.style = "border-radius: 0 0 0 20px;";
  // qrLogin.style =
  //   "height: 65px; padding-bottom:10px; z-index: 2; position:relative; top: 10px;";
  // 위가 추가 아래가 원본
  qrLogin.style = "border-radius: 0;";

  // ID 로그인 - 클릭
  const idChange = () => {
    contentFrame.setAttribute("src", "./id.html");

    // ID 탭만 효과주기
    idLogin.classList.add("click_nav");
    disposableLogin.classList.remove("click_nav");
    qrLogin.classList.remove("click_nav");

    idLogin.style = "border-radius: 6px 6px 0 0; border-right: none;";
    disposableLogin.style = "border-radius: 0 0 0 6px;";
    qrLogin.style = "border-radius: 0;";
  };

  // 일회용번호 로그인 - 클릭
  const disposableChange = () => {
    contentFrame.setAttribute("src", "./disposable.html");

    // 일회용번호 탭만 효과주기
    idLogin.classList.remove("click_nav");
    disposableLogin.classList.add("click_nav");
    qrLogin.classList.remove("click_nav");

    idLogin.style = "border-radius: 6px 0 6px 0;";
    disposableLogin.style =
      "border-radius: 6px 6px 0 0; border-right: none; border-left: none;";
    qrLogin.style = "border-radius: 0 0 0 6px;";
  };

  // QR 로그인 - 클릭
  const qrChange = () => {
    contentFrame.setAttribute("src", "./qr.html");

    // QR 탭만 효과주기
    idLogin.classList.remove("click_nav");
    disposableLogin.classList.remove("click_nav");
    qrLogin.classList.add("click_nav");

    disposableLogin.style = "border-right: none;";
    qrLogin.style = "border-radius: 6px 6px 0 0;";

    idLogin.style = "border-radius: 0;";
    disposableLogin.style = "border-radius: 0 0 6px 0;";
    qrLogin.style =
      "border-radius: 0 0 0 6px;  border-radius: 6px 6px 0 0; border-left: none;";
  };

  // 각 탭 클릭 이벤트 등록
  idLogin.addEventListener("click", idChange);
  disposableLogin.addEventListener("click", disposableChange);
  qrLogin.addEventListener("click", qrChange);
});
