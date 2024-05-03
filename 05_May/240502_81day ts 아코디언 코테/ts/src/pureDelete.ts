// const pureDelete = (array) =>

export const pureDelete = <T>(
  // extends 상속
  // number가 있어야된다라고 정해둔거
  array: readonly T[],
  // readonly 읽기전용값
  cb: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => cb(val, index) === false);
