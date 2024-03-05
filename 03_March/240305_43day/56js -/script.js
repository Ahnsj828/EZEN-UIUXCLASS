const season = [];
// 배열의 형태는 [로 시작해서 ]로 끝난다
// 자바스크립트는 튜플이라는 개념은 없다 / 별도로 존재하지 않는다
season[0] = "spring";
season[1] = "summer";
//season[0] => season이라는 객체는 배열화 되어있다
console.log(season); // (2) ['spring', 'summer']

const fruits = new Array("사과", "복숭아", "포도");
// console.log(fruits); // (3) ['사과', '복숭아', '포도']
fruits[4] = "배";
console.log(fruits); // (5) ['사과', '복숭아', '포도', empty, '배']

console.log(fruits[3]); // undefined : 아직 정의 되지 않은 값
// undefined : 아직까지 정의가 되지 않은 값
// null : 유효하지 않은 상태 NaN(말도안되는 상황일때 / ex. true+1)

fruits[0] = "오렌지";
console.log(fruits); // (5) ['오렌지', '복숭아', '포도', empty, '배'] / 사과대신 오렌지로 바뀌었다
console.log(fruits.length); // 5 / length = 길이 /fruits 6글자 - 1

// 배열의 전체 아이템 개수 : length
// 배열의 인덱스는 반드시 0부터 시작
//  => 배열안에 가장 마지막 아이템의 인덱스 값 => Array.length - 1

// code를 작성해서 UI로 구현하고자하는 거의 대부분의 값들 => 복수!!
// 1개 이상의 이미지 혹은 동영상 들

// ex. 올리브영 페이지에 많은 상품들이 진열 됐다. 근데 매월 리뉴얼 된다면 다 수작업하면서 바꾸는게 아니다!

// 배열을 사용하는 정말 중요한 이유 중 하나!!! => 반복문!!
// 일반 for문 / for of문  / forEach문

const colors = ["red", "green", "blue", "white", "black"];
//colors 그래서 복수형태로 사용하는게 대반사다
// for (let i = 0; i < colors.length; i++) {
//   // colors.length 0부터 4만큼(5-1)
//   // console.log(colors[i]); // red / green / blue / white / black  => 하나의 값을 반복 순회해서 가져왔다
// }
// colors.forEach((color) => {
//   console.log(color); // red / green / blue / white / black
//   // 알아서 반복문으로 실행해서 가져온다
// });
// // for문이나 forEach이나 동일하게 나온다

// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);   // colors[0] : red / colors[1] : green / colors[2] : blue /colors[3] : white /colors[4] : black
// });
// // forEach문쓰는 가장 큰 이유
// // ex. 에뛰드사이트에서 제품 페이지에 a제품과 a제품 클릭하면 나오는 a제품 상세페이지가 있다
// // 상품명이나 가격이 변경되면 이중수정해야된다
// // a제품 페이지에 값을 js을 활용해서 그 값을 가져오게 할 수있으면 원본값을 가져올 수 있으면 수정가능하다

colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}] : ${color}`);
  //forEach문은 매개변수를 세개까지 가져올수 있다
});
