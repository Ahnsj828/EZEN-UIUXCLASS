import { arrayLength, isEmpty } from "./arrayLength";

// 객체가 나왔다? => 객체 타입 정의 => interface
interface IPerson {
  name: string;
  age?: number;
}

const numArray: number[] = [1, 2, 3];
// 만약 타입이 숫자였다면 👆🏼얘밖에 못썻다
const strArray: string[] = ["Hello", "Javascript"];
const personArray = [{ name: "David" }, { name: "Ahn", age: 30 }];

console.log(
  arrayLength(numArray), // 3
  arrayLength(strArray), // 2
  arrayLength(personArray), // 2

  isEmpty([]), // true
  isEmpty([1]) // false
);
