// 문자열 + 매서드
// 문자열 값 => 배열 값 전환 매서드 함수

// 외부에서 가져오는 값 : JSON 타입 이거나 문자열
// 사용자가 직접 입력한 값을 찾아오던지 (input통해서 들어오는 값 => 문자열)
// 서버라는 공간에 들어가는 호스팅 값

// 배열
// DOM => 웹 프론트엔드 개발자 이거나 UIUX 관련 퍼블리셔 들이 추구하는 목적은 웹브라우저에 역동적으로 화려하게 바뀌게하려면 DOM을 컨트롤할 줄 알아야한다
// HTML => Node라는 값으로 변환되서 가져온다 / NodeList => 배열의 형태을 띄면서 가져온다 (배열은 아니고 유사배열)

// => 그래서 배열이 중요하다!!!

//
//
// // << 문자열을 배열로 변환하는 방법 >>
// // split() : 문자열을 특정 구분자로 나눠서 배열의 아이템으로 전환 매서드 함수
// const str5 = "Hello, everyone";
// const array2 = str5.split("");
// console.log(array2);

// // [...str] : 전개연산자 구문을 활용해서 배열로 전환하는 방법 (가장 많이 사용하는방법)
// const array3 = [...str5];
// console.log(array3);

// // Array.from(문자열) : Array 프로토타입을 활용해서 배열로 전환하는 방법 / 유사배열화 시킬때 많이 사용한다 (가장 적게 사용하는방법)
// const array4 = Array.from(str5);
// console.log(array4);

// //
// //
// // << 배열을 문자열로 변환하는 방법 >>
// // join()
// const str6 = array4.join("");
// console.log(str6);
// // 얘도 은근히 많이 쓰인다
//
//
//
//
const string = prompt("영문 소문자로 된 문자열을 입력하세요!");

// const firstCh = string[0].toUpperCase();
// // 첫번째 글자만 대문자로 바꾸겠다
// const remainStr = string.slice(1);
// // 두번째 글자 이후만 찾아와라
// const result = firstCh + remainStr;
// // 입력한 첫번째 단어만 대문자 + 뒤에는 대문자로 하겠다
// document.write(result);

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// 0번째 문자열을 찾아오겠다 / 대문자로 만들겠다 / [] 배열화 시키겠다 / 문자열을 배열로 가져오겠다 / 1번째 값을 배열형태로
// join 함수를 통해서 문자로 치환하겠다
document.write(result);

// => 둘이 값이 똑같다
