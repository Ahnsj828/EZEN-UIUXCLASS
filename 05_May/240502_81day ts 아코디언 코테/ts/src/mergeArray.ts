// 중첩배열의 경우 타입정의는 어떻게?
// JS 혹은 TS에서 중첩배열을 사용하는 경우, 타입정의는?
// a라는 배열과 b라는 배열 안에 넣고 싶다면?
// a =[], b=[] / c = [a, b]  => c = [[], []]
// a =[], b=[] / c= [...a, ...b]

export const mergeArray = <T>(...arrays: T[][]): T[] => {
  // 중첩 배열의 타입을 정의하고싶을면 => <T>(...array: T[][])
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const array: T[] = arrays[i];
    result = [...result, ...array];
  }

  return result;
};
