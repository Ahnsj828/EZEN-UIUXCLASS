// -------<< navigation >>  Login 방법 선택-------
//    => icon변경 , navigation 스타일변경 , inner변경
document.addEventListener("DOMContentLoaded", () => {
  const idLogin = document.querySelector("#idLogin");
  const disposableLogin = document.querySelector("#disposableLogin");
  const qrLogin = document.querySelector("#qrLogin");
  const contentFrame = document.querySelector("#contentFrame");

  // 초기 설정: ID 로그인 이미지만 보이기
  document.querySelector(".idLogin_icon.login_click").style.display = "inline";
  document.querySelector(".idLogin_icon.login_noClick").style.display = "none";
  document.querySelector(".disLogin_icon.login_click").style.display = "none";
  document.querySelector(".disLogin_icon.login_noClick").style.display =
    "inline";
  document.querySelector(".qrLogin_icon.login_click").style.display = "none";
  document.querySelector(".qrLogin_icon.login_noClick").style.display =
    "inline";

  // 초기 설정 : ID 탭만 효과주기
  idLogin.classList.add("click_nav");
  disposableLogin.classList.remove("click_nav");
  qrLogin.classList.remove("click_nav");
  // 초기 설정 : 추가 효과
  idLogin.style = "border-radius: 6px 0 0 0; border-right: none; ";
  disposableLogin.style = "border-radius: 0 0 0 6px;";
  qrLogin.style = "border-radius: 0;";

  // ID 로그인 - 클릭
  const idChange = () => {
    contentFrame.setAttribute("src", "./html/id.html");

    // ID 로그인 이미지 보이기, 나머지 이미지 숨기기
    document.querySelector(".idLogin_icon.login_click").style.display =
      "inline";
    document.querySelector(".idLogin_icon.login_noClick").style.display =
      "none";

    document.querySelector(".disLogin_icon.login_click").style.display = "none";
    document.querySelector(".disLogin_icon.login_noClick").style.display =
      "inline";

    document.querySelector(".qrLogin_icon.login_click").style.display = "none";
    document.querySelector(".qrLogin_icon.login_noClick").style.display =
      "inline";

    // ID 탭만 효과주기
    idLogin.classList.add("click_nav");
    disposableLogin.classList.remove("click_nav");
    qrLogin.classList.remove("click_nav");

    idLogin.style = "border-radius: 6px 0 0 0; border-right: none;";
    disposableLogin.style = "border-radius: 0 0 0 6px;";
    qrLogin.style = "border-radius: 0;";
  };

  // 일회용번호 로그인 - 클릭
  const disposableChange = () => {
    contentFrame.setAttribute("src", "./html/disposable.html");

    // 일회용번호 이미지 보이기, 나머지 이미지 숨기기
    document.querySelector(".idLogin_icon.login_click").style.display = "none";
    document.querySelector(".idLogin_icon.login_noClick").style.display =
      "inline";

    document.querySelector(".disLogin_icon.login_click").style.display =
      "inline";
    document.querySelector(".disLogin_icon.login_noClick").style.display =
      "none";

    document.querySelector(".qrLogin_icon.login_click").style.display = "none";
    document.querySelector(".qrLogin_icon.login_noClick").style.display =
      "inline";

    // 일회용번호 탭만 효과주기
    idLogin.classList.remove("click_nav");
    disposableLogin.classList.add("click_nav");
    qrLogin.classList.remove("click_nav");

    idLogin.style = "border-radius: 6px 0 6px 0;";
    disposableLogin.style =
      "border-radius: 0; border-right: none; border-left: none;";
    qrLogin.style = "border-radius: 0 0 0 6px; " ;
  };

  // QR 로그인 - 클릭
  const qrChange = () => {
    contentFrame.setAttribute("src", "./html/qr.html");

    // QR코드 이미지 보이기, 나머지 이미지 숨기기
    document.querySelector(".idLogin_icon.login_click").style.display = "none";
    document.querySelector(".idLogin_icon.login_noClick").style.display =
      "inline";

    document.querySelector(".disLogin_icon.login_click").style.display = "none";
    document.querySelector(".disLogin_icon.login_noClick").style.display =
      "inline";

    document.querySelector(".qrLogin_icon.login_click").style.display =
      "inline";
    document.querySelector(".qrLogin_icon.login_noClick").style.display =
      "none";

    // QR 탭만 효과주기
    idLogin.classList.remove("click_nav");
    disposableLogin.classList.remove("click_nav");
    qrLogin.classList.add("click_nav");

    disposableLogin.style = "border-right: none;";
    qrLogin.style = "border-radius: 6px 6px 0 0;";

    idLogin.style = "border-radius: 0;";
    disposableLogin.style = "border-radius: 0 0 6px 0;";
    qrLogin.style =
      "border-radius: 0 0 0 6px;  border-radius: 0 6px 0 0; border-left: none;";
  };

  // 각 탭 클릭 이벤트 등록
  idLogin.addEventListener("click", idChange);
  disposableLogin.addEventListener("click", disposableChange);
  qrLogin.addEventListener("click", qrChange);
});

// -------<< aside >> 알림창 안보이게 -------
const aside = document.querySelector("#aside");
const xIcon = document.querySelector("#xIcon");

asideDisplayNone = () => {
  document.querySelector("#aside").style.display = "none";
};

xIcon.addEventListener("click", asideDisplayNone);

// -------<< banner >> 배너 랜덤으로 보이게 -------
const banners = document.querySelectorAll(".banner a");
document.addEventListener("DOMContentLoaded", function() {
  const randomIndex = Math.floor(Math.random() * banners.length);
  
  banners.forEach((banner, index) => {
      if (index !== randomIndex) {
          banner.style.display = "none";
      }
  });
});
