// // TS에 기본개념!

// // 1) 타입별칭 => 변수를 생성하듯이 간편하게 사용하고자 쓴다.
// // 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성!
// type User = {
//   // user라는 타입별칭을 만들어서 객체나 함수에 넣고 싶어서
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// };
// // 타입별칭도 객체타입정의할때도 쓸 수 있지만 interface가 의무다! / 타입별칭 남발하지마라

// const user1: User = {
//   id: 1,
//   name: "안성진",
//   nickname: "jin",
//   birth: "00.00.00",
//   bio: "안녕하세요",
//   location: "서울시",
// };
// const user2: User = {
//   id: 2,
//   name: "짱구",
//   nickname: "Zang",
//   birth: "00.00.00",
//   bio: "안녕하세요",
//   location: "도쿄",
// };

// // 타입병칭 사용의 원래 목적?!
// // 최초로 정의된 객체의 모습
// type ICountryCodes = {
//   // Korea: string;
//   // UnitedState: string;
//   // Brazil: string;
//   [key: string]: string; // => 약식의 형식으로 / 이런 형식으로 들어올거야 라는 정의
// }; // => 이런 목적으로 타입별칭을 사용한다
// // 동일한 타입의 패턴을 가져다쓰고자 할때

// const CountryCodes = {
//   Korea: "KO",
//   UnitedState: "US",
//   Brazil: "BZ",
// };

// // type 별칭 vs Interface
// // 1) Interface - 상속의 기능이 있다 : extends
// //   => 객체 지향언어 : class

// // 2) type별칭은 상속의 기능이 없다 - type을 상속받는건없다
// //  => union 타입
// //  => 객체 지향언어에서 class - 객체지향의 언어에 기초

// // Type 호환성
// // 슈퍼타입 & 서브타입
// // Type에 대한 객층구조만 알아도 TS가 난해하지 않다

// let num1: number = 10;

// // 타입 리터럴
// let num2: 10 = 10;
// // => 서열을 가린다면 num1안에 num2를 할당 할 수 있다
// // 👇🏼
// // num1 = num2;
// // num2 = num1; // => 이렇게 하면 오류가 뜬다
// // num1이 슈퍼타입이다 => 슈퍼타입 / num2는 서브타입

// // -----------------------------------------------------------

// interface Animal {
//   // Animal이라는 인터페이스 타입
//   name: string;
//   color: string;
// }
// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let animal: Animal = {
//   name: "기린",
//   color: "yellow",
// };
// let dog = {
//   name: "뽀삐",
//   color: "brown",
//   breed: "진도",
// };

// // 얼핏보면, dog가 animal이라는 객체 혹은 인터페ㅔ이스 타입보다 더 많은 결과값을 가지고 있기 때문에 슈퍼타입이라고 생각 할 수 있다 => X
// // 슈퍼타입 => 많은 값을 가지고 있다는 의미가 아니다
// // 슈퍼타입은 다양한 타입들을 수용할 수 있는 상태여야한다!!
// // dog = animal; // = > 오류가 뜬다
// animal = dog;
// // dog가 breed를 갖고있어서 animal안에 못들어간다 / animal은 dog안에 들어 갈 수 있다 => 그래서 animal이 슈퍼타입

// // ----------------------------------------------------------------------------------------

// // 1) 타입 별칭
// // 2) 타입호환
// // 3) 초과프로퍼티 검사 : 변수안에 담긴 어떤 값 => 자바스크립트라는 프로그래밍 언어는 변수안에 어떤 값이 담겨있으면 그 값을 꺼내서 감사한다 => 이때 타입에 대한 검사도 같이한다
// //   => 과하게 검사한다 해서 초과프로퍼티 검사라고 한다
// // => 함수

// interface Book {
//   name: string;
//   price: number;
// }
// interface ProgramingBook {
//   name: string;
//   price: number;
//   skill: string;
// }
// //   => Book이 슈퍼타입이다

