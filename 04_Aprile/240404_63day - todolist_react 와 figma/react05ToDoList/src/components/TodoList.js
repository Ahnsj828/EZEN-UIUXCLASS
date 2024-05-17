import { useState } from "react";
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

const TodoList = ({ todo, onUpdate, onDelete }) => {
  //   console.log(props);
  //   console.log(todo);
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

  return (
    <div className="TodoList">
      <h4>Todo List 🎁</h4>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
// map()함수 앞에 있는 배열을 새로운 배열로 만들때 사용
