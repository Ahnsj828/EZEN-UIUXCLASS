// // < 함수의 타입정리 & 제네릭 타입 >
// // 함수는 어떤 값(의 타입)을 받아서 어떤 값(의 타입)을 반환 하기 위해 있다

import { profile } from "console";

// // 기본적인 함수
// // const func = (a, b) => {} // 오류난다
// // 함수를 정의하면 매개변수도 타입도 정의해야한다
// const func = (a: number, b: number): number => {
//   // 두 숫자를 매개변수로 받았다
//   return a + b; // 이것도 숫자라서
//   // const func = (a: number, b: number):number => 얘도 숫자로 타입정의했다
//   // 물론 안해줘도 된다. 추론이 가능해서 / 그치만 정석은 정의해줘야한다
// };

// //

// // 1) 함수에 기본 매개변수를 설정할 때
// const introduce = (name = "Ahn") => {
//   // name 이라는 인자값 / "Ahn"은 string의 sub타입을 갖고있다
//   // (name: number = "Ahn") 이렇게 하면 오류가 나온다 / "Ahn"이 string타입인데 : number라고 해서
//   console.log(`name:${name}`); //문자와 변수를 같이 쓰려면 템플릿리터럴 문법을 써야한다
// };
// introduce(); // ()안에 들어갈 매개변수는 문자 밖에 안된다 / 숫자는 안된다
// // introduce(1); => 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

// //

// // property?.value => 리액트는 가상돔을 사용하고 마운팅될때..
// // ?. => 단락회로평가로 정의해줘야한다
// // 값이 있을때는 value로 체크하겠지만 값이 없을때도 존재한다

// // 2) 함수에 선택적 매개변수를 설정할 때
// const introduce01 = (name = "Jane", tall?: number) => {
//   //tall?: number에 ? => 선택적 매개변수 / 이 값은 주지 않아도 되고 주면 좋고
//   console.log(`name: ${name}`);
//   console.log(`tall: ${tall}`);

//   // // 타입가드 = 타입 좁혀나간다는 의미!!
//   // console.log(`tall: ${tall + 10}`); // 선택적 매개변수를 활용했을때 나오는 오류
//   // // 값을 주게되면 숫자가 될텐데 / 값을 주지 않았다는 타입 => undefined
//   // // 'tall'은(는) 'undefined'일 수 있습니다.ts(18048)
//   // // (parameter) tall: number | undefined

//   // 👇🏼 이렇게 하면 에러가 사라진다

//   if (typeof tall === "number") {
//     console.log(`tall: ${tall + 10}`);
//   }
// };

// // 선택적 매개 변수는 가장 마지막에 써야한다
// const introduce02 = (name = "Jane", age: number, tall?: number) => {
//   // const introduce02 = (name = "Jane", tall?: number, age: number) 이렇게 쓰면 안된다
//   console.log(`name: ${name}`);
//   console.log(`tall: ${tall}`);
//   if (typeof tall === "number") {
//     console.log(`tall: ${tall + 10}`);
//   }
// };

// //

// // 3) 함수에 전개연산자 형식의 매개변수 => rest 매개변수를 설정 할 때
// const getSum = (...rest: number[]) => {
//   let sum = 0;
//   rest.forEach((it) => (sum += it));
//   return sum;
// };

// getSum(1, 2, 3);

// // (...rest) =>   (...rest: number[])  이렇게 해줘야한다
// // Rest 매개 변수 'rest'에는 암시적으로 'any[]' 형식이 포함됩니다.ts(7019)
// // => 어떠한 값들이 들어 있는 배열
// //  배열의 형식으로 만들겠다는 뜻이다 / 배열화 시킨다 라는 뜻이다
// // 매개변수값들을 하나의 배열화 시키겠다는 뜻이다

// // 👇🏼
// // 👇🏼
// // 함수의 매개변수의 타입을 정할 때 가장 기본적이고 가장 빈번하게 나오는것들

// //

// // 4) 함수 타입 표현식 => 함수 타입별칭
// //  - interface 에서 extends라는 확장성을 갖을 수 있다 || type 대수타입 유니온 / 인터섹션
// //  - interface : 동일한 인터페이스명 사용가능 || type 동일한 타입명 사용불가능

