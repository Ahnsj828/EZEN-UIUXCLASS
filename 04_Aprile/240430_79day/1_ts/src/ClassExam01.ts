// TS에서 class를 생성하거나 상속하거나 받는 개념 거의 동일하나, 살짝 "접근제어자 + 타입정의"만 상이함!
// 거의 똑같다 근데 "접근제어자 문법 + 타입정의"가 들어간다

class Employee {
  // // 필드
  // // name: string; // 자동으로 public으로 되어있다
  // // public name: string; // 이렇게 줘도 된다
  // // private name: string; // private으로 바꾸면 안된다
  // protected name: string; // private으로 바꾸면 안된다
  // // age: number; // 자동으로 public으로 되어있다
  // public age: number;
  // // position: string; // 자동으로 public으로 되어있다
  // public position: string;
  // // js에서는 타입이 필요없이 필드정의가 됐는데 ts에서는 해줘야한다

  // 생성자 함수(생성자 함수 정의)
  // constructor(name: string, age: number, position: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.position = position;
  // }
  constructor(
    protected name: string,
    protected age: number,
    protected position: string
  ) {}

  // 매서드
  work() {
    console.log("열심히 일함");
  }
}
// const employeeA = new Employee("짱구", 22, "대리");

const employeeA: Employee = new Employee("짱구", 22, "대리");
//: Employee => 타입정의 => 타입정의가 필요한건아닌데 정석적으로는 이렇게 하는게 맞다(본인이 보기 쉽게 하려고)
employeeA.work();
// employeeA.name = "피구왕통키";
// 값을 바꿀수 있는 이유 => public이라서
// 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.ts(2341) => private라서 밖에서 사용 못한다
employeeA.age = 30;
employeeA.position = "과장";
console.log(employeeA);

// 상속 : 부모요소로부터 어떠한 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무는 없다

// 실행 = implements : 부모로부터 받은 값은 반드시 구현해야하는 의무성이 있다!!! =>  받으면 꼭 실행해ㅑㅇ한다

class ExecutiveOfficer extends Employee {
  // 필드값은 변함없이 그대로 상속
  // super() (super라는 매서드 함수) 사용x, 매서드만 추가
  func() {
    console.log(`${this.name}`);
    // 오류가 뜬다 protected로 하면 에러가 사라진다
    console.log(`${this.age}`);
  }
}

// < TS 접근제어자 >
// public 접근제어자 : 모든 범위에서 접근할 수 있는 제어자 설정
// => class를 생성 기본 세팅된 default 제어자
// private 접근제어자 : class 내부 범위에서만 접근할 수 있는 제어자 설정
//  => 실무에서 대부분 이걸로 만든다
// protected 접근제어자 : class 내부 + 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정
