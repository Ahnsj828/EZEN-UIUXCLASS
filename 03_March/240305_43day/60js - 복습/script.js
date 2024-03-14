// // 함수, 매개변수 및 인자(*인수)값 작동 원리
// const hello = (name, message = "안녕하세요") => {
//   // hello라는 변수명
//   // 화살표 함수로 정의
//   console.log(`${name}님, ${message}`);
//   // const hello = (name, message = "안녕하세요") default로 안녕하세요 설정해준거다
// };

// hello("홍길동", "반갑습니다"); // 홍길동님, 반갑습니다
// //홍길동,반갑습니다으로  인자값으로 준것
// hello("영심이"); // 영심이님, undefined  // 영심이님, 안녕하세요
// // 어떤값을 받기로 약속했는데 정상적으로 받지 못했을때

// //
// //---------------------------------------------------
// //

// // 함수, 나머지 매개변수
// const addNum = (...numbers) => {
//   //...number 전개연산자 보다는 나머지 매개변수라고 표현을한다
//   // 값이 몇개가 들어오던지 처리가 가능하다
//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//     // 0+1 , 0+2 ... 0+5
//   }
//   return sum;
// };

// addNum(1, 2);
// // addNum() 함수를 호출
// console.log(addNum(1, 2)); // 3
// addNum(1, 2, 3, 4, 5); // 15
// console.log(addNum(1, 2, 3, 4, 5));

// //
// //---------------------------------------------------
// //

// // 서로 다른 2개의 배열을 합치고자 할 때
// const animals = ["bird", "cat"];
// const fruits = ["apple", "banana", "cherry"];

// animals.concat(fruits);
// // concat 이라는 매서드 함수
// console.log(animals.concat(fruits)); // (5) ['bird', 'cat', 'apple', 'banana', 'cherry']

// const result = [animals, fruits];
// console.log(result);
// // 중첩 형식의 배열로 들어갔다 / 하나의 배열로 들어간거가 아니다
// //(5) ['bird', 'cat', 'apple', 'banana', 'cherry']
// // (2) [Array(2), Array(3)]

// const result2 = [...animals, ...fruits];
// console.log(result2); // (5) ['bird', 'cat', 'apple', 'banana', 'cherry']
// // 전개연산자 형태

// const fruits01 = ["apple", "banana", "cherry"];
// const fruits02 = fruits01;
// console.log(fruits01); // (3) ['apple', 'banana', 'cherry']
// console.log(fruits02); // (3) ['apple', 'banana', 'cherry']

// // fruits01[0] = "grape";
// // console.log(fruits01); // (3) ['grape', 'banana', 'cherry']
// // console.log(fruits02); // (3) ['grape', 'banana', 'cherry']

// const fruits03 = [...fruits01];
// // 전개연산자 상태로 복사하면 원본은 변경되지 않느다
// fruits01[0] = "grape";
// console.log(fruits01); // (3) ['grape', 'banana', 'cherry']
// console.log(fruits02); // (3) ['grape', 'banana', 'cherry']

// //
// //---------------------------------------------------
// //

// // < 객체안에 신규 key & value를 생성하는 방법 >
// // 1.온점표기법
// const book = {
//   title: "javascript",
//   pages: 500,
// };
// // 객체 안에 값을 추가하고싶을때
// book.published = "2024-03";
// // published라는 키 안에
// console.log(book); // {title: 'javascript', pages: 500, published: '2024-03'}

// // 대괄호 표기법
// book["author"] = "David";
// console.log(book); // {title: 'javascript', pages: 500, published: '2024-03', author: 'David'}

// //
// //
// // < 객체안에 프로퍼티 이름을 함수로 생성하는 방법 >
// const fn = () => {
//   return "result";
//   // result 라는 문자열을 출력되게할거다
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fn()]: "함수 키",
//   // [fn(result)]: "함수 키",
//   // []: "함수 키" / 대괄호 형식으로

//   // [add(10, 20)]: "계산식 키", // {30: '계산식 키', result: '함수 키'}
//   [`${add(10, 20)} key`]: "계산식 키", // {result: '함수 키', 30 key: '계산식 키'} / 문자열로 바꾼거다
//   // 대괄호표기법(*문자열 형태로 값을 찾아온다)
// };
// console.log(obj); // {result: '함수 키'}

//
//---------------------------------------------------
//

// // Symbol() : 유일무이한 값을 생성
// // Symbol() : 외부에서 특정 객체의 키 값을 찾아오지 못하도록 하기 위한 목적
// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2); // false
// // id1과 id2가 같니? / false 아니 달라
// // 우리눈에는 같아보이지만 컴퓨터한테는 다르다

// const id = Symbol("id");
// // console.log(id); // Symbol(id)
// const tel = Symbol("telnumber");

// const member = {
//   name: "Daved",
//   age: 20,
//   fnc: function () {
//     console.log("test");
//   },
//   [id]: 1235,
//   [tel]: function () {
//     alert(prompt("전화번호 : "));
//   },
// };
// console.group(member); // {name: 'Daved', age: 20, Symbol(id): 1235}
// // member.fnc();
// // member[tel]();

// for (let item in member) {
//   console.log(`${item} : ${member[item]}`);
// }

//
//
//

// 전역 요소로 심볼 생성 => 찾아오고 싶을 때
// Symbol은 유일무이한 값을 생성 하는데 유일하게 복제할때
const tel = Symbol.for("tel");
const phone = Symbol.for("tel");

console.log(tel === phone); //  true

console.log(Symbol.keyFor(phone)); //  tel