// type Add = (a: number, b: number) => number;
// // 타입별칭은 변수처럼 생각하면된다 / 변수 지정한다라고...

// // const add = (a, b) => a + b;
// // 둘이 동일한 형태를 띄고 있어서
// // 👇🏼 이렇게 해도 된다

// const add: Add = (a, b) => a + b;
// // (a, b)에 a랑 b에 타입정의 하지 않아도 되고 a + b에 a랑 b에 타입정의 하지 않아도 된다

// // 타입별칭을 너무 남발하진말아라
// // 쌤 - 타입별칭을 안쓰고 다 지정해서 쓰는편이다  =>  하나만 쓸때는 그냥 다 써주지만 여러개일때는 타입별칭 사용한다

// //

// // but, 꼭 써야할때 / 타입별칭을 써야할때 이럴때 힘을 발휘한다
// // const sub = (a, b) => a - b;
// // const multiply = (a, b) => a * b;
// // const divide = (a, b) => a / b;

// // 👇🏼
// type Add0 = (a: number, b: number) => number;
// const sub: Add0 = (a, b) => a - b; // const sub: Add0 = (a: number, b: number) => a + b;
// const multiply: Add0 = (a, b) => a * b; // const multiply: Add0 = (a: number, b: number) => a + b;
// const divide: Add0 = (a, b) => a / b; // const divide: Add0 = (a: number, b: number)=> a + b;

// // 5) 함수 타입표현식 => 호출 시그니처 형식
// type Operation = {
//   (a: number, b: number): number;
//   name: string; // 추가적으로 줄꺼야 라는 의미
// };
// const add2: Operation = (a, b) => a + b;
// add2.name; // add2 한테 name을 줄때

// //

// // 6) 함수 타입호환성
// // 특정 함수의 타입을 다른 함수의 타입으로 포함시킬 수 있는가를 따져보는 개념

// type A = () => number; // 슈퍼타입
// type B = () => 10; // 서브타입

// // let a = () => 10;
// // let b = () => 10;
// // 👇🏼
// let a: A = () => 10;
// let b: B = () => 10;

// a = b; // 이건 되는데
// // b = a; //이건 안된다
// // => a는 슈퍼타입인데 b는 서브타입이라서

// //

// // 7) 함수 타입호환성 > 매개변수 기준 (매개변수의 개수 같은 경우!!) / downcasting 이 호환되는 유일한 경우
// // 다른거는 다 이해가 가는데 이건 이해를 잘 못하는 경우가 많다 / 이거는 여러번 보기
// type C = (value: number) => void;
// type D = (value: 10) => void;

// // 서브타입 아이템을 슈퍼타입의 아이템을 할당하는 행위 : upcasting
// // 슈퍼타입 아이템을 서브타입의 아이템에 할당하는 행위 : downcasting //  이걸 많이 사용했었다

// // let c = (value) => {};
// let c: C = (value) => {}; // c라는 함수 타입을 정의하기 위해 : C
// // let d = (value) => {};
// let d: D = (value) => {}; // d라는 함수 타입을 정의하기 위해 : D

// // c = d; // 오류가 뜬다
// // 'D' 형식은 'C' 형식에 할당할 수 없습니다.
// //   'value' 및 'value' 매개 변수의 형식이 호환되지 않습니다.
// //     'number' 형식은 '10' 형식에 할당할 수 없습니다.ts(2322)
// d = c;

// type Animal = {
//   name: string;
// }; // 슈퍼타입
// type Dog = {
//   name: string;
//   color: string;
// }; // 서브타입
// // 슈퍼타입은 많이 갖고있어서가 아니라 포용할수 있냐에 따라
// // 받아줄 수 있는 범위가 크냐? => 슈퍼타입
// // Animal은 name만 있으면 다 받아준다 / Dog는 name이랑 color가 있어야 받아준다

// let animalFunc = (animal: Animal) => {
//   console.log(animal.name);
// };
// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // animalFunc = dogFunc; // dogFunc에는 색성이 있는데 color가 없는 animalFunc한테 받아달라 하니 오류가 뜨는거다
// dogFunc = animalFunc;
// // downcasting(슈퍼타입 아이템을 서브타입의 아이템에 할당하는 행위) 되는 경우

