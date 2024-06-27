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

// -------------------------------------------------------------------------

// random() 메서드를 사용하면 0과 1사이에서 난수가 발생한다. 그렇다면 0과 1사이가 아닌 임의로 지정한 숫자의 구간에서 난수를 정수로만 반환받으려면 어떻게 해야할까?

// 1. Math.random()를 이용해서 0부터 10까지 난수를 반환
Math.random() * 10; // 0부터 10까지 난수를 반환한다.
document.write("1. Math.random() * 10 ", " => 0부터 10까지 난수를 반환한다.", "<br/>")
document.write(" => " + Math.random() * 10, "<br/>")
// 
document.write("<br/>")
// 
// 2. Math.floor()를 이용해서 0부터 10까지 정수로만 난수를 반환 / floor() 메서드는 값을 내리기 때문에 0이 아닌 11을 사용한다.
Math.floor(Math.random() * 11) // 0부터 10까지 난수를 발생하여 소수점 값을 제거한다.
// 10을 곱하면 0부터 9까지만 나온다
document.write("2. Math.floor(Math.random() * 11) 사용", " => 0부터 10까지 난수를 발생하여 소수점 값을 제거한다.", "<br/>")
document.write(" => " + Math.floor(Math.random() * 11), " => 10을 곱하면 0부터 9까지만 나온다", "<br/>")

document.write("<br/>")
document.write("============내가 해보기============")
document.write("<br/>")



// document.write("<br/>")
// document.write("============================================")
// document.write("<br/>")