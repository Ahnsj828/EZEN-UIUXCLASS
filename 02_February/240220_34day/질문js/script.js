// // 자바스크립트에서 숫자를 어디까지 사용할 수 있을까?

// // 비트 : 메모리의 최소단위 / 바이트 :  8비트 => 1바이트

// // JS : 자료구조 & 알고리즘
// // 제어문 : 반복문 => for, forEach, for in , for of

// const testNum = Number.MAX_SAFE_INTEGER;
// const testNum01 = Number.MIN_SAFE_INTEGER;
// console.log(testNum);
// console.log(testNum01);
// // 자바스크립트에서 다룰 수 있는 최고 숫자 9007199254740991
// // 자바스크립트에서 다룰 수 있는 최저 숫자 -9007199254740991

// // if (inputData >= testNum) {
// //   alert("error");
// // }
// // 조건식을 걸고자할때 사용 / 이런걸 안걸어놓으면 배수로 늘고 컴터가 버벅거린다
// //
// //
// //
// // BigInt함수 => 데이터처리가 많은 곳에서 다룸(금융권같은..)
// // 최고 최저 숫자를 초과하거나 타입이 비슷한 숫자를 다뤄야할때
// const testNum02 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
// // 단순 숫자가 아니라 BigInt라는 타입으로 정의해서 값을 추가 할 수 있는거다
// // 뒤에 1이나 2 같이 자연수는 못넣고 BigInt 타입과의 연산만 가능하다 (1n같은..)
// const testNum03 = BigInt(Number.MIN_SAFE_INTEGER);
// // 9007199254740991n / +1n하면 9007199254740992n 라고 뜨면서 숫자가 추가된다
// // -9007199254740991n
// console.log(testNum02);
// console.log(testNum03);
//
//
//
//
// =========================================================================
const testNum04 = 1400;
console.log(testNum04);
// 1400이라고 나온다
// IT영역은 축약을 좋아한다 / 불필요하게 늘여놓고쓰는걸 싫어한다
// const testNum05 = 1400000000000000000000000000;
// console.log(testNum05);
// 1.4e+27라고 나온다 / 단위수가 많아질때 10의 제곱근을 e로 표현한다 / 단위가 길어질때

const testNum05 = 14e3;
// 10의 3 제곱근 1000
// +는 옵션이다
console.log(testNum05);

const testNum06 = 14e-3;
// 10의 3 -제곱근 0.014
// -는 -제곱근이다
console.log(testNum06);
