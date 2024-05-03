// 생성된 숫자를 더하는 함수를 선언.생성 : fold()
// 배열의 값을 찾아와서 더하는 함수

// export const fold = (array) => {
// 	// 배열의 값을 찾아와서 더한다 했으니 매개변수로 배열이 들어와야한다
// }

// export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
// 	// 세가지의 매개변수를 받는 함수
// }

export const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T
) => {
  // let result = initValue
  let result: T = initValue;
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }

  return result;
};