// //

// // 8) 함수 타입호환성 > 매개변수 기준 (매개변수의 개수 다른 경우!!)
// type Func1 = (a: number, b: number) => void; // 두개의 매개변수를 받은 타입
// type Func2 = (a: number) => void; // 한개의 매개변수를 받은 타입

// let func1: Func1 = (a, b) => {};
// let func2: Func2 = (a) => {};

// func1 = func2; // func2을 func1이 못받는다
// // func2 = func1  // func1을 func2이 못받는다

// //

// // 9) 함수 오버로딩 (오버로드 - 스타에서 저그중 둥둥 떠다니는애) / 먼저 지정하는거
// // *익명함수x = 화살표함수 x
// // function
// // 쌤이랑 수업할때는 이걸 마주할 일이 별로 없다 => 이유: 쌤은 거의 화살표함수만써서

// // 함수 오버로드
// function func01(a: number): void; // 매개변수를 하나를 받는 경우
// function func01(a: number, b: number, c: number): void; // 매개변수를 세개를 받는 경우

// // 함수 구현
// // function func01(); // 이걸쓰니까 위에 오류가 사라졌다 => 이유: 함수오버로드를 찾아서
// // function func01(a: number) {
// //   console.log(a * 20);
// // }
// function func01(a: number, b?: number, c?: number) {
//   // 필수 매개변수 a: number /  선택 매개변수 b?: number, c?: number
//   if (typeof b === "number" && typeof c === "number") {
//     console.log(a + b + c);
//   } else {
//     console.log(a * 20);
//   }
// }

// // 함수 호출
// func01(1);
// // func01(1, 2); // 이렇게 하면 오류가 뜬다
// func01(1, 2, 3); // 이건 허용해준다
// //  => 매개변수가 하나거나 세개여야한다

// //

// // 10) 함수 구현 타입정의 => 커스터마이징 => 사용자 정의 타입 가드
// // 함수의 타입을 커스터 마이징을 할수 있는데 정식 명칭은 사용자 정의 타입 가드이다
// // 제약요건을 만드는데 제약요건이 되면 이렇게 해

// type Dog01 = {
//   name: string;
//   isBark: boolean;
// };

// type Cat01 = {
//   name: string;
//   isScratch: boolean;
// };

// type Animal01 = Dog01 | Cat01;
// // 유니온 타입
// // Dog01도 만족 시킬수 있고 Cat01도 만족 시킬수 있고 Dog01도과 Cat01을 합한것도 만족 시킬수 있고

// const warning = (animal: Animal01) => {
//   // console.log(animal.isBark);
//   // 'Animal01' 형식에 'isBark' 속성이 없습니다.
//   // 'Cat01' 형식에 'isBark' 속성이 없습니다.ts(2339)
//   // 👇🏼
//   if ("isBark" in animal) {
//     // animal안에 "isBark"가 있다라고 한다면
//     console.log(animal.isBark);
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch);
//   }
// };

// // 이렇게도 할 수 있다

// const isDog = (animal: Animal01) => {
//   // return animal.isBark; // 오류가 뜬다
//   // 'Animal01' 형식에 'isBark' 속성이 없습니다.
//   // 'Cat01' 형식에 'isBark' 속성이 없습니다.ts(2339)
//   // 👇🏼
//   return (animal as Dog01).isBark;
// };

// // ====================< 제네릭 타입 개념 복습 >====================
// // Generic => General(*종합적인) : General Hospital = 종합병원
// // 제네릭 타입을 사용하는 이유 : 현재 시점에서는 어떤 타입의 변수 및 state가 들어올지 모르고 있는 상태에서 우선, 타입을 정의해야하는 경우!!!
// // 사용자한테 값을 받는데 숫자도, 문자도, 특수문자도 가능한 상태에 사용

// // 반론제기!! => 어떤 값이 들어올지 미정일때 타입의 cheat key인 any 를 사용해도 되지않냐?

// const func02 = (value: any) => {
//   return value;
// };

// let num = func02(10);
// let string = func02("string");

