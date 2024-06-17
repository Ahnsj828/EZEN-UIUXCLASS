// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문


const traffic = 3000
const meal = 6000
const beverage = 3000

const sum = traffic + meal + beverage

let result = sum > 10000 ? document.write(`${sum - 10000}원 초과`) : document.write("돈 관리 잘 하셨어요")

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

