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

// ex.2) 중첩 for 문을 이용하여 5행 5열 표를 만들고, 데이터가 1부터 25까지 출력되도록 작성하라.
// 밖 => 행 / 안 => 열
// for(i2 = 1; i2 <= 5; i2++) {
//   for(k2 = 1; k2 <= 5; k2++) {
//     document.write()
//   }
// }

let num = 1;
let t = "<table border = 1>";
for (let i2 = 1; i2 <= 5; i2++) {
  t+= "<tr>";
  for (let k2 = 1; k2 <= 5; k2++) {

    // t+= "<td>", num, "</td>";

    t+= "<td>" + num + "</td>";

    // t += "<td>", num, "</td>"; 를 t += "<td>" + num + "</td>"; 로 변경했습니다. 이렇게 하면 num의 값을 문자열로 변환하여 <td> 태그 안에 포함시킬 수 있습니다.
    
    num++;
  }

  t+= "</tr>";
}

t+= "</table>";
console.log(t);
document.write(t);

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const testNum1 = 10
const testNum2 = 20
const testNum3 = 30
const test1 =  ("<td>", testNum1, "</td>")
const test2 =  "<td>" + testNum2 + "</td>"
const test3 =  (testNum1, testNum2, testNum3)

document.write(test1);
document.write(test2);   // 20
document.write("<br/>")
document.write(test3);   // 30

console.log(test1);   // </td>
console.log(test2);   // <td>20</td>
console.log(test3);   // 30