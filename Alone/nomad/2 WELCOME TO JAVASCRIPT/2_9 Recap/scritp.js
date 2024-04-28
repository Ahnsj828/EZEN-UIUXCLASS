// // < 변수 >
// const variable = "anything"

// // < 배열 >
// const array = ["a", "b", "c", "d"]
// // array.push("e");

// // < 객체 >
// const object = {
//   name: "ahn",
//   age: 10,
//   fat: true,
// }
// // console.log(object.name); // ahn
// // console.log(object["name"]); //ahn
// // object.gender = "female"
// // console.log(object) // {name: 'ahn', age: 10, fat: true, gender: 'female'}

// // < 함수 >
// function functionA(argument1, argument2) {
//   console.log(argument1 + argument2)
// }
// functionA(3, 10)

// -----------------------------------------------------------------------
 // < variable 변수 >
// 모든 것은 데이터 타입으로 시작했다
// 데이터 타입은, 자바스크립트가 이해할 수 있는 데이터의 종류들이다
// "text"  => String(문자열) => text / string은 '로 시작해서 '로 끝나거나 "로 시작해서 "로 끝나면 된다
// 5 + 5 => number(숫자)도 있다
// 이런 데이터들을 저장할수 있다 /  variable에 저장할 수 있다 

// variable을 만드는 두가지 옵션이 있다
// 1)  const a = 5
//     console.log(a)  //  5   //  js가 5를 출력한다
// 2) variable 값을 업데이트 하고 싶을 때가 있다
//    const inNicoFat = ture     
//    isNicoFat = false
//      =>  이럴땐 let을 사용해야한다  =>   let isNicoFat = true  / isNicoFat = false(이때는 variable을 만드는게 아니라 업데이트 하는거라 let을 안써도 된다)
// => let과 const의 차이는 let은 업데이트를 할 수 있다는 것이다
// => varialbe을 업데이트 하고 싶다면, variable 앞에 let을 사용해서 생성해야한다


// -----------------------------------------------------------------------
// // < 데이터 타입 종류 >
// const a = 5  // 숫자를 저장할 수 있다
// const b = "abcd" // string을 저장 할 수 있다
// const c = ture // boolean( trure, false )을 저장 할 수 있다
// const d = null // null은 비어있음을 뜻한다 / d라는 varaible안에 아무것도 없다는것을 확실히 해두고 싶을때 사용한다 / null은 변수에 할당되는 값이다
// // unll => 파이썬에서는 none이 있다 / go에는 nil이 있다
// const e   // undefined // 변수에 값을 부여하지 않은 상태다 / e는 존재하지만, 안에 아무것도 없다는 뜻이다 / 값이 전혀 없다는 것이다

// -----------------------------------------------------------------------
// < array 배열 >
// 하나의 variable에 많은 수의 데이터를 갖을 수도 있다
const days = []
// 여기에 일종의 list,다른 말로 array라는것도 만들고 []를 작성하면 된다
// => 이걸로 array(배열)를 만들면 된다
// []안에 모든 유효한 데이터 타입이나 variable이 들어갈 수 있다

const varableEx = "variable"
const arrayExampl = [1, 2, false, true, "text", null, undefined, varableEx]
// 숫자 boolean 문자 null undefiened varialble 다 넣을 수 있다
// arrayExampl이라는 variable(변수)안에 1, 2, false, ture, "text", null, undefined, varableEx 이 모든 데이터가 있다

// array에 있는 item을 접근할 수 도 있다
const tobuy = ["tomao", "potato", "pizza"]
tobuy[2] // tobuy라는 array에 세번째 item을 받는 방법 / 컴퓨터는 0부터 시작
console.log(tobuy[2]) // pizza / element(요소)를 받는 방법
console.log(tobuy) // (3) ['tomao', 'potato', 'pizza']

// item을 update를 할 수도 있다
tobuy[2] = "banana" // tobuy의 2번 인덱스에 값을 설정하는 방법
console.log(tobuy) // (3) ['tomao', 'potato', 'banana']

// array에 추가도 할 수 있다
tobuy.push("apple")
console.log(tobuy) // (4) ['tomao', 'potato', 'banana', 'apple']
