// TS에 기본개념!

// 1) 타입별칭 => 변수를 생성하듯이 간편하게 사용하고자 쓴다.
// 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성!
type User = {
  // user라는 타입별칭을 만들어서 객체나 함수에 넣고 싶어서
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// 타입별칭도 객체타입정의할때도 쓸 수 있지만 interface가 의무다! / 타입별칭 남발하지마라

const user1: User = {
  id: 1,
  name: "안성진",
  nickname: "jin",
  birth: "00.00.00",
  bio: "안녕하세요",
  location: "서울시",
};
const user2: User = {
  id: 2,
  name: "짱구",
  nickname: "Zang",
  birth: "00.00.00",
  bio: "안녕하세요",
  location: "도쿄",
};

// 타입병칭 사용의 원래 목적?!
// 최초로 정의된 객체의 모습
type ICountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // Brazil: string;
  [key: string]: string; // => 약식의 형식으로 / 이런 형식으로 들어올거야 라는 정의
}; // => 이런 목적으로 타입별칭을 사용한다
// 동일한 타입의 패턴을 가져다쓰고자 할때

const CountryCodes = {
  Korea: "KO",
  UnitedState: "US",
  Brazil: "BZ",
};
