// // < Objects(객체) >
// // 만약 게임을 만든다고 하자
// // Object가 없다면
// const playerName = "nico";
// const PlayerPoints = 121212;
// const PlayerHandsome = false;
// const playerFat = "little bit";

// player.name;
// player.points;
// player.handsome;

// //  첫번째 보단 두번째가 더 낫다 / 이유 => fat, handsome, point, name 이라는 특성들이 한 개의 개체(entity),
// // 즉 player에 대해서 설명하고 있다는 걸 알기 때문이다
// // => 데이터를 가능한 최선으로 정리하는 방법

// // 👇🏼 array로
// const player = ["nico", 121212, false, "little bit"]; // => 좋아보이지 않다
// // => 이 경우에는 array가 적합하지 않다
// // 이유 => "nico", 121212, false, "little bit"이 무슨 의미인지 안알려주고 있어서

//
//
//
// 👇🏼 Object(객체)로 만들기
const player = {
  name: "nico", // => player.name
  points: 10, // => player.points
  fat: true, // => player.fat
};
// const player =                            => 1.앞부분은 variable(변수)이나 array(배열)를 만들때와 똑같다
// const player = {}                         => 2.뒤에 중괄호를 쓰는거다
// const player = {property(특성)}           => 3.뒤에 중괄호안에 property(특성)를 넣는거다
// const player = {name: "nico"}             => 4.중괄호안에는 =가 아니라 :를 쓴다
// const player = {name: "nico",}            => 5.한개의 property를 작성하고 난 뒤엔 ,(콤마)를 사용한다 => property가 하나 더 올수 있기 때문에
// "nico", 10, true                          => 6.데이터 타입에따라 다르게 쓴다 / string(문자열) number(숫자) boolean

console.log(player);
// {name: 'nico', points: 10, fat: true}
// fat: true
// name: "nico"
// points: 10
console.log(player.name); // nico
console.log(player.points); // 10
console.log(player.fat); // true

// => 이건 리스트가 아니다
// 리스트는 모든 값이 같은 의미를 갖는다
// 만약 한 주의 요일 리스트를 가진다면 그 리스트에 있는 모든 것이 한 주의 요일이라는 것을 안다
// 만약 내가 사야할 것에 대한 리스트를 가지고 있다면, 그 array에는 내가 사려는 물품을 넣을거란 걸 안다
// 하지만 위와 같은 object에선 그게 무엇인지 알 수 없는 property들도 있는 것이다

console.log(player.name); // nico
console.log(player["name"]); //nico
//    => 둘 다 같은 결과를 준다

//
//
//
// object를 업데이트 할 수도 있다
const player2 = {
  name: "Ahn", // => player.name
  points: 20, // => player.points
  fat: false, // => player.fat
};
console.log(player2); // {name: 'Ahn', points: 20, fat: false}
player2.fat = true;
console.log(player2); // {name: 'Ahn', points: 20, fat: true}

// constant(상수)인 const는 수정할 수 없는데 어떻게 된거지?
// 여기서는 const로 정의한 변수를 변경하는게 아니라 Object 안의 무언가를 수정하는 것 이다
// object는 아직도 동일하다 (player2)
// constant 안의 무언가를 업데이트 할 때는 아무 문제 없다

// 📌error는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생한다
console.log(player2); // {name: 'Ahn', points: 20, fat: false}
player2 = true;
// 처음에 정의한 constant(player2)는 object이고 여기서 정의한 constant(player2)는 boolean으로 바뀐다 => 에러가 생긴다
console.log(player2); // script.js:76 Uncaught TypeError: Assignment to constant variable.

// 하지만 constant 안의 무언가를 업데이트 할 때는 아무 문제 없다

//
//
//
// 💡그렇다면 object에 뭔가 추가하는것은 어떨까?
const player3 = {
  name: "jin",
  points: 17,
  fat: false,
};
console.log(player3); // {name: 'jin', points: 17, fat: false}
player3.lastName = "potato";
console.log(player3); // {name: 'jin', points: 17, fat: false, lastName: 'potato'}
// => 원하면 어떤 property든 만들 수 있다
