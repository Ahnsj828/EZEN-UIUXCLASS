// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문

// < 조건문 > : 조건식의 값이 참(true)인지, 거짓(false)인지에 따라 자바스크립트 코드를 제어한다

// * else문 - 조건식을 만족(true)할 경우와 만족하지 않을(false) 경우에 따라 실행되는 코드가 달리진다.

// if(조건식) {
  // 자바스크립트 코드1
// } else {
  // 자바스크립트 코드2
// }

// ex)
const likeNum = prompt("당신이 좋아하는 숫자는?")

if(likeNum % 2 == 0) {
  document.write("당신은 짝수를 좋아하는군요")
} else {
  document.write("당신은 홀수를 좋아하는군요")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2)
const result = confirm("힘드나요?")

// if(result) {
//   document.write("많이 힘들죠? 힘내라는 말밖에 할 말이 없네요. 좋은일 생기길 바랄게요")
// } else {
//   document.write("힘들지 않다니 다행이예요.")
// }

// 👇🏻 삼항 조건 여산자로

result = result ?  document.write("많이 힘들죠? 힘내라는 말밖에 할 말이 없네요. 좋은일 생기길 바랄게요") :  document.write("힘들지 않다니 다행이예요.")
// }