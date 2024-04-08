// const studentA = {
//   name: "David",
//   gragd: "A+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };
// // 이 객체를 class를 활용해서 생성할 수 있도록 class를 만들어보기!!
// const studentB = {
//   name: "Julliet",
//   gragd: "B+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };
// // 이런 객체가 천개 만개가 필요하다면 계속 만드는건 비효율적이다

// // 👇🏼

class Student {
  // 객체에서 사용할 수 있는 key값을 먼저 선언!!
  name;
  age;
  grade;
  // 인스턴스객체에 만들어질 key => name age grade
  //   이걸 field 라고한다

  //  < constructor function = 생성자 함수 >
  constructor(name, age, grade) {
    // name, age, grade를 매개변수로 받았다
    this.name = name;
    // name key에 매칭될 value값으로 name
    this.age = age;
    this.grade = grade;
  }

  //  < method >
  stydy() {
    console.log("열심히 공부함");
  }
  introduce() {
    // console.log("안녕하세요!");
    console.log(`안녕하세요. ${this.name}입니다.`);
  }
}
// 객체 붕어빵틀

const studentA = new Student("Romeo", 22, "A");
// Student()라는 프로토타입 함수
// new라는 예약어 뒤에는 대문자가 와야해서 Student
console.log(studentA);
console.log(studentA.stydy());
console.log(studentA.introduce());

// class를 활용해서 Instance 객체를 생성하고자 할 때, 상속!!!
// 상속 = 부모가 자녀에게 물려주는것!
// Class를 생성 및 선언할 때에도 A라는 class가 B라는 class한테 값을 상속!

class StudentDeveloper extends Student {
  // StudentDeveloper라는 또다른 class를 선언
  // Student로부터 상속하려고한다
  // 연장하다라는 뜻의 extends라는 예약어
  // Student한테 상속받는 StudentDeveloper라는 class
  favoriteSkill;

  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
    // name, age, grade는 그대로 상속하고 favoriteSkill추가
    // super(name, age, grade) 이렇게 해야 완전하게 상속을받는다
  }

  programming() {
    // programming이라는 매서드 함수 생성
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    // 문자열과 value값을 같이쓰려고 빽팃과 리터럴 문법을 씀
  }
}
const studentB = new StudentDeveloper("Scharlet", 21, "B+", " JS");
// StudentDeveloper 라는 class 프로토타입
console.log(studentB.introduce());
