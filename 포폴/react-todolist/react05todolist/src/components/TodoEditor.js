// import React from "react";
import "./TodoEditor.css";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 할일 작성하기📌</h4>
      <div className="editor_wrapper">
        <input placeholder="해야할 일은?" />
        <button>추가하기</button>
      </div>
    </div>
  );
};

export default TodoEditor;
