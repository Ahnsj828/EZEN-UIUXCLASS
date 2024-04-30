// 타입 주석을 달았다 라고 표현한다
// let n = 1;
// let n: number = 1;
// // let b = true;
// let b: boolean = true;
// // let s = "hello"
// let s: string = "hello";
// // let o = {}
// let o: object = {};

// 타입 불일치 발생!!하면 즉각 경고!!가 뜬다
// n = "a";
// b = 1;
// s = false;

// ---------------------------------------------------------------------

// 실제 실무에서는 타입 주석을 특별한 케이스가 아니면 잘 사용 안한다
// => 실제로 타입스크립트는 아주 스마트하다 => 타입스크립트는 타입 추론한다

// let m = 1;
// let p = "Hello";
// let q = false;
// let obj = {};
// 타입을 지정 안해도 알아서 추론을 한다 / 마우스 올리면 타입을 정의한다
// m = "2"; // m은 위에 숫자형으로 정의 했는데 문자열로 정의하니까 오류가 뜬다

// ---------------------------------------------------------------------
// // any사용하는 경우
// // let any = 0
// // any = "10"
// // 👇🏼
// let any: any = 0;
// any = "10"; // any 붙여서 에러가 안뜬다
// any = true; // any 붙여서 에러가 안뜬다
// any = {}; // any 붙여서 에러가 안뜬다

// ---------------------------------------------------------------------

// // let unTest = undefined;
// let unTest: undefined = undefined;
// // unTest = 1; // 값을 지정안하다가 나중에 값이 생겨서 지정을 해줘도 안먹힌다

// ---------------------------------------------------------------------

// let any: any = 0;
// any = "10";
// any = true;
// any = {};
// any = undefined;

// let unTest: undefined = undefined;

// let numTest = 10;

// ---------------------------------------------------------------------

// // 실무에서는 objec 타입을 거의 안 쓴다!!! => 이유: 있으나 마나해서
// let o: object = {
//   name: "Ahn",
//   age: 20,
// };
// // => o에는 object만 들어 갈 수 있다

// o = {
//   name: 7,
//   age: 2,
// };
// // name에 문자 주기로 했는데 숫자를 주고 age에 숫자를 주기로 햇는데 다른 숫자를 줬는데도 오류가 안뜬다 => 객체

// ---------------------------------------------------------------------
// // interface는 interface라는 키워드와 이름을 정해줘야한다 / 대문자로 해야한다
// // interface 진짜 많이 쓴다
// interface IPerson {
//   name: string;
//   age: number;
// }

// // let good = {
// //   name: "Ahn",
// //   age: 10,
// // };

// // 👇🏼
// let good: IPerson = {
//   name: "Ahn",
//   age: 10,
// };

// // 👇🏼 type을 다르게 주면 오류가 난다!!
// // good = {
// //   name: 7,
// //   // 문자가 와야되는데 숫자로 해서 오류가 난다
// // };

// // 👇🏼 age라는 key값 빼먹어도 오류가 난다
// // let bad: IPerson = {
// //   name: "sungjin",
// // };

// ---------------------------------------------------------------------

interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
}
// etc?: boolean; 이거는 있으면 값주고 없으면 주지마라
// (property) IPerson2.etc?: boolean | undefined  => boolean이거나 undefined이거나
// IPerson2는 interface 이름이다

let good1: IPerson2 = { name: "Paris", age: 20 };
// etc?: boolean; 안줬는데도 오류가 안 뜬다
let good2: IPerson2 = { name: "Paris", age: 20, etc: true };

// let ai = {
//   name: "robot",
//   age: 20,
// };

// 👇🏼 익명 interface /  다이렉트로 주면된다
// 익명 interface => 고차함수 할때 많이 사용된다
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = {
  name: "robot",
  age: 20,
};

// const printMe = (me) => {
//   console.log();
// };
// printMe(ai);
// 👇🏼 매개변수 me도 객체 타입으로줘야한다
const printMe = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age} `
    // 이런식으로 삼항조건연산자로 줄 수 있다
  );
};
printMe(ai);
// 터미널에 npm run dev 하면 => robot 20 이 나온다
