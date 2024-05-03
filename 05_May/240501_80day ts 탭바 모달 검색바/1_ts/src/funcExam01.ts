// 프로그래밍 언어 2가지 실행관련 지향 방식
// < 실행문 방식 > : c언어 / c++ / c#
// 개발자가 코드를 입력하면 => 실행만 한다
// 요즘 컴퓨터 device 매체의 성능이 좋아지기 시작!!
// 컴퓨터가 처리할 수 있는 능력 한계가 있었다 => 메모리 && cpu 도 발전했다
// 디바이스 매체가 좋아질 수록 프로그래밍 언어 능력도 올라갔다
// const arrow1 = (a, b) => {
//   return a + b;
// };
const arrow1 = (a: number, b: number): number => {
  return a + b;
};

// < 표현식문 방식 > return을 사용하지 않는다
// 어떠한 프로그래밍 코드를 실행함과 동시에 값을 반환(*전달)할 수 있는 언어 뒤이어 많이 선보이게 된다
// 근현대적언어 - JS & TS & python => 얘네가 나올때쯤에는 기술이 발달하고 컴퓨터 사양들이 좋아져서
const arrow2 = (a: number, b: number): number => a + b;

// return이 없으면 {}가 없어도 된다 => 반환문이 없다 => 반환할게 없다

// < 실행문 && 표현식문 > => 다중패러다임 언어
const arrow3 = (a: number, b: number): number => {
  return a + b;
};
const arrow4 = (a: number, b: number): number => a + b;
// 둘다 가능하다

// < 고차함후 && 클로져 > 이해하려면 위를 이해해야 한다

// 표현식 VS 표현식문
// 인강에서 표현식이라는 단어를 사용했다고한다 근데 그 안에 return이 들어갔었다
// 표현식과 표현식문은 다른거다

const a = 1;
const b = 0;

// < 표현식 >
// 도출된 결과값을 출력하는 기능까지만 하는 문장
if (a > b) {
  console.log("a > b");
}

// < 표현식문 >
// 표현식을 통해서 도출된 결과값을 어딘가에 담아서 관리할 수 있는 종합적인 문장?!
const isGreator = (a: number, b: number): boolean => a > b; // => 표현식문
// a가 b보다 크다면 true 값을 반환, a가 b보다 크지 않면 false 값을 반환
// (a: number, b: number): boolean => a > b; 표현식을 통해서 반환될 값이 어딘가에 담겨져 있다
