// < 삼항 조건 연산자 >
// 삼항 조건 연산자는 조건식(true 또는 false의 결괏값을 반환)의 결과에 따라 실행 결과가 달라지는 삼항 연산자로, 연산을 위해 피연산자가 3개 필요하다

// 삼항 조건 연산자는 연산한 결과 조건식의 반족 여부에 따라 실행하는 코드를 다르게 실행하고자 할 때 사용한다
// 예를 들어 방문자로부터 입력받은 나잇값이 20세 이상이면 "성인"이라 출력하고, 미만이면 "미성년자"라고 출력하도록 할 때 사용할 수 있다.

// 조건식 ? 자바스크립트 코드1 : 자바스크립트 코드2;

document.write("< 삼항 조건 연산자 >", "<br/>")
document.write("삼항 조건 연산자는 연산한 결과 조건식의 반족 여부에 따라 실행하는 코드를 다르게 실행하고자 할 때 사용한다", "<br/>")
document.write("예를 들어 방문자로부터 입력받은 나잇값이 20세 이상이면 '성인'이라 출력하고, 미만이면 '미성년자'라고 출력하도록 할 때 사용할 수 있다.", "<br/>")
document.write("조건식 ? js코드1 : js코드2;", "<br/>")

document.write("<br/>")
document.write("============================================")
document.write("<br/>")

const a = 10;
const b = 3;
document.write("const a = 10;", "<br/>");
document.write("const b = 3;", "<br/>");

const result = a > b ? "true입니다" : "false입니다";
document.write('const result = a > b ? "true입니다" : "false입니다";', '<br/>');
document.write(result, "<br/>");

