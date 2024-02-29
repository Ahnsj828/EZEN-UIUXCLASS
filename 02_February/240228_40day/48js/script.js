// 객체 안에 있는 값을 반복해서 실행시키려고할 때
// for in 문

const bag = {
  type: "bagpack",
  color: "blue",
  size: 15,
};

for (key in bag) {
  // key 변수라서 앞에 let써도 된다 =>  let key
  console.log(`${key} : ${bag[key]}`);
}

// 객체를 사용하고자할 때
const book1 = {
  title: "자바스크립트",
  page: 648,
  buy: function () {
    console.log("이 책을 구입했습니다!");
  },
};

// ES6문법
// 객체의 key 혹은 value값을 추출해서 배열을 생성
const keys = Object.keys(book1);
// Object에서 앞에 대문자Q를 보고 class를 통해 만들어졌을 프로토타입이라고 유추해 볼수 있다
console.log(keys);

const values = Object.values(book1);
console.log(values);

const entries = Object.entries(book1);
console.log(entries);

[
  ["key", "value"],
  ["key", "value"],
  ["key", "value"],
];
