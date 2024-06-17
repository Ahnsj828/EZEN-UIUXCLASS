// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문

// < 조건문 > : 조건식의 값이 참(true)인지, 거짓(false)인지에 따라 자바스크립트 코드를 제어한다

// * 중첩 if문 - 조건문 안에 조건문이 있으면 중첩 if문이라고 한다.

// if(조건식1) {
//   if(조건식2) {
//     자바스크립트 코드2
//   } 
// }

// ex)
const correctID = "abc123"
const correctPW = "112233"

const userID = prompt("아이디를 입력해주세요")
const userPW = prompt("비밀번호를 입력해주세요")

if(correctID == userID) {
  if(correctPW == userPW) {
    document.write(userID, "님 반갑습니다.")
  } else {
    alert("비밀번호가 틀렸습니다.")
    location.reload()
  } 
} else {
  alert("아이디가 틀렸습니다.")
  location.reload()
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2)