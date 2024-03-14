// // function Book() {
// //   // 어제 배운 생성자 함수 => 객체를 만들기 위함이다
// // }
// const Book = function (title, pages, done) {
//   // 생성자 함수를 익명함수 형태로 만든거다
//   this.title = title;
//   // this 인스턴스 객체를 의미
//   // this.키 = value
//   this.pages = pages;
//   this.done = done;
//   // this.finish = function () {
//   //   // finish 매서드 함수를 만들기 위한 키
//   //   this.done === false ? (str = "읽는 중") : (str = "완독");
//   //   return str;
//   //   //return 반환값
//   // };
// };
// //
// // =>
// Book.prototype.finish = function () {
//   this.done = false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };
// // this.done = false ? 참이라면 (str = "읽는 중") 아니라면 : (str = "완독");

// // 공장에서 무한대로 찍어낸다 <= 인스턴스 식품 / 하나의 틀안에서 만들어내는

// const book1 = new Book("자바스크립트", 648, false);
// // 인스턴스객체 /"자바스크립트", 648, false 인자값
// // console.log(book1);
// console.log(book1.finish);

// // // 생성자함수 => 프로토타입 => 인스턴스
// // 생성자함수 Object => 프로토타입 Book => 인스턴스 book1 순으로 상속해줬다
// // 할아버지               아빠               자손
// // Object => Book (prototype) => book1 (__proto__)
// // prototype 이 속성을 쓸 수 있고
// // (__proto__) 이 속성을 쓸 수 있고
// // 가장 기원이 되있는 Object 의 속성을 자손인 book1이 물려받았다
// //
// //
// --------------------------------------------------------------------
//
// function Book(title, price) {
//   this.title = title;
//   this.price = price;
// }
// // Book => 대문다다 => 성성자 함수를 만다려고한다

// Book.prototype.buy = function () {
//   console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
// };

// const book1 = new Book("ABCDE", 10000);
// // console.log(book1.buy());
// book1.buy();
// //
// //
// // 위에서 만든 생성자함수(Book) 와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?
// function Textbook(title, price, major) {
//   // title, price, major 매개변수
//   Book.call(this, title, price);
//   // 상속받고 싶은 생성자 함수를 그냥 가져오면된다 / 상속을받아오고싶은요소.call() => this라는 매개변수를 가져와야한다
//   // Book.call(this, title, price) => title, price라는 키값을 상속받아오겠다
//   this.major = major;
// }
// Textbook.prototype.buyTextbook = function () {
//   console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다!`);
// };

// Object.setPrototypeOf(Textbook.prototype, Book.prototype);
// // Object = 모든 객체의 탑
// // setPrototypeOf 상속의 연결고리라고 보면 된다 / Textbook.prototype와 Book.prototype의 연결고리
// // 얘를 사용하지 않으면 상속이 안된다
// // Object라는 객체의 키 setPrototypeOf 라는 함수를 사용해서
// // Textbook 상속 받고싶은애 , Book.prototype 상속을하려는애

// const book2 = new Textbook("타입스크립트", 5000, "컴퓨터공학");
// book2.buyTextbook();
// book2.buy();
// // Object.setPrototypeOf(Textbook.prototype, Book.prototype); 사용하지않으면 =>타입스크립트을(를) 5000원에 구매하였습니다! 가 안나온다
// //
// //
// --------------------------------------------------------------------
//
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
  }
}
const book1 = new BookC("자바스크립트", 15000);
book1.buy();

class TextbookC extends BookC {
  // 무언가를 확장하다 연장하다 => TextbookC 연장해라 BookC한테 => 상속해라
  constructor(title, price, major) {
    super(title, price);
    //super라는 함수를 쓰면 this 매개변수 쓰지않아도 된다 / 알아서 BookC지칭한다
    // call이라는 함수보다 더 간편하다
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
  }
}
const book2 = new TextbookC("AI인공지능", 50000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
