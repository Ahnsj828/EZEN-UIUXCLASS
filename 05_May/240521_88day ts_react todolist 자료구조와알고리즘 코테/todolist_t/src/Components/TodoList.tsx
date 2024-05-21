import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>Todo's</h1>
      <hr />
      <CreateTodo />
      <ul>
        {toDos.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

// id값을 찾아서 해당되어지는 요소만 카테고리를 바꾸게..
