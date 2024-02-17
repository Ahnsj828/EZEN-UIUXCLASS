// // 자료형
// // 변수에 담겨질 수 있는 값으 형태를 의미
// // 숫자형 / 문자열 / 논리형 / 객체 / 배열 / 심벌 / 함수
// // 객체 => { key : value } => property {프로퍼티 = 속성}

// /* < 배열 > */
// // 객체 > 배열

// let arr = [1, 2, 3, 4];
// // arr = array?
// // [ ] 보이면 배열이라는거 바로 알기!
// let arrStr = ["a", "b", "c"];
// // 문자열은 꼭 "" 큰따움표를 사용하기
// let arr01 = [];

// // index & length
// // [] 안에들어가는 애들은 각각의 index값을 부여받는다
// // 사람이 컴퓨터에 어떠한 값을 입력하면
// // => 컴퓨터는 0, 1로만 인식한다 => 비트로 인식한다
// // 비트는 0과 1로만 인식한다
// // 바이트 (= 8비트)

// // JS = "객체 지향" 프로그래밍 언어
// // "절차지향"
// // 고차함수를 알아야한다 => 지금은 프로그래밍 언어만 알아라

// // console.log(arr);
// console.log(arr[1]);
// console.log(arrStr.length);
// // length 길이

// -----------------------------------------------------

// // 심벌 -> 유일무이한 값을 저장하고 관리하고 싶은 경우에 사용한다
// let var1 = Symbol();
// // let 변수를 선언한다
// let var2 = Symbol;

// // 비교연선자 => 서로다른 피연산자를 비교할 때 사용하는 연산자!

// console.log(var1 === var2);
// // var1 피연산자
// // var2 피연산자
// // === 비교연선자

// d-commerce = 쇼핑몰회사들
// 회원들의 개인정보를 저장하고자 할때 사용한다

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   // id: "abc"
//   [id]: 12345,
//   // 객체 안에 key값
// };
// member01.id = 6789;
// console.log(member01);

// const member02 = {
//   name: "Kim",
//   // id: "abc"
//   id: 12345,
//   // 객체 안에 key값
// };
// console.log(member02);
// // // {} 쓰면 객체가 들어온다

// // => [ ]를쳐서 유일무이한 값으로 지정할 수 있다

// // const member02 = {
// //   name: "Park",
// //   id: "abc",
// //   // 객체 안에 key값
// // };

// let grade = Symbol("grade");
// member01[grade] = "VIP";
// // member01객체 안에 grade키값을 설정하고 VIP문자값을 넣겠다

// // -----------------------------------------------------
// // < 함수 >
// const fnc = function () {
//   // fnc function 함수다
//   // 나 함수선언할게
//   // 실행은 { } 안에서 실행된다
//   console.log("test");
// };
// //  => 익명함수라고 부른다
// // 변수명을 대체했다

// function fun01() {}
// // fun01 함수이름
// // {} 안에 함수 실행문
// // 함수는 원래 이렇게 작성하는것이 기본문법이다

//=========================================================================

// << 함수 >>

// prompt() : 사용자에게 어떤 값을 받아 올 수 있도록 해주는 함수!!
// 사용자가 아무리 숫자를 입력 => 문자열 형변환

// 문자열 "+" 숫자형 => 문자열
// - / * 에는 적용안된다!   +에만 적용된다!

// let str = "20";
// // "20" - 더이상 숫자가 아니다, "" 안에 들어가서 문자로 됐다
// let num = 10;
// // 10 은 숫자다

// // let result = str + num;
// let result = Number(str) + num;
// // Number() : 매개변수로 들어오는 값을 무조건 숫자로 형변환!
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number(true));
// // // 1은 true다

// console.log(Number(false));
// // // 0은 false다

// console.log(Number("Hi!"));
// // NaN은 숫자가 아니다

// console.log(Number("20"));
// // 다시 숫자로 복원해준다

// // < 많이 헷갈려하는거 Number() VS parseInt() VS parseFloat() >
// 그래서 쌤은 Number()를 쓴다  => 모든걸 다 커버하니까

// // Number()
// // 가장 큰 개념이다 () 안에 뭐가들어오든지 다 숫자로 바꾼다 / 최강자
// const userAge = prompt("당신의 나이를 입력하세요!");
// console.log(typeof userAge);

// // parseInt()
// // 그 밑단계다
// // 소괄호 안에 들어온 값을 무조건 다 숫자로 바꿀 수 없다!
// // 숫자를 => 정수(*소수점이 없는 값)로 바꿔주는 역할
// const userAge = parrseInt(prompt("당신의 나이를 입력하세요!"));

// // parseFloat()
// // 소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 형태
// const userHot = parseFloat(Prompt("당신의 체온을 입력해주세요!"));
// console.log(userHot);

// ----------------------------------------------------
// // < 숫자를 문자로 변환 >
// let num = 10;
// console.log(num.toString());
// console.log(typeof num.toString());
// // 쇼핑몰에서 바코드를 문자로 변환할때 사용한다

// console.log(typeof String(false));

// // toString , String 둘 차이점 null값과 undefined 읽어내냐 못읽어내냐 차이

// ------------------------------------------------------
// // < 문자 & 숫자 => 논리 Boolean ( ) >
// console.log(Boolean(true));
// //  ture라고 나온다
// console.log(Boolean(0));
// //  false 나온다
// console.log(Boolean("hi!"));
// //  ture라고 나온다

// ------------------------------------------------
// 예제1) 사용자에게 화씨온도를 받아서 섭씨온도를 변환시킨 후
//   웹브라우저 화면에 섭시온도를 출력해주세요!
//   단, 소수점도 출력되어야함
//   ( 공식 : 섭씨온도 = (화씨온도 - 32) / 1.8
// const userHot = parrseInt(prompt("당신의 온도를 입력해주세요"));
// console.log(typeof userHot);

// const fah = prompt("화씨온도를 입력하세요!");
// fash화씨온도
// const fah = Number(prompt("화씨온도를 입력하세요!"));

const fah = Number(prompt("화씨온도를 입력하세요!"));
// const cel = (fah - 32) / 1.8;
const cel = ((fah - 32) / 1.8).toFixed(1);
// .toFixed(1)소수점 첫번째까지만

document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다!`);
// '' 변수값출력한다
