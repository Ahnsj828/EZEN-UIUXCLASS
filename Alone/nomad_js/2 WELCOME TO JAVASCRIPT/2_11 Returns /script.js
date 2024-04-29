// // nico의 calculator
// const calculator = {
//   plus: function(a, b) {
//     console.log(a + b)
//   },
//   minus: function(a, b) {
//     console.log(a - b)
//   },
//   times: function(a, b) {
//     console.log(a * b)
//   },
//   divide: function(a, b) {
//     console.log(a / b)
//   },
//   power: function(a, b) {
//     console.log(a ** b)
//   }
// }

// calculator.plus(2, 3) // 5
// calculator.minus(2, 3) // -1
// calculator.times(2, 3) // 6
// calculator.divide(2, 3) // 0.6666666666666666
// calculator.power(2, 3) // 8

// 이 calculator에서 console.log를 쓸지말자는게 이번 영상의 요지다
// console.log는 console에 무언가를 log하는거다 (기록하여 보여줌)
// fuction 밖에서 결과값을 얻기를 원한다 / fuction에서 답을 얻고싶단다 / 코드안에서 말이다
// console.log는 console에 결과를 표시를 해주는데 
// 콘솔이 아닌 화면에 출력한다든지 무언가를 변경한다든지, data를 받아서 사용하기를 원한다
// => 이 fuction이 계산의 결과를 제공하는거 / 결과를 코드 상에서 알려주는거

// 👇🏻 alert으로 바꿔보기 / alert의 기능은 메세지를 경고문으로 보여주는거다

// const calculator = {
//   plus: function(a, b) {
//     alert(a + b)
//   },
//   minus: function(a, b) {
//     alert(a - b)
//   },
//   times: function(a, b) {
//     alert(a * b)
//   },
//   divide: function(a, b) {
//     alert(a / b)
//   },
//   power: function(a, b) {
//     alert(a ** b)
//   }
// }

// calculator.plus(2, 3) // 5
// calculator.minus(2, 3) // -1
// calculator.times(2, 3) // 6
// calculator.divide(2, 3) // 0.6666666666666666
// calculator.power(2, 3) // 8

// -----------------------------------------------------------------

// const calculator = {
//   plus: function(a, b) {
//     alert(a + b)
//   },
//   minus: function(a, b) {
//     alert(a - b)
//   },
//   times: function(a, b) {
//     alert(a * b)
//   },
//   divide: function(a, b) {
//     alert(a / b)
//   },
//   power: function(a, b) {
//     alert(a ** b)
//   }
// }

// console.log(calculator.plus(2, 3)) 
// // => 알림창으로 5만 나오고 console에는 undefined라고 나온다 
// // plus의 값은 undefined다

// -----------------------------------------------------------------

// const age = 96
// function calculateKoreaAge(ageOfForeigner) {
//   ageOfForeigner + 2
// }
// // 이 function을 작동시키면서 console에 표시하는 건 원치 않다 / 원하는건 한국 나이를 계산하는 것이다
// // 이 계산에서 결과를 받고싶다면? 그것도 코드로 말이다 
// // 함수가 그냥 어떤 기능을 수행하는 것이라고 생각하기보단 함수는 어떤 일을 수행하고 그 결과를 알려주는 것이라고 생각해봐라
// // 조용히 일만 수행하는 fuction도 있을테고 fuction으로부터 결과를 원할 때도 있을거다
// // console에서의 결과를 원하는 것이 아니라 alert 경고문에서의 결과를 원하는 것이 아니라 코드에서 결과를 원할거다 

// // variable을 하나 만들어보자
// const krAge = calculateKoreaAge(age)
// // krAge는 calculateKoreaAge의 결과와 같을거다
// console.log(krAge) // undefined  krAge는 아직 정의가 되지 않았다

// // 👇🏻

