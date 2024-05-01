// const init = () => {
//   console.log("default initialization finished.");
//   console.log("all initialization finished.");
// };
// => 여기서 반환값이 없다 / return문이 없다 / 반환값이 없다=> void

// const init = (callback: () => void): void => {
//   console.log("default initialization finished.");
//   callback();
//   console.log("all initialization finished.");
// };
// 시그니처 줘도 되고 별칭줘도된다
// callback: () => void 반환값이 없는 함수를 줄거야 라는 시그니처

export const init = (callback: () => void): void => {
  console.log("default initialization finished.");
  callback();
  console.log("all initialization finished.");
};
