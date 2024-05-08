// --------<< 알림메세지 >> 입력 않고 로그인시 알림메시지 --------
const error = document.querySelector("div")
const numberInput = document.querySelector("input")
const loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", function() {
  if (numberInput.value === "") {
    error.style.opacity = "1";
  }
});

// --------<< 알림메세지 >> 서버로 데이터 전송 못하게 --------

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); 
  });
});