// const age2 = 96
// function calculateKoreaAge2(ageOfForeigner2) {
//   return ageOfForeigner2 + 2
// } 
// const krAge2 = calculateKoreaAge2(age2)
// // function안에서 무언가를 return 하면 누군가가 function을 실행 할 때, calculateKoreaAge2(age2)을 ageOfForeigner2 + 2으로 대체할 거다
// console.log(krAge2) // 98
// // calculateKoreaAge2를 실행시키면 age2에 96이라는 argument가 age자리로 대체가된다(ageOfForeigner2로) 그러고 96 + 2를 return한다
// // rutrun을 함으로써, function을 호출하는 코드가 98이 된다

// // console.log를 사용하는 대신 어떤 작업을 처리하고 그 결과를 return하기 위해 function을 사용할거다
// // => 이게 function이 function의 밖과 소통하는 방법이다
// // 무언가를 return하면 계산을 담당하는 function의 코드(calculateKoreaAge2(age2))는 그 functino이 reutrn하는 값(return ageOfForeigner2 + 2)과 같아질거다

// -----------------------------------------------------------------

// const calculator = {
//   plus: function(a, b) {
//     // alert(a + b)
//     return a + b
//   },
//   minus: function(a, b) {
//     // alert(a - b)
//     return a - b
//   },
//   times: function(a, b) {
//     // alert(a * b)
//     return a * b
//   },
//   divide: function(a, b) {
//     // alert(a / b)
//     return a / b
//   },
//   power: function(a, b) {
//     // alert(a ** b)
//     return a ** b
//   }
// }
// // => alert나 console.lot를 사용하는 대신 return으로 바꾸고 ()를 지우면된다

// // console.log(calculator.plus(2, 3)) 
// calculator.plus(2, 3) // 여기까지만 하면 아무것도 안보인다 => console을 부르지 않아서
// const plusResult = calculator.plus(2, 3)
// console.log(plusResult)  // 5
// // return하는 것의 포인트는 console.log를 하는 것이 아니라 궁극적으로 plusResult의 결과값을 화면에 보여줘야 할거다 / calculator 내부에서 console.log를 사용하지 않았다

// -----------------------------------------------------------------

// const calculator = {
//   plus: function(a, b) {
//   // plus: function(2, 3) {
//     // alert(a + b)
//     return a + b
//     // return 2 + 3
//     // return 5
//   },
// } // 여기 plus function이 있는 calculator object가 있다 

// const plusResult = calculator.plus(2, 3)
// // const plusResult = 5
// console.log(plusResult)  // 5

// // 이 function을 a와 b를 argument로 갖는다
// // 2를 a에 보내고 3을 b에 보낸다

// -----------------------------------------------------------------

const calculator = {
  plus: function(a, b) {
    return a + b
  },
  minus: function(a, b) {
    return a - b
  },
  times: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b
  },
  power: function(a, b) {
    return a ** b
  },
}
const plusResult = calculator.plus(2, 3) 
// const plusResult = 2+3 = 5 
// const plusResult = 5 (반환값은 5가 된다)
const minusResult = calculator.minus(plusResult, 10) 
// const minusResult = calculator.minus(5, 10) = 5-10 = -5 
// const minusResult = -5 (반환값은 -5가 된다)
const timesResult = calculator.times(10, minusResult) // 10*-5 =-50
// const timesResult = calculator.minus(10, -5) = 10*-5 = -50
// const timesResult = -50 (반환값은 -50이 된다)
const divideResult = calculator.divide(timesResult, plusResult) // -50/5=-10
const powerResult = calculator.power(divideResult, minusResult) // -10**-5 =
// => 이것들은 '상호 의존적'이다 / plus의 결과 값을 얻지 못했었다 console에서만 plus의 결과값을 알 수 있었다 / console에서 값을 가져올 수는 없었다 / console은 그냥 보여주기 위한것 뿐
// => 전 까지만해도 코드에서 결과 값을 알 수 없었다 => 지금 이 코드는 서로 의존하고 있다

// console창에 가면 아무것도 안나온다 But, plusResult를 검색하면 값이 나온다 