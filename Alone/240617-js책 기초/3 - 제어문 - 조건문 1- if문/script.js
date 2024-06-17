// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문

// < 조건문 > : 조건식의 값이 참(true)인지, 거짓(false)인지에 따라 자바스크립트 코드를 제어한다

// * if문 - 조건식을 만족(true)할 경우에만 코드를 실행한다.

// if(조건식) {
//  자바스크립트 코드
// }

// ex)
const walkAmount = prompt("당신의 하루에 걷는 양은 몇 보인가요?")

if(walkAmount>= 10000) {
  document.write("매우 좋은 습관을 갖고 계시군요!!", "</br>")
}
document.write("The end")

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2)
const phoneCallMin = prompt("당신의 하루 통화량은 몇 분인가요?")

if(phoneCallMin>= 60) {
  document.write("많이 사용하는 편이네요", "</br>")
}
document.write("The end")

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const num = 3
if(num) {
  // document.write(num)
  document.write("true면 나온다", "<br/>")
}

const num2 = 0
if(num2) {
  // document.write(num2)
  document.write("true면 나온다", "<br/>")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const userName = prompt("당신의 이름은 무엇인가요?")

if(userName) {
  // document.write(userName, "님 반갑습니다")
  // document.write(userName + "님 반갑습니다")
  document.write(`${userName}님 반갑습니다`)
    //  =>   세 방법 다 가능하다
}