import { atom, selector } from "recoil";
// selector은 recoil을 통해서 찾아온 함수

// type별칭
// type categories = "TO_DO" | "DOING" | "DONE";

// 문자형 enum 타입
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  // category: "TO_DO" | "DOING" | "DONE";
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  // state값을 받아와서 해당 요소를 변환 후 반환하는 함수
  key: "toDoSelector",
  get: ({ get }) => {
    // get에 할당된 매서드
    // ({ get }) => 객체 안에 함수

    const toDos = get(toDoState);
    const category = get(categoryState);

    // return [
    //   toDos.filter((toDo) => toDo.category === "TO_DO"),
    //   toDos.filter((toDo) => toDo.category === "DOING"),
    //   toDos.filter((toDo) => toDo.category === "DONE"),
    // ];
    // 👇🏼
    // if (category === "TO_DO") {
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // }
    // if (category === "DOING") {
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // }
    // if (category === "DONE") {
    //   return toDos.filter((toDo) => toDo.category === "DONE");
    // }
    // 👇🏼
    return toDos.filter((toDo) => toDo.category === category);
  },
});
