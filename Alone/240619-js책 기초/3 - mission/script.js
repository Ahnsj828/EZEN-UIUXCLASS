// < 제어문 >
//  * 조건문 : 조건에 따라 특정 코드를 실행시킬 수 있다
//      - if문 / else문 / else if 문
//  * 선택문 : 일치하는 경우의 값이 있을 경우에만 특정 코드를 실행 시킬 수 있다.
//      - switch문
//  * 반복문 : 코드를 지정한 횟수만큼 반복해서 실행시킬 수 있다.
//      - while문 / for문

// ex.1) while 문을 이용하여  구구단 중 5단을 출력하세요.
let multiple = 1
while (multiple <= 9) {
  document.write(5, " x ", multiple, " = ", multiple*5, "<br/>")
  multiple++
}

document.write("<br/>", "-----정답-----", "<br/>")
// 정답
let i = 1;
while(i<=9) {
  document.write("5X" +i+ "=" +i*5, "<br/>")
  i++
}

document.write("<br/>", "----- 구구단 통째 -----", "<br/>")
// 구구단 통째
for(n=1; n<=9; n++) {
  for(k=1; k<=9; k++) {
    document.write(n," x ", k, " = ", n*k, "<br/>")
  }
  document.write("<br/>")
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