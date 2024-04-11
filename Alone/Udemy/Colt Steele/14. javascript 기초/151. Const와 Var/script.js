// < Const >
// const는 constant의 줄임말  =>  상수의 줄임말
// 상수는 항상 일정한 값이다 /  바뀌지 않는다
// const 식별자 = 값(value)

// const luckyNum = 26
// console.log(luckyNum)  //  26
// luckyNum += 1
// // 그 값을 늘리거나 변경하거나 다시 입력할 순 없다
// console.log(luckyNum)  //  script.js:8 Uncaught TypeError: Assignment to constant variable 경고창뜸
// // +=1을 하면 '상수로 지정되어 있다' 라며 오류가 뜬다  =>  그냥 못한다는 뜻이다
// // 상수값은 업데이트할 수도 없고 변경할 수도 없다

// 그렇다면 "왜 const를 쓰는걸까?"
// => 원주율 값이나 변하지 않는 것의 활실한 값을 유지할 경우 쓰게 된다
// const pi = 3.141592
// const daysInWeek = 7
// const minHeightForRide = 60
// const 변수를 쓰면 JavaScript가 업데이트를 막아버린다

// 
// -----------------------------------------------------------------------------
// 

// < Var >
// 이건 옛날 방식이다
var runDistance = 26.2
console.log(runDistance)  //  26.2
runDistance += 1
console.log(runDistance)  //  27.2

// let은 재할당이 가능하고 변수를 만들 수 있고 
// const는 상수 값인 변수를 만들 수 있다

// 
// ========================================================================
// 

// < 코딩연슴16 : 첫 번째 상수 연습>
// 상수를 정의하는 연습을 해보겠습니다. index.js에서 다음 두 개의 변수를 정의하세요.
// 'boilingPointC'라는 상수를 정의하고 그 값을 100으로 설정하세요.
const boilingPointC = 100
// boilingPointF'라는 두 번째 상수를 정의하고 그 값을 212로 설정하세요.
const boilingPointF = 212

// 
// ========================================================================
// 
// < 퀴즈 3 : 변수 퀴즈 >
// 질문1. 다음 코드를 실행하면 score는 어떤 값이 될까요?
// let score = 5;
// score + 4;
//  => 정답 5 => Score(5)와 4를 더하는 코드지만 score 값은 변하지 않습니다. 
// => Score 값을 변경하지 않았으니까!

// 질문2. 다음 코드를 실행하면 bankBalance는 어떤 값이 될까요?
// let bankBalance = 100;
// bankBalance /= 2;
// bankBalance += 10;
//  => 정답 60 => 100/2+10 = 50+10 = 60

// 질문3. 다음 코드를 실행하면 age는 어떤 값이 될까요?
// const age = 64;
// age++;
// => 정답  => age는 그 값을 바꿀 수 없다는 의미의 함수인 const와 함께 정의되었습니다.
