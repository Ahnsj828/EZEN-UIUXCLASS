import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  toDoList: string[]; // 배열
  onDelete: (todo: string) => void; // 함수
  // onDelete: () => void; =>값을 반환하지 않는 함수다
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {/* <TodoItem label="React 공부하기" />
      <TodoItem label="TypeScript 공부하기" />
      <TodoItem label="운동하기" /> */}
      {toDoList.map((todo, idx) => (
        <TodoItem key={idx} label={todo} onDelete={() => onDelete(todo)} />
      ))}
      {/* map => 모든값을 하나씩 끄집어낸다 */}
    </Container>
  );
};

export default ToDoList;
