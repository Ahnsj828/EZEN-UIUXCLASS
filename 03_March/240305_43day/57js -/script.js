// 배열에 사용할 수 있는 매서드
// concat() : 두 개 이상의 배열을 추가해서 하나의 배열로 만들고자 할 때

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBuger = vegitable.concat(meat); // (4) ['양상추', '토마토', '피클', '불고기']
// console.log(meatBuger);

// const meatBuger = vegitable.concat(meat, "빵"); // (5) ['양상추', '토마토', '피클', '불고기', '빵']
// console.log(meatBuger);

// const meatBuger = meat.concat(vegitable, "빵"); // (5) ['불고기', '양상추', '토마토', '피클', '빵']
// console.log(meatBuger);

//
//

// const vegitable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];
// const cheese = ["모짜렐라", "슈레드"];

// // const cheeseBurger = [vegitable, cheese];
// // // (2) [Array(3), Array(2)]
// // // 0 : (3) ['양상추', '토마토', '피클']
// // // 1 : (2) ['모짜렐라', '슈레드']
// // // length : 2
// // // [[Prototype]] : Array(0)
// // console.log(cheeseBurger);

// const cheeseBurger = [...vegitable, ...cheese]; // (5) ['양상추', '토마토', '피클', '모짜렐라', '슈레드']
// console.log(cheeseBurger);

//
//
// // << 배열 정렬 >>
// const numbers = [6, 9, 3, 21, 18];
// numbers.reverse();
// console.log(numbers); // (5) [18, 21, 3, 9, 6]

// const values = [5, 20, 3, 11, 4, 15];
// values.sort();
// console.log(values); // (6) [11, 15, 20, 3, 4, 5]

// //  sort함수는 기본 default값 => 작은 숫자를 좌측정렬 하려는 속성이 있다
// values.sort((a, b) => {
//   // sort함수 안에 콜백함수 썻다 / a와 b라는 매개변수
//   if (a > b) return 1; // 먼저나오는 값이 뒤에나오는 값보다 크다면 1을 반환할거다
//   if (a < b) return -1; // 먼저나오는 값이 뒤에나오는 값보다 작다면 -1을 반환할거다
//   if (a === b) return 0; // 먼저나오는 값과 뒤에나오는 값이 같다면 0을 반환할거다
// });
// // 작은 숫자에서 => 큰 숫자로 가는 : 오름차순

// //  => 밑에로 축약할 수 있다
// // sort 오름차순으로 정렬
// values.sort((a, b) => {
//   return a - b;
// });

// // sort 내림차순으로 정렬
// values.sort((a, b) => {
//   return b - a;
// });

// console.log(values);

//
//
//

// << 배열안에 아이템을 추가 및 삭제하는 매서드 >>
// const animals = ["lion", "bear", "bird"];
// // ToDoList할때 썼었다
// console.log(animals); // (3) ['lion', 'bear', 'bird']

// animals.pop();
// // 제거 (기존 배열거에 제거하고 싶을때)  // (2) ['lion', 'bear']
// console.log(animals);

// animals.push("tiger"); // (3) ['lion', 'bear', 'tiger']
// // 추가 (기존 배열거에 추가하고 싶을때)
// // ToDoList할때 썼었다
// console.log(animals);

//
//

// const fruits = ["apple", "pear", "banana"];
// console.log(fruits); // (3) ['apple', 'pear', 'banana']

// fruits.shift();
// console.log(fruits); // (2) ['pear', 'banana']

// fruits.unshift("cherry");
// console.log(fruits); // (3) ['cherry', 'pear', 'banana']
// // 앞에 값을 추가하고자 할때

// split(구분자) : 문자열을 배열로 바꿔주는거
// slice(인덱스) : 문자열 내 특정 인덱스 값부터 문자열

// splice();
// const subjects = ["html", "css", "javascript", "react", "typescript"];
// // subjects.splice(2);
// // console.log(subjects); // (2) ['html', 'css']  /  2번까지만 / 그 이후부터 잘라내기한거다

// const subjects01 = subjects.splice(2, 4);
// console.log(subjects01); // (3) ['javascript', 'react', 'typescript']

// subjects.splice(2, 4, "vue", "node");
// console.log(subjects); // (4) ['html', 'css', 'vue', 'node']
// //
// //
// //  slice()
// const fruits = ["apple", "pear", "banana", "orange", "fineapple"];
// console.log(fruits.slice(1, 3)); // (2) ['pear', 'banana']
// console.log(fruits); // (5) ['apple', 'pear', 'banana', 'orange', 'fineapple']

// splice함수 && slice함수 => 매개변수를 1개만 받았을 경우, 해당 매개변수의 인덱스 값부터 끝까지의 값을 추출해온다! 공통점

// splice함수 : 원본 배열 데이터에도 영향을 미친다
// slice함수 : 원본 배열 데이터에는 영향을 미치지 않는다
//
//
//

// Map() / reduce()
// Map() : 원본 배열을 그대로 둔 상태에서 특정 연산 작업을 한 결과값을 새로운 배열로 만들고 싶을 때 사용!
// => 반복문을 쓸때 많이 쓴다
// forEach문이나 for문은 원본데이터 원래 있던 배열의 값이 변경된다 / 원본데이터와 분리하고싶을 때 사용한다
// 무진장 많이쓴다

// const numbers = [1, 2, 3, 4, 5];
// // const newNumbers = numbers.map((number) => {
// //   return number * 2;
// // });
// // console.log(newNumbers); // (5) [2, 4, 6, 8, 10]
// // console.log(numbers); // (5) [1, 2, 3, 4, 5]

// // const newNumbers02 = numbers.map((number, index) => {
// //   return index + number * 3;
// // });
// // console.log(newNumbers02); //(5) [3, 7, 11, 15, 19]

// const newNumbers02 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers02); //(5) [3, 7, 11, 15, 19]

// 실행문 && 표현식문
// JS 다중패러다임 언어(*)

// 에뛰드 - 서버사이드 랜더링
//          - 필터 => 신상품순, 저가순...

// const scores = [90, 35, 64, 88, 45, 92];
// const hightScores = scores.filter((score) => {
//   return score >= 85;
// });
// console.log(hightScores); // (3) [90, 88, 92]

const scores = [90, 35, 64, 88, 45, 92];
const hightScores2 = scores.filter((score, index) => {
  if (score >= 85) {
    console.log(`index : ${index}, score : ${score}`);
  }
  return score;
});

// reduce : 누산기 = 누적 계산기

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((total, current) => {
//   return total + current;
// }, 0);
// console.log(result); // 15

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((total, current) => {
  return total + current;
}, 0);
console.log(result); // 15
