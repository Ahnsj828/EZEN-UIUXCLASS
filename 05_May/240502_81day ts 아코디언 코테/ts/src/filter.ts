// * 1~100까지의 숫자가운데 홀수만 찾아서 더한 값 도출
//   2) 선언형 방식으로

// const filter = () => {

// }

export const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // if (callback(value, i)) {
    //   result = [...result, value];
    // }
    if (callback(value, i)) result = [...result, value];
  }
  return result;
};
