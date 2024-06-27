// << 수학 객체 >>
//  자바스크립트 내장 객체에는 수학과 관련된 기능과 속성을 제공하는 수학 객체(Math Object)가 있다.
//  더하기, 곱하기, 나누기 등은 앞에서 배운 산술 연산자를 사용하면 된다.
//  하지만, 최댓값, 최솟값, 반올림값 등은 산술 연산자로 구할 수 없다. 
//  이번에 배울 수학 객체 메서드를 이용하면 수학과 관련된 일련의 작업들을 처리할 수 있다.

// 다음은 수학 객체의 메서드와 참조할 수 있는 상수에 대해 정리한 표다.

// < 수학 객체의 메서드 및 상수 >
// Math.abs(숫자)  =>   숫자의 절댓값을 반환한다.
// Math.max(숫자 1, 숫자 2, 숫자 3, 숫자 4)  =>   숫자 중 가장 큰 값을 반환한다.
// Math.min(숫자 1, 숫자 2, 숫자 3, 숫자 4)  =>   숫자 중 가장 작은 값을 반환한다.
// Math.pow(숫자, 제곱값)  =>   숫자의 거듭제곱값을 반환한다.
// Math.random()  =>   0 ~ 1 사이의 난수를 반환한다.
// Math.round(숫자)  =>   소숫점 첫째 자리에서 반올림하여 정수를 반환한다.
// Math.ceil(숫자)  =>   소숫점 첫째 자리에서 무조건 올림하여 정수를 반환한다.
// Math.floor(숫자)  =>   소숫점 첫째 자리에서 무조건 내림하여 정수를 반환한다.
// Math.sqrt(숫자)  =>   숫자의 제곱근값을 반환한다.
// Math.PI  =>   원주율 상수를 반환한다.

// 다음은 수학 객체에 포함되어 있는 수학 메서드에 숫자를 입력하여 결과값을 반환하는 예제다
const num = 2.1234;

const maxNum = Math.max(10, 5, 8, 30),
minNum = Math.min(10, 5, 8, 30),
roundNum = Math.round(num),
floordNum = Math.floor(num),
ceildNum = Math.ceil(num),
rndNum = Math.random(),
PINum = Math.PI;

document.write("max num: ", maxNum, "  -> 최댓값", "<br/>")   // 30
document.write("min num: ", minNum, "  -> 최솟값", "<br/>")   // 5
document.write("round num: ", roundNum, "  -> 소수점 첫째 자리 반올림", "<br/>")   // 2
document.write("floor num: ", floordNum, "  -> 소수점 첫째 자리 내림", "<br/>")   // 2
document.write("ceil num: ", ceildNum, "  -> 소수점 첫째 자리 올림", "<br/>")   // 3
document.write("random num: ", rndNum, "  -> 0과 1사이의 난수 발생", "<br/>")   //0.58808...
document.write("PI num: ", PINum, "  -> 원주율 상수를 반환", "<br/>")   // 3.14

document.write("<br/>")
document.write("============내가 해보기============")
document.write("<br/>")

const num2 = 5.712;

const maxNum2 = Math.max(15, 231, 7, 87),
minNum2 = Math.min(15, 231, 7, 87),
powNum2 = Math.pow(3, 2),
ceilNum2 = Math.ceil(num2),
floorNum2 = Math.floor(num2),
roundNum2 = Math.round(num2),
sqrtNum2 = Math.sqrt(4),
rndNum2 = Math.random(),
PINum2 = Math.PI;

document.write("max num2: ", maxNum2, "  -> 최댓값", "<br/>")
document.write("min num2: ", minNum2, "  -> 최솟값", "<br/>")
document.write("pow num2: (3, 2) => ", powNum2, "  -> 거듭제곱값", "<br/>")
document.write("ceil num2: ", ceilNum2, "  -> 소수점 첫째 자리 올림", "<br/>")
document.write("floor num2: ", floorNum2, "  -> 소수점 첫째 자리 내림", "<br/>")
document.write("round num2: ", roundNum2, "  -> 소수점 첫째 자리 반올림", "<br/>")
document.write("sqrt num2: 4=> ", sqrtNum2, "  -> 숫자의 제곱근값", "<br/>")
document.write("random num2: ", rndNum2, "  -> 0과 1사이의 난수 발생", "<br/>")
document.write("PI num2: ", PINum2, "  -> 원주율 상수를 반환", "<br/>")

// document.write("<br/>")
// document.write("============================================")
// document.write("<br/>")