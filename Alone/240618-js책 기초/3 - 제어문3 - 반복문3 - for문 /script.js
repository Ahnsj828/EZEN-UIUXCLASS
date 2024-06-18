// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문

// < 반복문 > - 반복문을 이용하면 코드를 원하는 횟수만큼 반복하여 실행할 수 있다. 
//          - 가령, "안녕하세요" 라는 문구를 100회 출력하려면 출력문을 100번 작성해야 하지만 
//              반복문을 사용한다면 한 줄의 출력문으로 100회 출력할 수 있다.
//          - 반복문에는 while문 / do while문 / for문 이 있다

// * for문 - 조건식을 만족할 때까지 특정 코드를 반복하여 실행한다. 사용 방법은 while문과 같지만 while문보다 사용하기 편해 사용 빈도가 높은 편이다.

// for (초깃값; 조건식; 증감식) {
//   자바스크립트 코드;
// } 

// ex.1) 
for (let i = 1; i <= 10; i++) {
  // let i = 1 초깃값 / i <= 10 조건식 / i++ 증감식

  document.write("반복", i, "<br />")
  document.write("반복" + i + "<br />")
  // 둘 다 결과는 똑같다
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2) 1부터 100까지 5의 배수일 경우에는 빨간색 글자, 7의 배수일 경우에는 초록색 글자 그리고 5의 배수이며 7의 배수일 경우에는 아쿠아색 글자로 출력하는 예제

for (let i2 = 1; i2<=100; i2++) {
  if (i2 % 5 == 0 && i2 % 7 == 0) {
    document.write("<p style = 'color : aqua;'>", i2, "</p>", "<br/>")
  } else if (i2 % 5 == 0) {
    document.write("<p style = 'color: red;'>", i2, "</p>", "<br/>")
  } else if (i2 % 7 == 0) {
    document.write("<p style = 'color: yellowgreen;'>", i2, "</p>", "<br/>")
  } else {
    document.write("<p>", i2, "</p>", "<br/>")
  }
}

document.write("======answer======")

for (let i2 = 1; i2<=100; i2++) {
  if (i2 % 5 == 0 && i2 % 7 == 0) {
    document.write("<p style = 'color : aqua;'>", i2, "</p>")
  } else if (i2 % 5 == 0 && i2 % 7 != 0) {
    document.write("<p style = 'color: red;'>", i2, "</p>")
  } else if (i2 % 7 == 0 && i2 % 5 != 0) {
    document.write("<p style = 'color: yellowgreen;'>", i2, "</p>")
  } 
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")