// let programingBook = {
//   name: "자바스크립트",
//   price: 33000,
//   skil: "react.js",
// };
// // let book2: book = {
// //   name: "자바스크립트",
// //   price: 33000,
// //   skil: "react.js",
// // };
// // 👇🏼
// let book2: Book = programingBook;
// //  => 이렇게 하면 오류가 사라진다
// // 슈퍼타입은 서브타입을 수용할 수 있다 / 슈퍼타입인 Book은 서브타입인 ProgramingBook을 수용할 수 있다
// // let book2: book = {} 그런데 이렇게 하면 오류가뜬다(: book)
// // 굳이 하지 않아도 될거를 해서 / 초과

// // 처음에 처럼하면 일일이 하나씩 꺼내서 검사하는건데 링크를 지정(programingBook)하면 그렇지 않아서 오류가 안뜨는거다
// // 초과 프로퍼티 검사를 벗어날 수 있는거다

// let book = programingBook;
// const func = (book: Book) => {};
// // func({
// //   name: "자바스크립트",
// //   price: 33000,
// //   skil: "react.js",
// // };)
// // => 오류가 뜬다
// // 각각의 타입을 꺼내서 정의하기 때문에

// // 👇🏼초과프로퍼티 검사를 우회해서 해결
// func(programingBook);

// // ----------------------------------------------------------------------------------------

// // 1) 타입 별칭
// // 2) 타입호환
// // 3) 초과프로퍼티 검사
// // 4) 대수타입 (*여러개의 타입을 합성해서 만드는 타입)
// //   - Union 타입 : 합집합 (수학시간에 합집합 개념이랑 다르다)
// //   - Intersaction 타입 : 교차로 : 교집합 (수학시간에 교집합 개념이랑 다르다)

// // let a = 1; // a라는 변수명 안에는 숫자가 들어올 수 있다
// // let a: number = 1; // 이렇게 해줄 수 있다

// // a = "hello"; // 이렇게 하면 오류가 뜬다 / a는 숫자인데 문자로 추가해줘서 / 공통점이 없어서

// // // 👇🏼  이렇게 해주면 된다
// // let a: number | string = 1;
// // a = 2;
// // a = "hello";
// // //   =>  Union 타입 : 합집합

// // a = true; // 이렇게 하면 오류가 뜬다 / a는 숫자, 문자인데 boolean 추가해줘서 / 공통점이 없어서

// // 👇🏼  이렇게 해주면 된다
// let a: number | string | boolean = 1;
// a = 2;
// a = "hello";
// a = true;
// //   =>  Union 타입 : 합집합

// let arr: (number | string | boolean)[] = [1, "hello", true];
// // => 배열안에 들어가있는 요소들을 union 타입으로 정리했다

// // Interface의 경우는 하나의 프로젝트 파일 내 동일한 이름을 갖고 있는 타입정의가 있더라도 충돌되지 않는다!!
// //  => 아무리 충돌되지 않는다 해도 남발하진마라

// // type별칭의 경우는 동일한 네임이 사용된 경우라면 재사용이 불가

// // type Dog = {
// //   name: string;
// //   color: string;
// // };  //=> 이렇게 하면 오류 뜬다 /  위에서 사용해서

// // 👇🏼interface 사용하면 오류가 사라진다

// // interface Dog {
// //   name: string;
// //   color: string;
// // } //=> 이렇게 하면 오류 뜬다 /  위에서 사용해서

// type Dog01 = {
//   name: string;
//   color: string;
// };
// type Person01 = {
//   name: string;
//   language: string;
// };
// type Union01 = Dog01 | Person01;

// // let union1 = {
// //   name: "",
// //   color: "",
// // };
// // 👇🏼 이렇게 할 수 있다
// let union1: Union01 = {
//   name: "",
//   color: "",
// };

// // let union2 = {
// //   name: "",
// //   language: "",
// // };
// // 👇🏼 이렇게 할 수 있다
// let union2: Union01 = {
//   name: "",
//   language: "",
// };

// // let union3 = {
// //   name: "",
// //   color: "",
// //   language: "",
// // };
// // 👇🏼 이렇게 할 수 있다
// let union3: Union01 = {
//   name: "",
//   color: "",
//   language: "",
// };

