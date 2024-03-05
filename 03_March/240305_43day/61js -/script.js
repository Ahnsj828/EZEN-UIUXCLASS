// // React => 구조 분해 할당!

// const fruits = ["사과", "복숭아"];
// //  => 배열 => index값 length속성

// // const apple = fruits[0];
// // // fruits의 0번째 인덱스값
// // const peach = fruits[1];
// // console.log(apple, peach); // 사과 복숭아

// const [apple, peach] = fruits; // const [apple, peach] =  ["사과", "복숭아"] => const [apple, peach] = fruits;
// // ["사과", "복숭아"] 이 해당값을 할당하고자한다 / 할당하고자 하는 값이 배열이다 / 이 값을 바고자하는 애도 배열의 형태를 띄고있어야한다
// console.log(apple, peach); // 사과 복숭아

//
//
//

// const [teacher, ...students] = ["Park", "Kim", "Choi", "Lee"];
// console.log(teacher, students);
// // teacher <= park / students <= kim choi lee

//
//
//

// const member = {
//   name: "kim",
//   age: 25,
// };
// // const { name, age } = member;
// // console.log(name, age); //  kim 25

// // const { username, age } = member;
// // console.log(username, age); //  undefined 25
// // 객체의 구조분해할당 시, 반드시 유의사항!!
// // 구조분해할당 값을 전달받을 변수 이름 = 객체의 key명 동일!

// // => 이렇게 바꿔줄 수 있다
// const { name: userName, age } = member;
// // 변수명을 바꿔버린거다
// console.log(userName, age); //  kim 25

//
//
//

const student = {
  name: "안성진",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "Lee", "Park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2); // 85 'Lee'
