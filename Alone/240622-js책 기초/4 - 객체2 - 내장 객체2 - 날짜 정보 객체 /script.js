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

document.write("<br/>")
document.write("================ 첫번째 방법 ================")
document.write("<br/>")

const tv = new Object()
tv.color = "black"
tv.price = 300000

tv.info = function() {
  document.write("tv 색상: " + this.color,"<br/>");
  document.write("tv 가격: " + this.price,"<br/>");
}

const car = {
  color: "white",
  price: 5000000,
  info: function() {
    document.write("car 색상: " + this.color,"<br/>");
    document.write("car 가격: " + this.price,"<br/>");
  }
}

document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();
document.write("<h1>car 객체 메서드 호출</h1>");
car.info();

// document.write("<br/>")
// document.write("============================================")
// document.write("<br/>")

document.write("<br/>")
document.write("================ 두번째 방법 ================")
document.write("<br/>")

const tv2 = {
  color: "gray",
  price: 400000,
  info: function() {
    document.write("tv2 색상: " + this.color,"<br/>");
    document.write("tv2 가격: " + this.price,"<br/>");
  }
}

const car2 = {
  color: "red",
  price: 6000000,
  info: function() {
    document.write("car2 색상: " + this.color,"<br/>");
    document.write("car2 가격: " + this.price,"<br/>");
  }
}

document.write("<h1>tv2 객체 메서드 호출</h1>");
tv2.info();
document.write("<h1>car2 객체 메서드 호출</h1>");
car2.info();