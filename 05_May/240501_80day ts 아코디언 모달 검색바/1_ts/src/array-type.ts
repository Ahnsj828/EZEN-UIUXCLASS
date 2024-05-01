// 15. 배열 / 튜플
// 배열의 타입정의
// 배열은 응용단계에서 많이 사용한다

// const numArray = [1, 2, 3]
// const strArray = ["Hello", "JS"]

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "JS"];

// 배열안에 객체 값이 들어가 있다면?
interface IPerson {
  name: string;
  // age: number;
  age?: number;
}

// const personArray = [{ name: "Ahn" }, { name: "David", age: "40" }];
const personArray: IPerson[] = [{ name: "Ahn" }, { name: "David", age: 40 }];
