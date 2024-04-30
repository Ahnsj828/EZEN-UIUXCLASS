interface INameable {
  // interface 보면 => 아 뭔가 객체 타입을 정의하려고 하는구나
  name: string;
}

// const getName = (o: INameable) => {
//   // o:INameable => 아 매개변수로 객체가 오는구나
//   return o.name;
// };

// const n = getName(undefined);
// console.log(n);

// 이럴때 타입 가드 사용하는거다 => 가드 => 오류를 가드하자 => 방어하자
// 👇🏼
// < 타입가드 >
//  => 리액트를 사용할 때, useState를 활용해서 state의 초기값이 아직 정해지지 않은 상태에서 최초 랜더링 될 때, undefined 타입으로 결정될 때가 분명 반드시 일을 것이다.
// 유니온 타입 => Union Type (Union=더하기) => 합집합
const getName = (o: INameable | undefined) => {
  // 객체(INameable)가 들어 올수도 있고 undefined가 들어 올 수도 있다
  return o !== undefined ? o.name : "unknown name";
};

const n = getName(undefined);
console.log(n);
console.log(getName({ name: "Jack" }));
