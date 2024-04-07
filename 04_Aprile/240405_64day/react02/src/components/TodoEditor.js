import { useState, useRef, useContext } from "react";
// input에 들어가는 state값이 필요해서
// useRef 찾아오는 이유 DOM 컨트롤하려고
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
  //   console.log(onCreate);
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  };
  const onsubmit = () => {
    if (!content) {
      // !content에 아무것도 존재하지 않는다면
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      // 값이 존재한다면 onCreate함수가 실행되게
      setContent("");
    }
  };
  const onkeydown = (e) => {
    if (e.keyCode === 13) {
      // e.keyCode === 13 13번키(enter키)가 눌려지게 된다면
      onsubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기📌</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onkeydown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onsubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
// onKeyDown input태그에 key 가 있고 눌려지게된다면 함수를 실행하게 해줘라
