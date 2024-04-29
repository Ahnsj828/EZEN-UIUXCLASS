// 추상클래스를 생성할 때에는 class 명령어 앞에 abstract 써줘야한다
// 반드시 추상클래스를 만들때에는 하나 이상의 abstract 속성 혹은 매서드(함수)가 존재해야 한다!
// => 추상화 되어야할 속성이 존재해야 한다 => 그래야 추상 클래스 생성 조건이 성립된다
abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}
