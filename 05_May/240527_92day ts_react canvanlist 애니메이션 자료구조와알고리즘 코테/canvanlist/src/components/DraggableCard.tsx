import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: Boolean }>`
  /* snapshot.isDragging은 porps다 => 객체 형식이다 => 제네릭을 객체형식으로 줬다 */
  background-color: ${(props) =>
    props.isDragging ? "tomato" : props.theme.cardColor};
  color: #000;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "0 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: IDraggableCardProps) => {
  // console.log(toDo, "has been rendered");
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {/* toDoId + "" => 숫자를 문자로 바꾸는 방법 (숫자 + 문자) */}
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
