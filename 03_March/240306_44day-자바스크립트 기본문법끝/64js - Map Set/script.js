// MAP 객체 => 2015년에 ES6

// arr.map()

// 나온 이유!
// 1) JS 객체 => 일반객체 , 배열객체(얘도 일반객체에 포합되어있지만 분리해서 분류한다)

// 2) 일반객체
// 장점 : key와 value 값을 가지고 있는 한쌍의 프로퍼티
//   => 그만큼 데이터를 체계적으로 보관.관리.사용 가능하다
// 단점 : for...in => 객체 안에 있는 value값만을 찾아와서 직접적으로 반복문을 돌릴 수 있는 방법이 존재하지 않는다
// 단점2: 객체 안에 구성되어 있는 아이템들은 배열처럼 인덱스 번호를 할당받지 못한다

// 3) 배열객체
// 장점 : 배열안에 포함되어 있는 아이템들이 고유의 인덱스 값을 가지고 있으며, for문을 활용한 반복문으로 업무의 효율성 극대화
// 단점 : 객체처럼 key & value 형태로 구성된 체계적인 데이터 관리가 안된다(무엇을 지칭하는지 ..)

// Solution : 일반객체와 배열객체의 장점만 모아서 하나로 만들어주면 어떨까? => Map 객체
// (but, 실무에서 그렇게 많이 사용되지 않는다)

// key, value값으로 구성된 아이템을 가질 수 있다
// 각 아이템별 인덱스 값을 할당 => for의 반복문을 활용해서 언제든지 값을 추출할 수 있다는 장점이 있다

//
//
//

// // map 생성하는 방법1
// const bag = new Map();
// //bag이라는 객체는 map이라는 프로토타입을 받은 인스턴스를 받았다?
// bag.set("color", "red");
// // color 키값과 벨류값을 받았다
// console.log(bag);

// map 생성하는 방법2
// const myCup = new Map([
//   ["color", "white"],
//   ["material", "ceramic"],
//   ["capacity", "300ml"],
// ]);
// // console.log(myCup);

// // myCup.set("type", "mini");
// // console.log(myCup);

// myCup.set("type", "mini").set("purpose", "daily");

// console.log(myCup); // Map(5)
// console.log(myCup.size); // 5
// console.log(myCup.get("color")); // white
// console.log(myCup.has("color")); // true
// //myCup에 매개변수로 들어오는 color라는 키가 존재하면 true
// console.log(myCup.has("varialbel")); // false
// myCup.delete("type"); // Map(4) {'color' => 'white', 'material' => 'ceramic', 'capacity' => '300ml', 'purpose' => 'daily'}
// // 해당 키값만 삭제
// // myCup.clear(); // Map(0) {size: 0}
// // // 맵객체 안에 모든걸 지운다

// console.log(myCup);

// console.log(myCup.keys()); // MapIterator {'color', 'material', 'capacity', 'purpose'} / 이터레이터객체

// for (let key of myCup.keys()) {
//   console.log(key); // color // material // capacity // purpose
// }

// // 배열과 같이 내부 아이템을 한개씩 찾아와서 반복 순회할 수 있도록 해주는 객체 => 이터레이터 객체
// // 이터레이터 객체가 아닌 애들은 반복문을 쓸 수 없다

// for (let value of myCup.values()) {
//   console.log(value); // white // ceramic // 300ml // daily
// }

// for (let value of myCup.entries()) {
//   console.log(value);
//   // (2) ['color', 'white']
//   // (2) ['material', 'ceramic']
//   // (2) ['capacity', '300ml']
//   // (2) ['purpose', 'daily']
// }

//
// ---------------------------------------------
//

// Map객체 => 데이터의 중복을 막을 수 없다!
// 동일한 데이터한 하나의 객체안에 들어오면 안되는 상황

// 일반객체 + 배열객체 + Map + 데이터 중복x => Set() set객체라고 부른다

const numSet1 = new Set();
// set객체가 선언된다
numSet1.add("one");
console.log(numSet1); // Set(1) {'one'}
numSet1.add("one").add("two");
console.log(numSet1); // Set(2) {'one', 'two'}
//
//
// 선언과 동시에 할당도 가능
const numSet2 = new Set([1, 2, 3]);

console.log(numSet2); // Set(3) {1, 2, 3}
console.log(numSet2.has(2)); // true
// 객체 안에 값이 있냐 없냐

numSet2.delete(1);
console.log(numSet2); // Set(2) {2, 3}

numSet2.clear();
console.log(numSet2); // Set(0) {size: 0}
