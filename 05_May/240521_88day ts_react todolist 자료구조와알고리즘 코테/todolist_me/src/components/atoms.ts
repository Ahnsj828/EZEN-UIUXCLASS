import { atom } from "recoil";

export interface IForm {
  toDo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE"; // 타입 리터럴형식으로 줬다 / 셋중 하나면된다
}

const toDoState = atom<[ITodo]>({
  key: "toDo",
  default: [],
});
