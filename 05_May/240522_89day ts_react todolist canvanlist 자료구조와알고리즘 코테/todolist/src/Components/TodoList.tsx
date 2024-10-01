import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState, Categories } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  // const selectorOutput = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);

  // const [todo, doing, done] = useRecoilValue(toDoSelector);

  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget);
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      {/* <CreateTodo /> */}
      {/* <h2>ToDo</h2>
      <ul>
        {todo.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
      {/* 👇🏼 */}
      <CreateTodo />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>ToDo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>

      {/* {category === "TO_DO" &&
        todo.map((aToDo) => <Todo key={aToDo.id} {...aToDo} />)}
      단락회로평가 - 좌항("TO_DO")이 참이면 todo에서 값을 찾아서 전달해라
      {category === "DOing" &&
        doing.map((aToDo) => <Todo key={aToDo.id} {...aToDo} />)}
      {category === "DONE" &&
        done.map((aToDo) => <Todo key={aToDo.id} {...aToDo} />)} */}
      {/* 👇🏼 */}
      {toDos?.map((toDo) => (
        <Todo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default TodoList;

// id값을 찾아서 해당되어지는 요소만 카테고리를 바꾸게..
