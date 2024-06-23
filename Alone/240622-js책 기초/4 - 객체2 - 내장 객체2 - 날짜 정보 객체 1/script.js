// << 날짜 정보 객체 >>
//  날짜나 시간 관련 정보를 제공받고 싶을 때는 날짜 객체(Date Object)를 생성한다.
//  가령, 2002년 월드컵 개막일인 2002년 5월 31일이 무슨 요일인지에 대한 정보를 가져와야 할 때 사용 할 수 있다.
//  또한 날짜 정보객체를 이용하면 달력과 특정 기념일 D-day 계산기도 만들 수 있다. 
//  현재 날짜 정보를 제공하는 방법 / 특정 날짜 정보를 제공하는 방법 / D-day 계산기를 만드는 방법

// 현재 날짜의 정보를 제공하는 Date 객체는 다음과 같이 생성한다
// 참조 변수 = new Date)();
//   ex) const t = new Date();

// 2002년 월드컵의 날짜 정보를 제공할 때는 현재 날짜가 아니라 특정 날짜의 정보를 제공받아야 하므로 특정 날짜 정보 객체를 만들어야 한다. 특정 날짜의 Date 객체는 다음과 같이 생성한다
// 1) 참조변수 = new Date("연/월/일");
//   ex) const t = new Date("2002/5/31")
// 2) 참조변수 = new Date(연,월-1,일);
//   ex) const t = new Date(2002,4,31)

// Date 객체 생성 방법에 이어 생성된 객체의 다양한 메서드를 알아보기. 날짜 정보 객체는 날짜의 정보를 가져오는 메서드와 날짜를 수정하는 메서드로 나눌 수 있다.

// 

// < 날짜 관련 메서드 >
// * 날짜 정보를 가져올 때(GET)
// getFullYear() 연도 정보를 가져옴
// getMonth() 월 정보를 가져옴(현재 월 -1)
// getDate() 일 정보를 가져옴
// getDay() 요일 정보를 가져옴(일: 0 ~ 토: 6)
// getHours() 시 정보를 가져옴
// getMinutes() 분 정보를 가져옴
// getSeconds() 초 정보를 가져옴
// getMilliseconds() 밀리초 정보를 가져옴(1/1,000초 단위)
// getTime() 1970년 1월 1일부터 경과된 시간을 밀리초로 표기함

// * 날짜 정보를 수정할 때(SET)
// setFullYear() 연도 정보만 수정함
// setMonth() 월 정보만 수정함(월 -1)
// setDate() 일 정보만 수정함
// '요일'은 날짜를 바꾸면 자동으로 바뀌므로 setDay()는 없다
// setHours() 시 정보만 수정함
// setMinutes() 분 정보만 수정함
// setSeconds() 초 정보만 수정함
// setMilliseconds() 밀리초 정보만 수정함
// setTime() 1970년 1월 1일부터 경과된 시간을 밀리초로 수정함
// toLocaleString() 운영 시스템 표기 방식으로 문자형 데이터로 반환함 

// 

// 다음은 현재 날짜 객체와 특정 날짜 객체를 이요하여 2002년 월드컵 날짜와 관련된 정보를 출력하는 예제
let today = new Date();
let nowMonth = today.getMonth() + 1,
nowDate = today.getDate(),
nowDay = today.getDay(); // 0 = 일요일, 1 = 월요일 ... 6 = 토요일

let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
let dayName = days[nowDay];

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월: " + nowMonth, "<br/>");
document.write("현재 일: " + nowDate, "<br/>");
document.write("현재 요일: " + dayName, "<br/>");

const worldCup = new Date(2002, 4, 31);
let worldCupMonth = worldCup.getMonth() + 1 ,
worldCupDate = worldCup.getDate(),
worldCupDay = worldCup.getDay();

let worldCupDayName = days[worldCupDay]

document.write("<h1>월드컵 날짜 정보</h1>");
document.write("2002년 월드컵 월: " + worldCupMonth, "<br/>");
document.write("2002년 월드컵 일: " + worldCupDate, "<br/>")
document.write("2002년 월드컵 요일: " + worldCupDayName, "<br/>")

// document.write("<br/>")
// document.write("============================================")
// document.write("<br/>")