// // 크리스마스까지의 남은 시간을 계산하는 함수
// function getChristmasCountdown() {
//   // 현재 날짜 객체 생성
//   var now = new Date();
//   // 크리스마스의 년도를 현재의 년도로 설정
//   var christmas = new Date(now.getFullYear(), 11, 25);
//   // 만약 오늘이 크리스마스보다 이후라면 내년의 크리스마스를 설정
//   if (now.getMonth() === 11 && now.getDate() > 25) {
//     christmas.setFullYear(christmas.getFullYear() + 1);
//   }
//   // 크리스마스까지의 시간차를 밀리초로 계산
//   var timeDiff = christmas.getTime() - now.getTime();
//   // 시, 분, 초를 계산
//   var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//   // 결과를 문자열로 반환
//   return {
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// // 카운트다운을 업데이트하고 HTML 요소에 출력하는 함수
// function updateCountdown() {
//   var countdownElement = document.getElementById("countdown");
//   var countdown = getChristmasCountdown();
//   // HTML에 카운트다운 결과를 출력
//   countdownElement.innerHTML =
//     "Christmas Countdown: " +
//     countdown.days +
//     " days " +
//     countdown.hours +
//     " hours " +
//     countdown.minutes +
//     " minutes " +
//     countdown.seconds +
//     " seconds";
// }

// // 매 초마다 카운트다운을 업데이트
// setInterval(updateCountdown, 1000);

const clockTitle = document.querySelector(".js-clock");

function getTimeUntilChristmas() {
  const christmasDate = new Date(new Date().getFullYear(), 11, 24);
  const now = new Date();
  const timeDifference = christmasDate - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateClock() {
  const timeUntilChristmas = getTimeUntilChristmas();
  clockTitle.innerText = `${timeUntilChristmas.days}d ${timeUntilChristmas.hours}h ${timeUntilChristmas.minutes}m ${timeUntilChristmas.seconds}s`;
}

function init() {
  updateClock();
  setInterval(updateClock, 1000);
}

init();
