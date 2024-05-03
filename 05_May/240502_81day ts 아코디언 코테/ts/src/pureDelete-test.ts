// filter 메서드 활용해서 순수함수
import { pureDelete } from "./pureDelete";

// 콜백함수로 사용되어야할 요소👇🏼
// const mixedArray = [
const mixedArray: object[] = [
  [],
  { name: "Ahn" },
  { name: "sungjin", age: 20 },
  ["Javascript"],
];
// 객체도들어가고 배열도 들어갔다

// const objectOnly = pureDelete(mixedArray, (value) => value.isArray(value) )
// 아닌것만 찾았는데 그게 객체이길 원한다
// isArray() => 배열이야 아니야?

const objectOnly: object[] = pureDelete(mixedArray, (value) =>
  Array.isArray(value)
);
// false인 경우에만 찾아온다 =>  { name: "Ahn" }, { name: "sungjin", age: 20 },만

console.log(mixedArray, objectOnly);
// [ [], { name: 'Ahn' }, { name: 'sungjin', age: 20 }, [ 'Javascript' ] ] [ { name: 'Ahn' }, { name: 'sungjin', age: 20 } ]
