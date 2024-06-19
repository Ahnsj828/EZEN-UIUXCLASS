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

// * 중첩 for문 - for문 안에 for문을 사용한 것을 중첩 for문이라고 한다.
//      예를 들면 - js를 이용해 3행 5열의 표를 만든다고 할 때 1행씩 행이 만들어질 때마다 5개의 열을 만들어야 할 경우에 사용

// for (초깃값; 조건식; 증감식) {      // 바깥쪽 for 문
//   for (초깃값; 조건식; 증감식) {      // 안쪽 for 문
//     자바스크립트 코드;
//   } 
// } 

// ex.1) 중첩 for문을 사용하여 '1행 1열'부터 '3행 2열'까지 출력하는 예제 
//       바깥쪽 for 문은 행만큼 증가하고, 안쪽 for 문은 열만큼 증가하면 된다.
for (let i1 = 1; i1 <= 3; i1++) {
  for (let k1 = 1; k1 <=2; k1++) {
    document.write(k1 ,"<br/>")
  }
  document.write(i1 ,"<br/>")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

for (let i2 = 1; i2 <= 3; i2++) {
  document.write(i2, "행")
  for (let k2 = 1; k2 <=2; k2++) {
    document.write(k2, "열")
  }
  document.write("<br/>")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// 정답
for (let i = 1; i <= 3; i++) {
  for (let k = 1; k <=2; k++) {
    document.write(i, "행", k, "열", "<br/>")
  }
  document.write("<br/>")
}

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// 정답에서 변형 -  같은 행끼리 한줄에 나열
for (let i3 = 1; i3 <= 3; i3++) {
  for (let k3 = 1; k3 <=2; k3++) {
    // document.write(i3, "행", k3, "열", "<br/>")
    document.write(i3, "행", k3, "열    ")
  }
  // document.write("<br/>")
  document.write("<br/>", "<br/>")
}