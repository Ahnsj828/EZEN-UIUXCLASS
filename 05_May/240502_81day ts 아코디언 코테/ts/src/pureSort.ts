// 불순함수인 sort함수를 순수함수로

// const pureSort = <T>(array: T[]): T[] => {
//   const deepCopied = [...array];
//   return deepCopied.sort();
// };

export const pureSort = <T>(array: readonly T[]): T[] => {
  const deepCopied = [...array];
  return deepCopied.sort();
};
