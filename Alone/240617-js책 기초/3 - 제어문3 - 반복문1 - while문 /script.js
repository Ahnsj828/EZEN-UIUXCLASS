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

// * while문 - 조건식을 만족할 때까지 코드를 여러 회 반복하여 실행할 수 있다.
// 
// const 변수 = 초깃값;
// while(조건식) {
//   자바스크립트 코드;
//   증감식;
// }

// ex.1) "안녕하세요1 ~ 안녕하세요10"까지 1씩 증가하면서 10회 출력하는 예제
let i = 1; // const로 하면  =>  "안녕하세요1" 만 나온다
while(i <= 10) {
  document.write("안녕하세요", i, "<br />");
  i++;
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2) 1~30 사이의 숫자 중 2의 배수이면서 6의 배수인 숫자만 출력하는 예제
let i2 = 1
while(i2<=30) {
  if(i2%2==0 && i2%6==0) {
    document.write(i2, "<br/>");
  }
  i2++;
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.3) 20부터 10까지의 숫자 중 짝수일 경우에는 파란색으로 출력되고, 홀수일 경우에는 빨간색으로 출력되도록 하는 예제
let i3 = 10
while(i3<=20) {
  if(i3 % 2 == 0) {
    // document.write("<p class='blue'>", i3, "</p>")
    document.write("<p style= 'color : blue;'>", i3, "</p>")
    // document.write('<span style="color: blue;">' + i3 + '</span><br>');
  } else {
    // document.write("<p class='red'>", i3, "</p>")
    document.write("<p style= 'color : red;'>", i3, "</p>")
    // document.write('<span style="color: red;">' + i3 + '</span><br>');
    // 'color : red;' => '' 따옴표가 있어야한다 
  }
  i3++;
}