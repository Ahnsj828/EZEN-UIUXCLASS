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
// 
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

// ------------------------------------------------------------------------

// < 남은 일 수 구하기 >
// 현재 날짜부터 특정 날짜까지 며칠이 남았는지 구하는 형식은 다음과 같다.
// 이때 남은 일 수는 밀리초(1/1,000초) 단위로 계산한다.
//   남은 일 수(밀리초) = 특정 날짜 객체 - 현재 날짜 객체

// 다음은 말리초로 계산한 시간 값을 나타낸거다.
//   1초  = 1,000(msc)
//   1분(60초)  = 1,000 * 60                  // 60,000(msc)
//   1시간(60분) = 1,000 * 60 * 60            // 3,600,000(msc)
//   1일(24시간) = 1,000 * 60 * 60 * 24       // 86,400,000(msc)

// 현재 날짜부터 연말까지 며칠이 남았는지 날짜 정보 객체를 이용하여 알아보는 예제
let today = new Date();
let nowYear = today.getFullYear();

let theDate = new Date(nowYear, 11, 31);
//   => 올해 연말에 대한 날짜 정보 객체를 생성한다
let diffDate = theDate.getTime() - today.getTime();
//   => 남은 날 = 특정 날짜 - 현재 날짜(밀리초 단위)

let result = Math.ceil(diffDate / (60 * 1000 *60 * 24));
document.write("연말 D-day: " + result + "일 남았습니다.")

// 지정한 날짜에서 현재 날짜를 빼면 지금부터 연말까지 남은 시간을 구할 수 있다.(밀리초 단위)
// 계산한 값을 일 단위로 계산한 다음 오늘 날짜까지 포함시키기 위해 Math.ceil() 메서드를 사용하여 반올림 한다.
document.write("<br/>")

document.write("<br/>")
document.write("============내가 해보기============")
document.write("<br/>")

document.write("<br/>")

let today2 = new Date();
let nowYear2 = today2.getFullYear();

let theDate2 = new Date(nowYear2, 11, 31);

let diffDate2 = theDate2.getTime() - today2.getTime();

let result2 = Math.ceil(diffDate2 / (1000 * 60 * 60 * 24));
document.write("연말 D-day: " + result2 + "일 남았습니다.")

// document.write("<br/>")
// document.write("============================================")
// document.write("<br/>")