// 함수를 활용해서 객체를 만든다?
// 객체? => interface
interface keyValueType {
  [key: string]: string;
  // 어떤값을 추출해서 key로
}

// const makeObject = (key: string, value: string): keyValueType => {
//   return { [key]: value };
// 	// 객체에서 []표기법 사용해서 추출
// };

// 👇🏼 표현식문으로

// 반환해야 할 값이 존재하는데, 굳이 해당 함수의 문법을 표현식문으로 작성해주고 싶은경우, 결과값 부분에 소괄호() 처리를 해서 해당값이 반환값이라는 것을 알려줘야한다
const makeObject = (key: string, value: string): keyValueType => ({
  [key]: value,
  // 객체에서 []표기법 사용해서 추출
  // [key]: value, 얘가 반환값이야 라고 알려주기 위해서 => ()
});
console.log(makeObject("name", "sungjin"));
console.log(makeObject("firstname", "Ahn"));

// 전통적인 함수에서 this 객체가 의미하는것은 => 현재 이벤트가 발생된 요소 이거나 혹은 class함수에서 this객체가 의미하는 것은 => 인스턴스 객체 안에서 어떤 키를 지칭하고자 할 때 => this객체를 사용한다

// this객체는 화살표 함수에서는 사용불가!!
// 사용을 하면 코드가 멈추는가?
// no! this객체가 가르키는 것이 window객체이기 때문에 원하는 결과값이 나올 수 없다
