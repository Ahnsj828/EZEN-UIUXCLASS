// 클래스를 선언할 때, 클래스안에는 속성을 설정하기도 하고 & 매서드를 설정하기도 한다
// 클래스 만드는 이유 => 객체생성
class A {
  // initValue = 1;
  static initValue = 1;
  // static을 사용하면 오류가 안뜬다
}

// class를 객체를 생성하기 위한 하나의 프로토타입
// 그렇다면, class도 곧 객체 아닌가?
// class 내부에 존재하는 속성, 메서드를 활용해서 바깥에서 직접적으로 사용?
// 원칙적으로는 class 내부에 존재하는 속성, 메서드를 바깥에서 사용하려면 인스턴스 객체를 생성한 이후에 해당 인스턴스의 속성 값을 활용해서 사용하는 것이 문법적으로 맞다
// static : 정적인 <=> interactive : 동적인

const initValue = A.initValue; // => 'typeof A' 형식에 'initValue' 속성이 없습니다.ts(2339)라는 오류가 뜬다
console.log(initValue);
