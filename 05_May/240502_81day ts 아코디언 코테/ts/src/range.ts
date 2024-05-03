// ranage = 범위
// const range = (from, to) => {

// };
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
// :number[] => 숫자가 담긴 배열의 형태를 도출하기 위해
// 배열안에서 전개연산자 구문을 쓰는 이유
// 재귀함수로
