// 정규표현식 = Regular Expressin
// 왜 사용하는가? 어떤 특정 패턴을 정의하고자 할 때, 그리고 그 패턴의 결과값을 도출하고자 할 때
// 구성 => v패턴[플래그] (패턴과 플래그로 이루워져 있다)
// 패턴 = 반복적인요소
// 플래그 = 반복적인 요소에 추가적인 옵션값을 넣어주고싶을때

// 패턴 => 알파벳 3개로 구성된 문자열
// 플래그 (+옵션) => 대문자.소문자.대소문자 가리지 않고 세개로 구성된 문자열이냐

// let regexp = /\d{3}/;
// // 숫자를 디지트라고 부른다 => 약자 d
// console.log(regexp.test("123")); // true 위에 정의한 3글자가 맞다
// console.log(regexp.test("Hello")); // false위에 정의한 3글자가 아니다(다섯글자다)
// // 일치하는지 불일치하는지 확인할때 쓴다

// let regexp = new RegExp(/\d{3}/); // 이렇게 쓰나 위에처럼쓰나 똑같다
// console.log(regexp.test("123")); // true 위에 정의한 3글자가 맞다
// console.log(regexp.test("Hello")); // false위에 정의한 3글자가 아니다(다섯글자다)

// let obj = {
//   title: "35",
// };

// let obj01 = new Object();
// Object.title = "TS";

//
//

// let str = "ES2024 is powerful!"; // 정규표현식쓸대는 문자열을 많이쓴다
//  "ES2024 is powerful!" 문자열 안에 들어가있는 문자랑 일치하는 문자를 찾을때
// str.match(/ES6/);
// // ES6 라는 문자가 들어가있는지 찾고자 하겠다
// console.log(str.match(/ES6/)); //null / 존재하지 않아서 null
// str.replace(/ES2024/, "ES6");
// // replace 에는 두개의 매개변수를 받는다 /찾고자하는 패턴을 찾고 / 찾은 패턴에 교체하고자 하는 값을 넣는다

// // 정규표현식은 대.소문자를 가린다!!
// console.log(/es/.test(str)); // false / "ES2024 is powerful! 에는 es가 들어간건 맞지만 대문자고 우리가 찾은건 소문자다
// console.log(/es/i.test(str)); // true / 대소문자와 관계없이 다 찾아와라 라는 뜻이다.
// // 여기에서 i는 플래그다

// console.log(str.match(/ES\d/)); // ES2
// // 패턴에 맞는 값을 찾아라 / 매칭되는 값을 찾아라 / ES뒤에 숫자 하나만 찾아와라
// // d = digit 약자
// console.log(str.match(/ES\d\d\d\d/)); // ES2024

//
//
// // ^ 캐럽은 꼭 알아라!
// // 캐럽? = ^
// let hello = "Hello, everyone.";
// console.log(/^H/.test(hello)); // true
// // H로 시작하는 패턴을 찾겠다 / hello라는 변수안에서 찾겠다 / 존재하는지 찾아달라 / 맞으면 true 틀리면 false
// console.log(/^h/.test(hello)); // false
// console.log(/^h/i.test(hello)); // true
// // 대소문자 구분하지 않고 다 찾아와라

//
//
// // $ 달러도 많이쓴다! (끝나는 문자열을 찾을때) /  특정한 패턴으로 끝날때
// // /one.$/
// console.log(/one.$/.test(hello)); // true
// console.log(/e.$/.test(hello)); // true
// console.log(/one$/.test(hello)); // false

//
//
// // CSS학습할때 => Hex컬러코드를 배웠다
// // 왜 컴퓨터는 컬러값을 최대 255까지 출력하는지 배웠다
// // 그때 16진수를 얘기했었다
// // 0~9, a~f : #fff vs #000
// let testStr = "ES2024";
// testStr.match(/[0-9]/g);
// console.log(testStr.match(/[0-9]/g)); //(4) ['2', '0', '2', '4'] / let testStr = "ES2024";와 매칭되는 값이 있다면 모든 숫자를 찾아와라
// ///[0-9]/ => 0부터 9까지의 숫자를 찾아라 /  그래서 컴퓨터가 출력할 수 있는 값을 다 출력하겠다 / 모든 숫자를 다 찾아와라
// // g 글로벌이라는 플래그 / 모든 숫자를 찾아와
// console.log(testStr.match(/[0-9]/)); //2  / let testStr = "ES2024";와 매칭되는 값이 있다면 모든 숫자중에 가장 왼쪽 하나만 찾아와라
// console.log(testStr.match(/[^0-9]/g)); //(2) ['E', 'S']  / 0~9 제외한 모든 수를 찾아라 / 나머지 애들을 싹다 가져와라
// // ^이 들어가는순간 not이 된다

//
//
let str = "Oooops";
console.log(str.match(/\o\o/));
console.log(str.match(/o{2}/));
// 둘이 같은 뜻이다
console.log(str.match(/o{2,}/)); // 최소 2가 넘는 배열로 찾아줘
console.log(str.match(/o{2,4}/)); // 최소 2가 넘고 4미만 배열로 찾아줘

//
//
// 슬랙에 => 정규표현식 표현방법 올려주신단다
// 보안관련 업종이나 해킹 관련 업종이나 암호에 관련된 업종에는 정규표현식을 씹어먹어야 한다 / 백엔드에서 많이 사용

//
//
// << 자주 사용하는 정규표현식 >>
// << 숫자만 찾아오고자 할 때 >>
/^[0-9]+$/;
// /^[0-9]/  밖에 있으면 ~요소로 / 0에서 9까지 시작되는 값을 찾아와라
// 뒤에는 어떤 숫자가 와도 상관없다

//
// << 양의 정수값만 찾아오고자 할때 >>
/^[0-9]\d*$/;
//
// << 음의 정수값만 찾아오고자 할때 >>
/^\-[0-9]\d*$/;
//
// << 숫자와 영문자만 찾아오고자 할때 >>
/^[a-zA-Z0-9]\d*$/;
