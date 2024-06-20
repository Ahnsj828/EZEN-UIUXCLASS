// < 객체 >
//  자바스크립트는 객체(object) 기반 언어다. 객체는 기능과 속성을 가지고 있다.
//  ex) TV에 켜다. 끄다. 음을 소거하다. 볼륨을 높이다 볼륨을 낮추다의 기능이 있다.
//    => 이렇듯 TV라는 객체에는 다양한 기능이 있다. 
//      => 이러한 주변의 모든 사물들을 객체라고 한다.

// 자바스크립트 역시 다양한 객체가 있다. / document 라는 객체를 사용했었다.
// 자바스크립트에서는 이런 기능들을 메서드(Method)라고 한다.
// 또한 객체는 속성(Property)을 가지고 있다. TV를 예로 들면 TV의 크기나 색상 그리고 무게 등을 속성이라고 할 수 있다.

// *TV => 객체(Object)
//     => 매서드(Method) (기능들)
//        - 켜다();
//        - 끄다();
//        - 볼륨을 높이다();
//        - 볼륨을 줄이다();
//     => 속성(Property)
//        - 너비;
//        - 높이;
//        - 색상;
//        - 무게;

// *자바스크립트 객체의 매서드와 속성을 사용하는 기본형은 다음과 같다
// 객체.메서드();
//   => 객체의 메서드를 실행한다.
// 객체.속성;  or  객체.속성=값;
//   => 객체의 속성값을 가져온다  or  => 객체의 속성값을 바꾼다.

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

// 정답
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


document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// ex.2) 중첩 for 문을 이용하여 5행 5열 표를 만들고, 데이터가 1부터 25까지 출력되도록 작성하라.
// 내가 다시 해보기
let number = 1;
let table = "<table border = '1' style = 'border-color: red'>"
for (let a = 1; a <= 5; a++) {
  table += "<tr border = '1' style = 'border-color: yellowgreen'>"
  for (let b = 1; b <= 5; b++) {
    table += "<td>" + number + "</td>"

    number++
  }
  table += "</tr>"
}

table += "</table>"
document.write(table)

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

// t += "<td>", num, "</td>" 이렇게 하면 <td> 태그 안에 포함시킬 수 없고 t += "<td>" + num + "</td>"; 이렇게 해야지만 <td> 태그 안에 포함시킬 수 있는 이유는?
// t += "<td>", num, "</td>"    이거와    t += "<td>" + num + "</td>";  이거의 차이는?

// 

// <<  t += "<td>", num, "</td>"; 구문  >>
// 이 구문은 JavaScript의 쉼표 연산자를 사용하고 있습니다. 쉼표 연산자는 각 표현식을 평가한 뒤, 마지막 표현식의 결과를 반환합니다. 즉, 쉼표로 구분된 여러 표현식이 있을 때, 가장 마지막 표현식만 실제로 반환됩니다. 

// 예를 들어:
let ex = (1, 2, 3);
document.write(ex); // 출력: 3

// 따라서, t += "<td>", num, "</td>"; 코드는 다음과 같이 평가됩니다:

// 1. "<td>" 문자열이 평가됩니다.
// 2. num 변수가 평가됩니다.
// 3. "</td>" 문자열이 평가됩니다.
// 4. 마지막 표현식인 "</td>"가 반환됩니다.

// 결과적으로, 이 코드는 num의 값을 문자열로 포함하지 않고, t에 "</td>" 문자열만 더하게 됩니다. 즉, t는 계속해서 "</td>"만 추가되는 문제가 발생합니다.

// ----------------------------------------------------------------------------------------------

// <<  t += "<td>" + num + "</td>"; 구문  >>
// 이 구문은 문자열 연결 연산자 +를 사용하여, 각 부분을 하나의 문자열로 결합합니다. 여기서는 num이 숫자이지만, JavaScript는 + 연산자를 사용할 때 문자열과 다른 데이터 타입을 결합하면 자동으로 다른 데이터 타입을 문자열로 변환합니다. 

// 예를 들어:
let ex2 = "<td>" + 5 + "</td>";
console.log(ex2); // 출력: <td>5</td>

// 따라서, t += "<td>" + num + "</td>"; 코드는 다음과 같이 평가됩니다:

// 1. "<td>" 문자열과 num 변수의 값을 결합합니다.
// 2. 그 결과에 "</td>" 문자열을 결합합니다.
// 3. 최종적으로 만들어진 문자열을 t에 추가합니다.

// 이 방식으로 t에는 <td>num</td> 형식의 문자열이 정확히 추가됩니다.

// 

// <<  요약  >>
// =>  t += "<td>", num, "</td>";: 쉼표 연산자 때문에 t에는 "</td>" 문자열만 추가됩니다.
// =>  t += "<td>" + num + "</td>";: 문자열 연결 연산자를 사용하여 t에 <td>num</td> 형식의 문자열이 정확히 추가됩니다.
// 따라서, <td> 태그 안에 num 값을 포함시키려면 t += "<td>" + num + "</td>"; 형태를 사용해야 합니다.
