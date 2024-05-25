// -----------------<< em >> 랜덤 숫자 -------------------
document.addEventListener("DOMContentLoaded", function() {
  const randomNumElement = document.querySelector(".randomNum");
  const randomNum = Math.floor(Math.random() * 100) + 1; // 1부터 100 사이의 랜덤 숫자 생성

  randomNumElement.textContent = randomNum; // 랜덤 숫자를 요소에 넣음
});

// ---------<< 카운트 다운 >> 화면 변경 & 카운트다운 재시작 ------
document.addEventListener("DOMContentLoaded", function() {
  const titleNumElement = document.querySelector(".titleNum");
  let minutes = 3;
  let seconds = 0;
  let intervalId;

  // 카운트다운 함수 정의
  function countdown() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
          // qrLogin 섹션 숨기고 qrError 섹션 보이기
        document.querySelector(".qrLogin").style.display = "none";
        document.querySelector(".qrError").style.display = "flex";
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

      // 시간을 화면에 표시
    titleNumElement.textContent = `${minutes}분 ${seconds.toString().padStart(2, '0')}초`;
  }

  // 페이지 로드시 초기화
  countdown();

  // 1초마다 카운트다운 함수 호출
  intervalId = setInterval(countdown, 1000);

  // "재시도" 링크 클릭 시 처리
  document.querySelector(".qrError a").addEventListener("click", function(event) {
      event.preventDefault();

      // qrLogin 섹션 보이고 qrError 섹션 숨기기
      document.querySelector(".qrLogin").style.display = "flex";
      document.querySelector(".qrError").style.display = "none";

      // 시간 재설정 및 다시 카운트다운 시작
      minutes = 3;
      seconds = 0;
      countdown();
      intervalId = setInterval(countdown, 1000);
  });
});
