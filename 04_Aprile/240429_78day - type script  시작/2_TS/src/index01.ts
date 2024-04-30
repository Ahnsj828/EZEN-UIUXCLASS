// // class선언 할때 항상 대문자로 시작해야한다 => JS문법
// class Person1 {
//   name?: string;
//   age?: number;
// }

// let david = new Person1();
// david.name = "jack";
// david.age = 20;

// console.log(david);

// -------------------------------------------------------------------------------
// class를 생성할 때, 반드시 field값을 사전 정의해아만 class를 만들수 있는가? No! => 접근제어자를 활용해서 fiele값을 생략할 수 있다
class Person2 {
  constructor(public name: string, public age?: number) {}
}
// 접근제어자 = public
// public을 쓰면 내부에 가져다쓸 수 있다

// let jack2: Person2 = new Person2();
let jack2: Person2 = new Person2("jack");
// console.log(jack2);

// JS를 활용해서 생성할 수 있는 class 형태의 FM문법
class Person3 {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3("jack", 20);
console.log(jack3);