// // let union4 = {
// //   name: "",
// //   color: "",
// //   language: "",
// // };
// // 👇🏼그럼 얘도 가능한가?
// // let union4: Union01 = {
// //   name: "",
// // };
// //  => 이렇게 하면 오류가 된다  => Dog01과 Person01의 교집합적인 요소로 생각하면 안된다 별개로..

// // 4) 대수타입 (*여러개의 타입을 합성해서 만드는 타입)
// //   - Union 타입 : 합집합
// //   - Intersaction 타입 : 교차로 : 교집합 (수학시간에 교집합 개념이랑 다르다)

// type Intersaction = Dog01 & Person01; // => &  교집합형식

// // let union5: Intersaction = {
// //   name: "",
// // }; // => 오류 뜬다
// // 👇🏼
// let union5: Intersaction = {
//   name: "",
//   color: "",
//   language: "",
// }; // 모든 요소를 갖고 있어야한다

// // ----------------------------------------------------------------------------------------

// // 1) 타입 별칭
// // 2) 타입호환
// // 3) 초과프로퍼티 검사
// // 4) 대수타입 (*여러개의 타입을 합성해서 만드는 타입)
// //   - Union 타입 : 합집합 (수학시간에 합집합 개념이랑 다르다)
// //   - Intersaction 타입 : 교차로 : 교집합 (수학시간에 교집합 개념이랑 다르다)
// // 5) 타입탄언 (*단언 : 약속)
// //   - useState("")  처음에는 초기값으로 빈문자열로 주다가 나중엔 무언가를 준다
// //   리터럴 형식의 문자로 타입 바뀐다
// //  현재는 비어있지만 나중에는 타입이 바뀔때 / 현재는 타입이 정해져 있지 않을때
// //    [] => 약속(*단언) =>  내부에 객체가 들어갈 배열의 타입으로 바뀔거야!!

// // Todolist.tsx에서 <span>{errors.password1?.message as string}</span>에 as를 준게 그런거다
// // 메세지가 나올지 안나올지 모른다 / undefined였다가 string이 될 수 있다 / 이런타입이 나올수 있다 라고 할때 => 단언

// // < React.js 타입에 대한 정의 80% (알아둬야할것) >
// // 함수형 컴포넌트 : 매개변수타입 => props => 객체
// // interface
// // 반환값 : 타입 => void
// // 고차함수 : type별칭을 활용해서 타입시그니처
// // 함수타입 : 매개변수로 들어와야하는 타입 불분명 : <>타입
// // 아직 결정되지는 않았지만, 앞으로 이러한 타입이 될거야 라고 하는거 => as 타입단언

// // any

// interface Person02 {
//   name: string;
//   age: number;
// }

// // 사용자가 어떤 버튼을 클릭한다면, 아래 빈 객체안에 name, age값이 포함될 예정
// // let person = {};
// // 👇🏼 그럼 이렇게 하면되나?
// // let person: Person02 = {}; // 이렇게 하면 오류가 뜬다
// // 👇🏼 아니다 이렇게 하는거다
// let person = {} as Person02; // 이렇게 하면 된다

// person.name = "";
// person.age = 23;
// // 이렇게 나중에 값이 들어오는 상태에도 된다

// // 타입단언을 활용해서 초과 프로퍼티를 해결할수 있다!

// // 타입단언 사용하기 위해서는 다음과 같은 조건이 필요하다!!!
// // value as type define
// // value & type => 슈퍼 및 서브타입 구조를 띄고 있어야한다!!
// // 같은 형제 타입끼리는 타입단언 못쓴다 => ex) number랑 sting 같이 못쓴다

// let num4 = 10 as never;
// let num5 = 10 as unknown;

// // let num6 = 10 as string;

// // 좋지 않은 타입 정의 방법 => any
// //  다중 타입 단언
// let num7 = 10 as unknown as string;
// //  => 이렇게 써도 되긴 하지만 가급적이면 찾아서 써라 /

// // ====================================================================================================