// num.toUpperCase(); // toUpperCase소문자를 대문자로 / num은 숫자인데 문자열로 주는데 오류가 안뜬다고?
// //  => any의 문제점이다!!

// const func02plus = (value: unknown) => {
//   return value;
// };
// let num2 = func02plus(10);
// let string2 = func02plus("string");

// // num2.toUpperCase(); // 오류가 뜬다
// // num.toFixed();
// // toFixed는 정수에 쓸수 있다 / 10은 정수다 /  근데 안된다
// // 👇🏼

// if (typeof num === "number") {
//   num.toFixed();
// }

// //

// // const func03 = (value) => {     => 타입 변수를 정해줘야한다
// const func03 = <T>(value: T): T => {
//   // => 이게 정석이다
//   //  => <T> 타입 변수에 대한 선언
//   return value;
// };
// let num03 = func03(10);

// //

// const func04 = <T>(value: T): T => {
//   return value;
// };
// let arr = func04([1, 2, 3]); // 숫자를 갖고 있는 배열이야

// // 함수안에 직접적으로 타입을 명시하는 경우!
// // 타입에 대해 명시 할 수 있다
// const func04plus = <T>(value: T): T => {
//   return value;
// };
// let arrplus = func04plus<[number, number, number]>([1, 2, 3]); // 숫자를 갖고 있는 배열이야

// // 제네릭 타입 응용_1!!
// const swap = <T>(a: T, b: T) => {
//   return [b, a]; // 배열로 반환 / a를 b인덱스 값으로 반환 / b를 a인덱스 값으로 반환
// };
// const [a01, b01] = swap(1, 2);
// // 구조분해할당으로

// // 반론제기!! 타입변수 선언!! => 변수 타입이 꼭 하나라는 법이 있나?
// // const swap2 = <T>(a: T, b: T) => {
// const swap2 = <T, U>(a: T, b: U) => {
//   return [b, a]; // 배열로 반환 / a를 b인덱스 값으로 반환 / b를 a인덱스 값으로 반환
// };
// const [a02, b02] = swap2("1", 2); // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// // 제네릭 타입 변수를 복수로 주면된다

// //

// // 제네릭 타입 응용_2!!
// const returnFirstValue = (data: number[]) => {
//   // (data) data는 배열로 줘야된다(return data[0] 이것때매)
//   return data[0];
// };

// // 만약 배열에 어떠한 값이 들어올지 모르는 상황이라면
// const returnFirstValue2 = <T>(data: T[]) => {
//   return data[0];
// };

// const num05 = returnFirstValue2([0, 1, 2]);
// const str05 = returnFirstValue2([1, "Hello", "World"]);

// //

// // 제네릭 타입 응용_3!!
// const returnFirstValue01 = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };

// //

// // 제네릭 타입 응용_4!!
// // const getLength = (data) => {   // 배열이거나 문자열이거나 객체의 온점표기법일때
// const getLength = <T extends { length: number }>(data: T) => {
//   // extends 확장성으로 / length: number 이 있으면 다 받아준다는거다
//   data.length; // length 배열의 아이템 갯수를 가져오거나, 문자열을 가져오거나
// };

// getLength("123");
// getLength([1, 2, 3]);
// getLength({
//   length: 2,
// });
// //  => 이렇게는 된다
// // getLength(null);
// // getLength(undefined);
// //  => 이렇게는 안 된다

// =============================================================================

// // < 제네릭 타입 응용 >

// // React.js 사용하면서 => JSX 문법을 반복실행.처리 => 가장 빈번하게 사용하는 함수 : map 함수
// // 반복실행에 대한 속도가
// // map이 타입정의 허들이다
// // map 함수 - 기존의 배열을 가져와서 어떤 연산작업 후 새로운 배열을 생성 하기 위한 목적!
// // a= [1, 2, 3, 4]     =>     b= ["1", "2", "3", "4"]   타입이 바꼈다   =>  이럴때 제네릭 사용하는게 가장 좋다

// const arr: number[] = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
// // newArr = [2, 4, 6]

//

