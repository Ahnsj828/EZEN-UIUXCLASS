// import { useState } from "react";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";
// 검색란 값 찾아오려고
import "./TodoList.css";
import TodoItem from "./TodoItem";

// rafc
// import React from 'react'

// export const TodoList = () => {
//   return (
// 	<div>TodoList</div>
//   )
// }

const TodoList = () => {
  //   console.log(props);
  //   console.log(todo);

  const { todo } = useContext(TodoStateContext);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
    //   toLowerCase() 소문자로 찾아도 나오게
  };
  //  CRUD  Read

  const analyzeTodo = useMemo(() => {
    // console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  //   filter함수는 (it) => it.isDone가  참인애를 모아서 반환하겠다
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>Todo List 🎁</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
// map()함수 앞에 있는 배열을 새로운 배열로 만들때 사용
