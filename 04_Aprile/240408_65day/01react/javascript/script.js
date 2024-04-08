//  React.js에서 자주 사용되는 Javascript 주요문법
// Javascript 비쥬얼베이직 스크립트라는 거를 사용했었다 (정보처리기능사 있으면 가산점)

// // 1. 객체 줄임 표기법
// const name = "david";
// // david는 name이라는 변수명에 들어가있다
// const age = 20;

// const person = {
//   //   //   name: "david",
//   //   name: name,
//   //   //   이렇게 표기할 수 있다.
//   //   //   앞 key 뒤 value
//   //   age: age,
//   // 👇🏼 이렇게 줄일 수 있다
//   name,
//   age,
// };
// console.log(person);

//
//
//

// // 2. 구조 분해 할당
// const person = {
//   name: "David",
//   age: 20,
//   //   변수명 안에 객체를 할당했다
// };

// // 구조분해할당을 안하고 값을 찾아와야할때 👇🏼
// const name = person.name;
// const age = person.age;
// console.log(name, age);

// // 구조분해할당을 하고 값을 찾아와야할때 👇🏼
// const { name, age } = person;
// // 객체의 형태로 값을 반환 해야한다
// console.log(name, age);

//
//
//

// // 3. 전개연산자 구문
// const arr = [1, 2, 3, 4];
// // arr는 배열이다

// // // 구조분해할당을하려면 👇🏼
// // // 구조분해할당을 하려면 arr이니까 배열의 형태로 가져와야한다 []
// // const [a, b] = arr;
// // // 0번 인덱스 값을 갖은 1,
// // // 1번 인덱스 값을 갖은 2
// // console.log(a, b); // 1  2  왼쪽부터 순차적으로 가져온다

// // 3과 4를 한번에 가져오고싶으면 👇🏼
// const [a, b, ...rest] = arr;
// console.log(a, b, rest);
// // 한번에 통으로 가져오고 싶을때

//
//
//

// // 4. 깊은복사 (feat.참조타입 자료)
// const person = {
//   name: "David",
//   age: 20,
//   // person이라는 식별자 안에 객체를 할당했다
// };

// const person2 = person;
// // 객체를 그냥 복사했다
// const person3 = { ...person };
// // 객체를 전개 연산자 구문으로 복사했다

// console.log(person2, person3); // 눈으로 보기에는 똑같아 보인다
// console.log(person == person2); // true
// console.log(person == person3); // false
// // person3는 원본데이터를 복제해서 사용한거다 / 깊은복사 방식으로

// // 예를들어 어떤 사이트에서 어떤 사람이 값을 변경해 놓으면 다음 사람이 그 사이트에 들어가면 원본 값이 아닌 어떤사람이 변경한 값으로 보게된다
// // 그래서 이럴때 깊은복사사용함으로서 원본의 데이터를 건들지 않은 상태에서 복제품으로 사용하는거다

// //
// //
// //

// // 5.삼항조건 연산자

// const coffee = null;

// console.log(coffee ? coffee.name : "there is no coffee");
// // 조건식 / 조건식 참인경우(true) / 조건식 거짓인경우(false)
// // there is no coffee / coffee 값이 없으니까 false 값을 반환했다

// //
// //
// //

// 6. 조건부 랜더링 => API에서 많이 사용한다!!
// const coffee = {
//   name: "americano",
//   price: 2000,
// };

// const coffee = null;

// if (coffee) {
//   console.log(coffee.name);
// } else {
//   console.log("there is no coffee");
// }

// //
// //
// //

// 7. 단락회로평가 => API에서 많이 사용한다!!
const coffee = {
  name: "americano",
  price: 2000,
};
// const result = coffee.name && coffee.price;
// // => 단락 회로 평가
// // 먼저 오는 항(coffee.name)이 참이여야 두번째항(coffee.price)이실행이 된다
// 👇🏼
const result = coffee?.price;
// coffee라는 객체가 존재한다면 coffee안에 price를 보여줘
console.log(result);
