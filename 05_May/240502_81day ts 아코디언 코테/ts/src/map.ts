// * 1~100까지의 숫자들을 제곱한 값들의 합
//  2) 선언형 방식으로

export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  // <T, Q> 제너럴
  let result: Q[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = [...result, callback(value, i)];
  }
  return result;
};
