// 데이터 정리하는 법
// 컴퓨터과학에 있어서 데이터 구조에 대한 부분은 매우 큰 부분이다.
// 데이터를 어떻게 하면 가능한 최선의 방법으로 정리할 수 있을까?

// array(배열) 없이 일주일의 요일들을 만든다면?
const mon = "mon"; // => string
const tue = "tue"; // => string
const wed = "wed"; // => string
const thu = "thu"; // => string
const fri = "fri"; // => string
const sat = "sat"; // => string
const sun = "sun"; // => string

const daysOfWeek1 = mon + tue + wed + thu + fri + sat + sun; // => string들이 합쳐진거
// => 아주 긴 variable(변수)을 가지게 됐다
console.log(daysOfWeek1); // montuewedthufrisatsun => 매우 길다
// => 만약 여기서 첫번째 요일을 넘겨줘라고 해도 이런 상태에서는 첫번째 요일에 접근할 수 없다
// => 무언가를 나열하기 위한 더 좋은 방법이 필요하다
// 데이터 타입들을 그룹으로 묶기 위한 더 좋은 방법이 있어야 한다

//
// 👇🏼 무언가를 나열하기 위해서 더 좋은 것이 필요하다 => 그게 array(배열)다--------------
//
// const daysOfWeek1 = mon + tue + wed + thu + fri + sat + sun;
// // +를 ,로 바꿔서
// const daysOfWeek1 = mon , tue , wed , thu , fri , sat , sun;
// // 이 모든 variable(변수)을 그룹화시킨다
// const daysOfWeek1 = [mon , tue , wed , thu , fri , sat , sun];

//
//
// 👇🏼 string대신에, 이제 array가 됐다---------------------------------------------
const daysOfWeek2 = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonesense = [1, 2, "hello", false, null, true, undefined, "jin"];
// => nonsense라는 array다
console.log(nonesense);
//  (8) [1, 2, 'hello', false, null, true, undefined, 'jin']
// 👇🏼 펼쳐보면 각각의 항목을 따로 볼 수 있다
// 0: 1                     => 숫자를 넣을수 있고  / daysOfWeek2처럼 variable(변수)를 넣을수 있다
// 1: 2
// 2: "hello"               => string(문자열) 넣을수 있고
// 3: false                 => boolean(논리적인 데이터 유형) 넣을수 있고
// 4: null                 => 어떠한 값도 가지지 않는 데이터(일부러 비워 둔 값)유형도 넣을수 있고
// 5: true                 => boolean(논리적인 데이터 유형) 넣을수 있고
// 6: undefined            => 미정의 값(아직 할당하지 않은 값) 넣을수 있고
// 7:"jin"                 => string(문자열) 넣을수 있다
// length: 8              => 총 길이 8 / 8개로 이뤄진 배열
// => 데이터로 이뤄진 리스트를 만들었다

//
//
// 👇🏼 array(배열)규칙 ---------------------------------------------
// 1. 시작과 끝에 대괄호 []를 사용해야 한다
// 2. array 안에 각각의 항목은 쉼표로 분리되어야 한다
// 그러고 나선 뭐든 넣어도 된다 / 숫자, string, boolean, null, undefined 등등

// Get Item from Array = 아이템에서 array받아오기 / array안에서 항목을 받아오는 방법
console.log(daysOfWeek2[4]); // fri
console.log(daysOfWeek2); // (6) ["mon", "tue", "wed", "thu", "fri", "sat"]

// Add one more day to the array = array 안에  요일 더 추가하기 / array에 하나 더 추가하는 방법
daysOfWeek2.push();
// 항목하나를 array안에 추가해줘 => push

// 👇🏼
// console = daysOfWeek
//  . = .
// log = push
// ()안에 무언가를 넣는다
// console.log(daysOfWeek[4]); 에서는 원하는거(daysOfWeek[4])를 ()안에 넣었다
// daysOfWeek.push();에서도 원하는거(일요일)를 ()안에 넣는다
// 👇🏼
daysOfWeek2.push("sun");
console.log(daysOfWeek2); // (7) ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

//
//
//

// Array(배열)의 목적 => 하나의 variable(변수) 안에 데이터의 list를 가지는 것이다
const apple = "apple";
const potato = "potato";
// 👇🏼
const tobuy = ["apple", "potato", "tomato"];
console.log(tobuy); // (3) ['apple', 'potato', 'tomato']
tobuy.push("kimbab");
console.log(tobuy); // (4) ['apple', 'potato', 'tomato', 'kimbab']
console.log(tobuy[0]); // apple
console.log(tobuy[3]); // kimbab
console.log(tobuy[10]); // undefined => 정의되지 않았다
// => tobuy에 10숫자 인덱스에는 값이 없다는 거다
