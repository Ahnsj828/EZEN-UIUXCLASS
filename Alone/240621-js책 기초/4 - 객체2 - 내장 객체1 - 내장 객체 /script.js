// << 내장 객체 >>
//  내장 객체(Built-in Object)란 브라우저의 자바스크립트 엔진에 내장된 객체를 말하며, 필요한 경우 객체를 생성해서 사용할 수 있다.
//  내장 객체로는 문자(String), 날짜(Date), 배열(Array), 수학(Math), 정규 표현 객체(RegExp Object)등이 있다.

// < 내장 객체 생성하기 >
// 다음은 내장 객체를 생성하는 기본형이다. 객체를 생성할 때는 new라는 키워드와 생성함수를 사용한다.
//  참조변수(인스턴스 이름) = new 생성 함수()

// 다음 예제에서는 new 키워드와 기본 객체 생성 함수 Object()를 이용해 객체를 생성한다. 생성된 객체는 변수 tv가 참조하고 있으며, 이를 이용해 객체의 속성과 메서드를 생성한다. 
// 변수를 이용해 참조를 한다는 말은 앞으로 생성된 객체를 이용할 때 참조 변수를 사용하겠다는 의미다.

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

document.write("<br/>")
document.write("================ 세번째 방법 ================")
document.write("<br/>")

const tv3 = new Object()
tv3.color = "dark gray"
tv3.price = 500000

tv3.info = function() {
  document.write("tv3 색상: " + this.color,"<br/>");
  document.write("tv3 가격: " + this.price,"<br/>");
}

const car3 = new Object()
car3.color = "blue"
car3.price = 7000000

car3.info = function() {
  document.write("car3 색상: " + this.color,"<br/>");
  document.write("car3 가격: " + this.price,"<br/>");
}

document.write("<h1>tv3 객체 메서드 호출</h1>");
tv3.info();
document.write("<h1>car3 객체 메서드 호출</h1>");
car3.info();

document.write("<br/>")
document.write("================ 나혼자 ================")
document.write("<br/>")

const bag = new Object()
bag.color = "bagie"
bag.price = 100000

bag.info = function() {
  document.write("bag 색상: " + this.color, "<br/>")
  document.write("bag 가격: " + this.price, "<br/>")
}

const clothes = {
  color: "navy",
  price: 50000,
  info: function() {
    document.write("clothes 색상: " + this.color, "<br/>")
    document.write("clothes 가격: " + this.price, "<br/>")
  }
}

document.write("<h1>bag 객체 메서드 호출</h1>")
document.write("<h1>clothes 객체 메서드 호출</h1>")