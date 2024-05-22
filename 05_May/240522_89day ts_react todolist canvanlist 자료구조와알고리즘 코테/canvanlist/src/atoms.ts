// 여기서 어떠한 값을 원자를 만들어서 찾아가는 역할
import { atom, selector } from "recoil";
// selector 값을 반환하는거

export const minuteState = atom({
  // atom은 객체 타입의 매개변수를 받는다
  key: "minutes",
  default: 0, // 초기값 0
});

export const hourSelector = selector({
  // recoil특직 => key가 먼저와야한다
  key: "hours",
  get: ({ get }) => {
    // 재귀형식
    const minutes = get(minuteState);
    return minutes / 60;
  },

  // set: ({ set }) => {
  //   set(minuteState, 10);
  // },
  set: ({ set }, newValue) => {
    // ({ set }, newValue) 매개변수 두개 줄 수 있다
    const minutes = Number(newValue) * 60;
    // newValue => Number(newValue)
    set(minuteState, minutes);
  },

  // set get이랑 비슷하면서 다르다 / 형식이 같다 / 재귀함수
  // set 특정값으로 바꿔 라는 함수 역할
  // get 연산작업을 거치고 "반환"한다 / return으로 반환해야한다
});
