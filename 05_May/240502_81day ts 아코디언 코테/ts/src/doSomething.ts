import { ResultType } from "./tuple";

// Fetch 함수 공부하기전에 Promise 객체를 배웠다
// Promise 객체
// Promise 객체 를 데이터를 받아서 yes냐 no냐 할때 썼었다
// 정상적인 외부데이터를 수신할 수 있을때 : try문
// 정상적인 외부데이터를 수신이 불가할 때 : catch문
// false, 왜 오류가 발생했는지 에러메세지

const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch (e: unknown | any) {
    return [false, e.message];
  }
  // finally도 있는데 걔는 옵셔널한거라 있어도없어도 그만
};