// // *기본적인 map 매서드 타입을 unknown으로 정의 했을 때
// const map = (arr: unknown, callback: (item: unknown) => unknown): unknown[] => {
//   return [];
// };
// // map함수는 두개의 매개변수를 받는다
// // 1. map 메서드 사용할 대상(배열을 찾아와야한다) => arr
// // 2. 연산을 해야할 함수 => 이것도 배열이다 /그대상을 가져와서 어떤 연산작업을 할지 콜백함수
// //  => 반환할 값도 배열이다
// // 예측이 불가한 값 => unknown => 미정이다

// // 👇🏼

// // * map 매서드 타입을 타입변수를 활용한 제네릭 형식으로 정의 했을 때
// const arr2 = [1, 2, 3];
// const map2 = <T>(arr2: T[], callback: (item: T) => T): T[] => {
//   // (item: T) => arr의 item
//   let result = [];
//   for (let i = 0; i < arr2.length; i++) {
//     result.push(callback(arr2[i]));
//     // 배열에 값을 추가하고싶을 때 => push()
//   }
//   return result;
// };
// // map(arr2, (it) => it * 2); // [2, 4, 6]
// // 배열의 아이템을 찾아서 2를 곱해라

// const arr3 = [1, 2, 3];
// const map3 = <T, U>(arr2: T[], callback: (item: T) => U): U[] => {
//   // (item: T) => arr의 item
//   let result = [];
//   for (let i = 0; i < arr3.length; i++) {
//     result.push(callback(arr2[i]));
//     // 배열에 값을 추가하고싶을 때 => push()
//   }
//   return result;
// };
// map(arr3, (it) => it.toString());

//

// * forEach 매서드 타입 정의
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
// 반복을 시켜줄 배열 / 무슨 반복을 시켜줄지 콜백함수

// map 과 forEach의 차이
// api 데이터를 끌어온다음에 반복적으로 다 2를 곱해야한다면 / 가공의 해야지만 쓸수 있다면 / 반복해서 => forEach
//  => 원본 데이터를 바꿔야하는 상황
// 정렬을 한다거나 / 원본데이터를 가져와서 가공을 해 / 원본데이터를 회손하면 안된다면 => map
// 원본자체를 바꾸기때매 값을 반환하지 않는다

//
//

// < 제네릭 타입 응용 : 인터페이스 >
// 객체 타입 정의할 때 interface사용했었다
interface keyPair0 {
  key: string;
  value: number;
} // 리터럴 형식으로

interface keyPair<K, T> {
  key: K;
  value: T;
} // 제네릭 형식으로  => key에 string와도 되고 boolean와도 되고 다된다
// 제네릭을 interface에 적용한 방식

let keyPair: keyPair<string, number> = {
  key: "key",
  value: 0,
};
// <string, number> => interface를 적용하고자 하는 대상한테도 붙여줘야한다

let keyPair2: keyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
// keyPair0로만 썼었더라면 여기서 재활용 못했다 => keyPair로 해서 재활용 가능했다 => 재활용 가능한 코드는 좋은 코드다

interface Map<V> {
  [key: string]: V; // 객체의 key는 문자가 고정이다
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
}; // => 프로퍼티 개수만 똑같다면 다 가져다 쓸 수 있다

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

// ==>제네릭을 활용한 타입별칭들이였다

//

// < 제네릭 타입 응용 : 인터페이스 >2  -  제네릭 인터페이스를 활용한 또 다른 예제
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// type A = B | C

interface User<T> {
  name: string;
  // profile: Student | Developer; // 이렇게 우회해서 만들 수 도 있다 / 유니온 타입(합집합)으로
  profile: T;
}

const goToSchool = (user: User<Student>) => {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다.");
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
};

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "TS",
  },
};
const studentUser: User<Student> = {
  name: "Jane",
  profile: {
    type: "student",
    school: "school",
  },
};

//
//

// < 제네릭 응용 => 제네릭 클래스 >

// class NumberList {
//   constructor(public list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// } // 숫자 형식의 클래스를 하나 선언했다

// class StringList {
//   constructor(public list: string[]) {}
//   push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// } // 문자 형식의 클래스를 하나 선언했다

// => 같은 형식인데 이렇게 두개를 만드는게 맞는걸까?

// 👇🏼이렇게 하면된다

class List<T> {
  constructor(public list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2", "3"]);
