// // var num;
// // num = 7;
// // // var 변수를 선언한다
// // // num 변수명
// // // num = 7 변수를 할단한다

// // document.write(num);

// // ====================

// // var num;
// // num = 7;
// // 선언과 동시에 할당한다
// // var num = 7;
// // document.write(num);
// // var 변수는 실무에서는 거의 사용하지 않는 키워드다

// // JS 사용가능한 변수 선언 키워들 3가지!!
// // =>  const let var(*2015년 이전에는 var밖에없었다)
// // var = variable = 변수 = 유연하다! = flexable 하다
// //  프로그래밍 언어 : 지나치게 유연하면 =>  리스크가 많다!
// //  엄격할 수록 리스크가 적다!!

// // var를 쓰는 영상 책은 보류해라 => 연식이 있다(2015년 이전)

// // 웹 & 앱 작업 : 혼자서 독립작업하는경우는 거의없다 || 여러사람이 협업한다
// // 공동협업 작업할때
// // ex) a사람이 (a사람이 num 선언 하고 할당 한거다)
// //     var num = 7;
// //     b사람이 (b사람이 num 재선언 하고 재할당 한거다)
// //     var num = 10;
// //     c사람이 (c사람이 num 재선언 하고 재할당 한거다)
// //     var num = 14;
// //     라고 입력하면 결과값은 var num = 14;로 나온다

// //     재선언 & 재할당

// //     const.log(num)
// //     재선언 & 재할당이 일체 불가하다
// // ex) a사람이
// //     const str = "hello World!"
// //     b사람이
// //     const str = "hello World!"
// //     다시 선언(재선언)할 수 없다고 뜬다! => 작동이 안되고 막는다
// //     c사람이
// //     str = "hllo today"
// //     다시 할당(재할당)할 수 없다고 뜬다! => 작동이 안되고 막는다

// //     const : 재선언 & 재할당 원천적으로 불가능한 변수를 선언하고자 할 때
// //      const를 권장한다
// //     let : 원칙적으로 재선언은 불가하지만, 재할당은 가능!!!
// //      다시 정해야하는 상황이라면 let으로
// //  => var 말고 const랑 let으로 쓰기!!!

// // -------------------------------------------

// // let str01 = "Life is good";
// // // str01이라는 변수를 설정
// // // Life is goo 문자열을 할당

// // // let str01 = "today is perfect"
// // // // 재선언한다
// // // // 다시 선언할 수 없다고 뜬다

// // str01 + "today is perfect";
// // // 할당은 수천번 해도된다

// // // const 안할때는 이렇게만

// // ---------------------------------------------

// // const str = "test";
// // console.log(str);

// // ---------------------------------------

// const data = 5;
// // 숫자형
// // 변수를 선언한다
// // data라는 변수에 5가 들어가있다
// const str = "hello";
// // 문자열
// const boolean = true;
// // 논리형

// // {/* < A 방법 > */}
// const title = "최재천의 곤충사회";
// const price = 16200;
// const delivery = "free"
// const author = "최재천"
// const publishinDate = "2024-02-10"
// // 이렇게 변수를 지정해주면 나중에 교보문고 사이트 서버를 관리하기 힘들어진다

// // {/* < B 방법 - 객체 방법> */}
// const newBook = {
//   title: "최재천의 곤충사회"
//   price: 16200
//   delivery: "free"
//   author: "최재천"
//   publishinDate: "2024-02-10"
// }
// // newBook(신간)이라는
// // {} 객체가 들어갈때
// // 객체 안에는 먼저 키(title)가 나온다
// //  매칭되는 벨류

// //  A방법말고 B방법처럼하는게 좋다

// // {/* < C 방법 - 배열 방법> */}
// const arr = [1, 2, 3, 4, 5]
// // 배열은 []로 되어있다
// // 객체와 넣는 방식이 다르다
// const newBook01 = ["최재천의 곤충사회", 16200, "free", "최재천", "2024-02-10"]

// ================================================================

// const result = prompt("당신의 나이를 입력하세요!");
// // result 라는 변수를 설정
// // => 사용자한테 값을 원하는 창이 나올거다
// console.log("당신은 10년뒤" + result + 10 + "세 입니다.");

// const result = prompt("당신의 나이를 입력하세요!");
// console.log(typeof result);
// // typeof 뒤에
// console.log("당신은 10년뒤" + result + 10 + "세 입니다.");

// const result = Number(prompt("당신의 나이를 입력하세요!"));
// // prompt앞에 Number붙여야한다
// console.log(typeof result);
// // typeof 뒤에
// console.log("당신은 10년뒤" + result + 10 + "세 입니다.");

// const num = "10";
// // "" 붙이는 순간 문자가된다!!!!
// console.log(typeof num);

// ------------------------------------

// const result = Number(prompt("당신의 나이를 입력하세요!"));
// console.log(typeof result);
// console.log("당신은 10년뒤" + result + 10 + "세 입니다.");
// // 문자랑 숫자가 통합되어있으면 문자가 된다
// // 문자 숫자 사이에 연산자가 없어야한다

// =>
// const result = Number(prompt("당신의 나이를 입력하세요!"));
// console.log(typeof result);
// const tenYear = result + 10;
// console.log(tenYear);

// ------------------------------------

// const result = Number(prompt("당신의 나이를 입력하세요!"));
// console.log(typeof result);
// const tenYear = result + 10;
// console.log("당신의 10년뒤 나이는" + tenYear + "세 입니다.");

// =>
// const result = Number(prompt("당신의 나이를 입력하세요!"));
// console.log(typeof result);
// const tenYear = result + 10;
// console.log(`당신의 10년뒤 나이는 ${tenYear}세 입니다.`);
// ` ` 백틱
// ${변수명}
// 템플릿리터럴 문법

// --------------------------------------
// 변수안에 논리형이 왜 중요한가
// const result = confirm("오늘도 점심 드실거죠?");
// console.log(result);

// // 조건문
// const result = confirm("오늘도 점심 드실거죠?");
// if (result === true) {
//   alert("맛있게드세요!");
// } else {
//   alert("혹시 무슨일 있으세요?");
// }

// const result = prompt("당신의 나이를 입력하세요!");
// console.log(result);


// -----------------------------------------------

// {/* < B 방법 - 객체 방법> */}
const newBook = {
  title: "최재천의 곤충사회"
  price: 16200
  delivery: "free"
  author: "최재천"
  publishinDate: "2024-02-10"
}
// 객체는key랑 value 둘다 있다
// 객체는 {key: value} => 프로퍼티(property)라고 부른다
console.log(newBook.title)
const bookTitle = newBook.title
document.write(book)
이렇게 한다