import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
// import Title from "./components/Title";
// import TodoItem from "./components/TodoItem";
// import Button from "./components/Button";
// import ToDoList from "./components/ToDoList";
import DataView from "./components/DataView";
// import TextInput from "./components/TextInput";
import Button from "./components/Button";
import ToDoInput from "./components/ToDoInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

// const TodoItem = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 16px;
// `;

// const Label = styled.div`
//   font-size: 1.2rem;
//   flex: 1;
//   /* flex-grow를 축약*/
//   margin-right: 16px;
// `;

// const Label = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 16px;
// `;

// const Button = styled.button`
//   background: #ff5922;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 16px;

//   &:hover {
//     opacity: 0.8;
//   }
//   &:active {
//     box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

// const TodoList = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const DataView = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: #fff;
//   padding: 32px;
//   border-radius: 8px;
// `;

// const TextInput = styled.input`
//   font-size: 1.2rem;
//   padding: 8px;
// `;

// const ToDoInput = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   padding: 20px;
//   background: rgba(0, 0, 0, 0.7);
// `;

// const Contents = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   width: 400px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   align-items: center;
//   background: #fff;
//   border-radius: 8px;
//   padding: 32px;
//   z-index: 1;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 5px;
// `;
const ShowInPutButton = styled.div`
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: 40px;
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([
    "React 공부하기",
    "TypeScript 공부하기",
    "운동하기",
  ]);

  const [showToDoInput, setShowTodoInput] = useState(true);
  // 단락회로평가를 주기 위해서

  const onAdd = (toDo: string) => {
    if (toDo === "") return;
    // 만약 값이 없다면 종료하겠다
    setToDoList([toDo, ...toDoList]);
    // toDo 신규값 / ...toDoList 기존값
    setToDo("");
    // 리셋을시킬거다
    setShowTodoInput(false);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showToDoInput && <ToDoInput onAdd={onAdd} />}
      {/* 단락회로평가 / 좌항이 참이면 실행 */}

      <ShowInPutButton>
        <Button
          label={showToDoInput ? "닫기" : "할 일 추가"}
          color={showToDoInput ? undefined : "#304ffe"}
          onClick={() => setShowTodoInput(!showToDoInput)}
        />
        {/* 삼항조건연산자 */}
      </ShowInPutButton>
    </Container>
  );
}

export default App;

// label={showToDoInput ? "닫기" : "할 일 추가"}  => 삼항조건연산자

// color={showToDoInput ? undefined : "#304ffe"}   => 삼항조건연산자

// onClick={() => setShowTodoInput(!showToDoInput)}   =>  !showToDoInput 반대의 반대라 true / 할일추가 누르면 input창
