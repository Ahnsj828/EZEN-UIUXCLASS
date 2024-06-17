// < mission - 지출비용계산 >
// 진영이의 하루 지출비용의 합계를 구한 후 적정 지출비용의 초과 여부를 출력하기
// 교통비 3,000원 / 식비 6,000원 / 음료비 3,000원 사용
// 삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만원을 
//  초과 했을 경우에는 => "000원 초과" 라고 출력하기
//  아닐 경우에는 => "돈 관리 잘 하셨어요" 라고 출력하기


const traffic = 3000
const meal = 6000
const beverage = 3000

const sum = traffic + meal + beverage

let result = sum > 10000 ? document.write(`${sum - 10000}원 초과`) : document.write("돈 관리 잘 하셨어요")

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const traffic2 = 3000
const meal2 = 6000
const beverage2 = 3000

const sum2 = traffic2 + meal2 + beverage2

if (sum2 > 10000) {
  document.write(`${sum2 - 10000}원 초과했습니다. 절약하세요`)
} else {
  document.write("돈 관리 잘 하셨어요")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const traffic3 = 3000
const meal3 = 6000
const beverage3 = 3000

const sum3 = traffic3 + meal3 + beverage3
let result3

if (sum3 > 10000) {
  result3 = `${sum3 - 10000}원 초과했습니다. 절약하세요`
} else {
  result3 = "돈 관리 잘 하셨어요"
}

document.write(result3)