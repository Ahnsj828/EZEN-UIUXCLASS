// fold 어떤 배열을 찾아와서 배열값을 더해주는 기능을 작동하는 함수

// const fold = (array, callback, initvalue) => {
//   //  배열과 배열을 넣어서 작동하는 콜벡함수
//   // initvalue 초기값
// };
// 👇🏼
// const fold = <T>(
//   array: T[],
//   callback: (result: T, val: T) => T,
//   initvalue: T
// ) => {
//   //  배열과 배열을 넣어서 작동하는 콜벡함수
//   // initvalue 초기값
//   // T[] 타입변수
//   // <T> 타입 변수에 대한 선언

//   let result = initvalue;
//   for (let i = 0; i < array.length; i++) {
//     // 배열의 갯수만큼 증가 반복하겠다
//     const value = array[i];
//     result = callback(result, value);
//     // callback함수의 결과값을 result에 넣겠다
//     // (result, value) result 초기값, 실제 배열안에 들어가는 값
//   }
//   return result;
// };
// 👇🏼
export const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initvalue: T
) => {
  let result = initvalue;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};
