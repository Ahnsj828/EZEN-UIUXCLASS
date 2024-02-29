// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };
// // 만약 책이 여러권인데 book1을 여러개 복수해서 값을 다 변경하는건 불필요하다

// 커스터미이징 된 객체를 생성!!
// 생성자 함수! => 다른 일반적인 함수와는 기능 상이하다
// 함수이름 첫글자 => 대문자 입력 하는게 일반적이다
// 생성자 함수 = 붕어빵 틀
// 만들어질 객체 = 붕어빵

// < 생성자 함수로 만드는방법 >
function Book(title, pages, done = false) {
  // 기본값으로 false다
  this.title = title;
  // this는 Book을 의미
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    //아무것도 할당햊주지 않으면 언디파인드 아니면 눌이 뜬다 / "" 그래서 빈 문자열을 넣었다
    this.done === false ? (str = "읽는중") : (str = "완독");
    // 삼항 조건
  };
}
// => book이라는 프로토타입을 만들었다

const book1 = new Book("자바스크립트", 648, false);
// 자바스크립트 = title / 648 = pages / false = (done=false)
console.log(book1);
// 이제 무제한으로 객체를 찍어낼 수 있다
const book2 = new Book("파이썬", 360, true);
console.log(book2);
//
//
//
//
//
// ================================================================
// class
// 2015년 이전에는 없었다 / java나 c언어에만 있었다
// class를 활용해서 객체를 만들 수 있다

// < class로 만드는방법 >
class Book2 {
  // 클래스는 외관상으로 보면 객체랑 유사하게생겼다
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  }
}
const book4 = new Book2("html5", 380, true);
console.log(book4);
cl;
