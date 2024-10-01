import React from "react";
import { IToDo, toDoState, Categories } from "./atoms";
// import { useRecoilState, useSetRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";
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

      const newToDo = { id, text, category: name as any };
      // console.log(oldToDo, newToDo);

      // return oldToDos;
      // 새로운 값으로 대체해서 보낼거다👇🏼
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      // targetIndex 바로 앞인덱스까지
      // newToDo 새로운 요소 / oldToDos 기존요소
      // ...oldToDos.slice(targetIndex + 1) 새로운 요소 들어오고 그 이후 끝까지
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        // <button name="TO_DO" onClick={() => onClick("TO_DO")}>
        <button name={Categories.TO_DO} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Categories.DOING && (
        // <button name="DOING" onClick={() => onClick("DOING")}>
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        // <button name="DONE" onClick={() => onClick("DONE")}>
        <button name={Categories.DONE} onClick={onClick}>
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

// // 지금 아래 보이는 food라는 배열에서 mango를 빼고, 그 자리에 gim을 넣어라!
// const food = ["pizza", "mango", "kimchi", "kimbab"];

// // 1.함수를 사용하는방법
// food.splice(1, 1, "gim");
// console.log(food); // (4) ['pizza', 'gim', 'kimchi', 'kimbab']

// // 2.함수를 사용하지 않고 변수와 배열만 사용하는 방법 / 전개연산자 구문을 활용해서
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "kim", ...back];
// console.log(final); // (4) ['pizza', 'gim', 'kimchi', 'kimbab']

// // 전개연산자 구문에서 특정 요소를 빼서 교체할때 사용할수 있다
