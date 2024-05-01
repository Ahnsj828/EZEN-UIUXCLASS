// 종합병원 General Hospital => General : 종합적인
// 제네릭 (*generics) 타입 : 종합적인 타입!!
//    왜 종합적인 타입이 필요한가?
//      > 배열의 타입을 정의하는데, 배열안에 들어가야하는 타입이 1가지의 종류가 아닌경우, 그리고 배열내 들어가야하는 타입의 형태가 반환되는 경우
//  제네릭 타입은 꼭 배열에만 쓰여야 하는것은 아니다!!  /  함수에서도 사용이 가능하다!

// const arrayLength = (array) => array.length;

// const arrayLength = (array: number[]) => array.length;
// 배열이 숫자인지 문자인지 어떤타입인지 모른경우에는?

// const arrayLength = (array: []): number => array.length;
// : number => length 반환값이 숫자인건 아니까

// 타입변수 => 아직 자료의 형태가 결정되지 않은경우, 일단 변수를 통해서 타입의 자리에 임시적으로 놓는 것을 의미!
// 타입변수는 보통 T로 작성 / 타입변수는  다른 알파벳써도 되지만 관례적으로 T라고 쓴다
// 문장 안에 타입변수가 작성되었다는 선언!!
// < 타입변수 >

// const arrayLength = <T>(array: T[]): number => array.length;
export const arrayLength = <T>(array: T[]): number => array.length;
// <T> 타입 변수에 대한 선언
// const isEmpty = <T>(array: T[]): boolean => arrayLength(array) === 0; // => true가 된다

// const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0; // => 이게 정식 문법이다 /  추론으로 타입변수를 아니까 안써도 되는거다
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0; // => 이게 정식 문법이다 /  추론으로 타입변수를 아니까 안써도 되는거다
// isEmpty boolean값을 받을거다
// 매개변수로 배열이 와야한다
