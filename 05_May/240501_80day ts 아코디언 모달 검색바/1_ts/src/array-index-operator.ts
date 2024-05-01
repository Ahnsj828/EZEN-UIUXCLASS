// 배열 반복문 타입정리
// const numbers = [1, 2, 3, 4, 5]
const numbers: number[] = [1, 2, 3, 4, 5];
// 배열 => 반복문
for (let i = 0; i < numbers.length; i++) {
  // const item = numbers[i];
  const item: number = numbers[i];
  console.log(item); // 1 2 3 4 5
}

// const array = [1, 2, 3, 4, 5]
const array: number[] = [1, 2, 3, 4, 5];
const [f0, s, t, f1, g] = array;
console.log(f0, s, t, f1, g);

// -----------------------------------------------------

// forin문 - 객체 key값을 가져와서 뭔가를 할 때 사용한다
interface testObj {
  first: string;
  second: string;
  third: string;
}

const names: testObj = {
  first: "date",
  second: "sungjin",
  third: "Ahn",
};

for (let i in names) {
  console.log(i);
}
