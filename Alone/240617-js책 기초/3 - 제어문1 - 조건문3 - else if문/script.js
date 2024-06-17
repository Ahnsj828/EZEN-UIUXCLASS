// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문

// < 조건문 > : 조건식의 값이 참(true)인지, 거짓(false)인지에 따라 자바스크립트 코드를 제어한다

// * else if문 - 두 가지 이상의 조건식과 정해 높은 조건을 만족하지 않았을 때 실행되는 코드로 이루어져 있다.

// if(조건식1) {
  // 자바스크립트 코드1
// } else if(조건식2) {
  // 자바스크립트 코드2
// } else if(조건식3) {
  // 자바스크립트 코드3
// } else if(조건식4) {
  // 자바스크립트 코드4
// } else if(조건식5) {
  // 자바스크립트 코드5
// }  else {
  // 자바스크립트 코드6
// }

// ex)
const month = prompt("현재 몇 월인가요?")

if(month>=9 && month<=11) {
  document.write("독서하기 좋은 계절 가을이네요!!")
} else if(month>=6 && month<9) {
  document.write("바다가기 좋은 계절 여름이네요!!")
} else if(month>=3 && month<6) {
  document.write("꽃놀이 가기 좋은 계절 봄이네요!!")
} else {
  document.write("스키와 보드 타기 좋은 계절 겨울이네요!!")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2)