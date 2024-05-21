import React from "react";
import { IToDo, toDoState } from "./atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
// 카테고리가 바껴지면 id값도 바껴지게 하려고

// React에서는 가상돔을 사용하다 보니, target보다는 currentTarget 값을 찾아오는 것이 보다 효율적이다

const Todo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log("I wanna to ", newCategory);
  // };
  // 👇🏼
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // const target = event.target as HTMLButtonElement;
    const { name } = event.target as HTMLButtonElement;

    setToDos((oldToDos) => {
      // oldToDos => 기존의 todo(toDoState)를 가져와서
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // console.log(targetIndex);

      const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name };
      console.log(oldToDo, newToDo);

      return oldToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        // <button name="TO_DO" onClick={() => onClick("TO_DO")}>
        <button name="TO_DO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== "DOING" && (
        // <button name="DOING" onClick={() => onClick("DOING")}>
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        // <button name="DONE" onClick={() => onClick("DONE")}>
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;

// {category !== "TO_DO" && <button>ToDo</button>}
// 좌항이 참이면 나오게해라
// 카테고리가 todo가 아니면 <button>ToDo</button> 가 나오게

//-----------------------------------------------------

// 지금 아래 보이는 food라는 배열에서 mango를 빼고, 그 자리에 gim을 넣어라!
const food = ["pizza", "mango", "kimchi", "kimbab"];

// 함수를 사용하는방법
food.splice(1, 1, "gim");
console.log(food); // (4) ['pizza', 'gim', 'kimchi', 'kimbab']

// 함수를 사용하지 않고 변수와 배열만 사용하는 방법
const front = ["pizza"];
const back = ["kimchi", "kimbab"];
const final = [...front, "kim", ...back];
console.log(final); // (4) ['pizza', 'gim', 'kimchi', 'kimbab']
