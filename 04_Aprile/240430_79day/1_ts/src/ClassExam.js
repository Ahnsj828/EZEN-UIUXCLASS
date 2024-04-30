// JS Class 다시하냐? => TS에서 접근제어자를 설명할거라서
// JS Class 사용하는 목적 : 반복적인 객체를 생성하고자 할 때 비효율성 감소!

// const studentA = {
//   nome: "짱구",
//   grade: "F",
//   age: "10",
//   study() {
//     console.log("공부 잘 안함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };

// const studentB = {
//   nome: "슛돌이",
//   grade: "B+",
//   age: "11",
//   study() {
//     console.log("축구를 좋아함");
//   },
//   introduce() {
//     console.log("공만 주세요!");
//   },
// };

class student {
  // 필드 : key값 / name와 grade와 age가 있어야한다
  // name;
  // grade;
  // age;

  // 생성자함수
  constructor(name, grade, age) {
    // 사용자한테 인자값(name, grade, age)을 받아서
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 매서드 = 매서드는 곧 함수다
  // 객체 안에서 생성되는 함수라서 매서드라고 하는거다
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    // console.log("안녕하세요!");
    // console.log("안녕하세요!" + name);
    console.log(`안녕하세요! ${this.name}입니다`); // 안녕하세요! 짱구입니다
  }
}

const studentA = new student("짱구", "A+", "22");
// 누군가 선언한 class 값을 가져와서 사용하고 싶다면 new라는 예약어가 필수다
console.log(studentA); // student { name: '짱구', grade: 'A+', age: '22' }
// console.log(studentA.study()); // undefined
studentA.study(); // 열심히 공부함
studentA.introduce(); // 안녕하세요!

// JS Class 생성 후 상속기능!!
// 부모가 자식에게 무언가를 주는것

class studentDeveloper extends student {
  // student 상속을 해주고자 하는 class
  // studentDeveloper 상속을 받고자 하는 class

  //필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    // 생성자는 똑같이 적어주고, 추가하고자 하는것도 적어주면된다
    super(name, grade, age);
    // 어떠한 값을 상속받고싶은지 적어야한다
    // name, grade, age를 상속받겠다고 선언해야한다
    this.favoriteSkill = favoriteSkill;
  }

  // 매서드
  progaming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentB = new studentDeveloper("슛돌이", "B+", 21, "JAVASCRIPT");
studentB.progaming();

// TS에서 class를 생성하거나 상속하거나 받는 개념 거의 동일하나, 살짝 "접근제어자 + 타입정의"만 상이함!
// 거의 똑같다 근데 "접근제어자 문법 + 타입정의"가 들어간다
