// react에서 구조분해할당을 많이 쓸텐데 ts에서는 어떻게 하냐?

// ts에서 객체를 움직일것같다 => interface 사용해라
// 함수가 나왔다 => 타입별칭 사용해라
interface IPerson {
  name: string;
  age: number;
}

const printPerson = ({ name, age }: IPerson) => {
  console.log(`name: ${name}, age: ${age}`);
};

printPerson({ name: "Ahn", age: 20 });
