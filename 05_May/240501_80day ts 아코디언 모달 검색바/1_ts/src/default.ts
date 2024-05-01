interface IPerson {
  // 객체 타입 정리
  name: string;
  age: number;
}
// 템프릿 리터럴 => 변수를 문자열로 찾아와서 값을 사용하고자 할 때 / 리터럴 = 문자
// 리터럴 타입 = 문자 타입
// 타입 정의 할때 주석 처리했다
// 숫자 : number, 문자 : string
// 추론 : "hello" => 타입스크립트에서는 타입정의한다 => 문자다!
// 변수안에 담기는 vallue값을 가지고 타입을 추론할 때, 리터럴 타입이 작동됐다 라고 얘기한다

// 타입구조도
// 가장 높은 타입 => 슈퍼타입 <-> 서브타입

// const makePerson = (name: string, age: number = 10): IPerson => {
//   //  age: number = 10 =>고정매개변수로 10을 줬다
//   // number => 슈퍼타입
//   // 10 => 서브타입
//   const person = {
//     name: name,
//     age: age,
//   };
//   return person;
// };
//  => 실행문 형식으로 썼다 / 값을 밖으로 빼야할때 => 실행문 써야한다
// console.log(makePerson("Ahn")); // { name: 'Ahn', age: 10 }  =>  고정 매개변수 10을 줘서
// console.log(makePerson("Ahn", 20)); // { name: 'Ahn', age: 20 }

// 👇🏼 < 실행문형식으로 >

// const makePerson = (name: string, age: number = 10): IPerson => {
//     // name: name,
//     // age: age,
// 		// 👇🏼 축약 가능하다
// 		name, age,
// };

// 👇🏼

const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});

console.log(makePerson("Ahn")); // { name: 'Ahn', age: 10 }  =>  고정 매개변수 10을 줘서
console.log(makePerson("Ahn", 20)); // { name: 'Ahn', age: 20 }
