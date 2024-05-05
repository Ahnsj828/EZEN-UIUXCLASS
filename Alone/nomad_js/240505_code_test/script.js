// 실시간 시계
// 로컬 스토리지를 사용한 로그인
// 로컬 스토리지를 사용한 투두리스트
// 랜덤 배경 이미지
// 날씨와 위치 (geolocation)
// 여러분의 CSS 실력을 뽐내주세요💖

const todayD = document.querySelector("#todayD");
const todayT = document.querySelector("#todayT");

let today = new Date();

// < 현재 날짜 >----------------------------------
// let year = today.getFullYear(); // 년도
// let month = today.getMonth() + 1;  // 월 (0부터 시작하므로 1을 더해줍니다)
// let date = today.getDate();  // 날짜
// let day = today.getDay();  // 요일

// 요일을 문자열로 변환
const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
let dayString = daysOfWeek[today.getDay()];

// HTML에 출력
// todayD.innerHTML = `${year}년 ${month}월 ${date}일 ${dayString}요일`;
todayD.innerHTML = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${dayString}요일`;

// < 현재 시간 >-----------------------------------
const todayAP = document.querySelector("#todayAP")
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// AM 또는 PM 표시하기
let ampm = hours >= 12 ? 'PM' : 'AM';

// 12시간 단위로 표시하기
hours = hours % 12;
hours = hours ? hours : 12; // 0시인 경우 12로 변경

todayAP.innerHTML =`${ampm}`
todayT.innerHTML = `${hours}시 ${minutes}분 ${seconds}초`;

// =============================================