// << 배열 객체 >>
// 변수에는 데이터가 한 개만 저장된다. 그렇다면 여러개의 데이터를 하나의 장소에 저장하려면 어떻게 해야할까?
// 여러 개의 데이터를 하나의 저장소에 저장하려면 배열 객체(Array Object)를 생성하면 된다.
// 배열은 '나눌 배'와 '열거할 열'을 사용해 만든 글자로, 글자 뜻 그대로 하나의 저장소를 나눠서 데이터를 열거하라는 의미다.

// 

// < 배열 객체를 생성하는 기본형 >
// 1. 'new Array()'를 사용한 배열 생성 (빈 배열을 생성하고 인덱스를 통해 값을 추가하는 방법)
//  const 참조 변수 = new Array();
//  참조 변수[0] = 값1; 
//  참조 변수[1] = 값2; 
//  참조 변수[2] = 값3; 
//  ... 
//  참조변수[n-1] = 값n;
//   => 이 방법은 'new Array()'를 사용하여 빈 배열을 생성하고, 배열의 각 인덱스에 값을 할당하는 방식이다.

// 2. 'new Array(값1, 값2, 값3, ...값n)'을 사용한 배열 생성 ('new Array()'의 인자로 배열 요소들을 나열하여 배열을 생성하는 방법)
//  const 참조 변수 = new Array(값1, 값2, 값3, ...값n);
//   => 이 방법은 'new Array()'의 인자로 배열의 요소들을 나열하여 배열을 생성하는 방식이다.

// 3. 리터럴 표기법을 사용한 배열 생성
//  const 참조 변수 = [값1, 값2, 값3, ...값n];
//   => 이 방법은 가장 간단하고 일반적으로 사용되는 배열 생성 방식으로, 대괄호 '[]'를 사용하여 배열을 리터럴로 정의 한다.

// 방식 1)
const d1 = new Array();
d1[0] = 30;
d1[1] = "따르릉";
d1[2] = true;
console.log(d1) // (3) [30, '따르릉', true]

// 방식 2)
const d2 = new Array(32, "따르릉2", true);
console.log(d2) // (3) [32, '따르릉2', true]

// 방식 3)
const d3 = [33, "따르릉3", true];
console.log(d3) // (3) [33, '따르릉3', true]

// ==> 이렇게 배열을 선언하면 컴퓨터에 저장이 된다. 각각의 데이터는 배열로 나누어진 저장소에 나열되며, 각각의 저장소에는 인덱스 번호(번지수)가 부여된다. 인덱스 번호는 0부터 시작한다
// const arr = 30 "따르릉" true
//     index   0     1     2

// -------------------------------------------------------

// < 배열 객체에 저장된 데이터 불러오기 >
// 배열 객체에 저장된 데이터를 불러올 때는 다음과 같은 기본형을 사용한다
// 참조변수[인덱스 번호];

// ex) 배열객체에 저장된 값들을 모두 출력하는 예제. 3개의 실행문은 모두 같은 결과물을 출력한다
const arr = [20, "꽥꽥이", true];

// 배열객체에 저장된 값들을 모두 출력하는 실행문 1
document.write("<h3>배열값 가져오기-1</h3>");
document.write(arr[0], "<br/>");
document.write(arr[1], "<br/>");
document.write(arr[2], "<br/>");

// 배열객체에 저장된 값들을 모두 출력하는 실행문 2
document.write("<h3>배열값 가져오기-2</h3>");
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i], "<br/>");
}

// 배열객체에 저장된 값들을 모두 출력하는 실행문 3
document.write("<h3>배열값 가져오기-3</h3>");
for (i in arr) {
  document.write(arr[i], "<br/>");
}