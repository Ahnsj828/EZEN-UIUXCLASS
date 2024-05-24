// import React from "react";
// import { useRecoilState } from "recoil";
// // useRecoilValue가 값을 찾아오는거 /useRecoilState 값 편집
// import { minuteState, hourSelector } from "./atoms";

// function App() {
//   const [minutes, setMinutes] = useRecoilState(minuteState);

//   // const hours = useRecoilValue(hourSelector);
//   const [hours, setHours] = useRecoilState(hourSelector);

//   const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setMinutes(+event.currentTarget.value);
//     // string형식은 number에 줄수없다 / 초기값은 숫잔데 여기서 문자로 했어 라는 오류가 떴다 => 숫자로 바꿔야한다
//     // 방법 1 => setMinutes(Number(event.currentTarget.value));
//     // 방법 2 => setMinutes(+event.currentTarget.value);
//     //    => + 주면 숫자로 변환시키는 ts문법이다
//   };

//   const onHoursChange = (event: React.FocusEvent<HTMLInputElement>) => {
//     setHours(+event.currentTarget.value);
//     // 숫자 문자에 대한 통일 안해서 => 숫자로 변환 => 앞에 +
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         gap: "10px",
//       }}
//     >
//       <input
//         value={minutes}
//         onChange={onMinutesChange}
//         type="number"
//         placeholder="Minutes"
//       />
//       <input
//         value={hours}
//         onChange={onHoursChange}
//         type="number"
//         placeholder="Hours"
//       />
//     </div>
//   );
// }

// export default App;
//  다지웠다
// ========================================================

import React from "react";
import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
// useRecoilState 값을 가져오고 수정할 수 있는
import { toDoState } from "./atoms";
// import DraggableCard from "./components/DraggableCard";
import Board from "./Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid; // 1/3씩 가져가게 하려고
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
`;

// const Board = styled.div`
//   padding: 20px 10px;
//   padding-top: 30px;
//   background-color: ${(props) => props.theme.boardColor};
//   border-radius: 5px;
//   min-height: 200px;
// `;

// const Card = styled.div`
//   background-color: ${(props) => props.theme.cardColor};
//   color: #000;
//   margin-bottom: 5px;
//   padding: 10px;
//   border-radius: 5px;
// `; // 세부적인 곳

// const toDos = ["a", "b", "c", "d", "e"];

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const onDragEnd = ({ source, destination, draggableId }: DropResult) => {
  //   // console.log("Dragging Finished"); // 드래그를 하고 마우스를 놔버리면 나온다
  //   // console.log(args); // source : {index: 4, droppableId: 'one'} => 애초에 아이템이 있던 곳(0번째에서 4번째로 갔다) / destination: {droppableId: 'one', index: 4} => 아이템 도착 지점 (4번째에서 0번째로 갔다)
  //   if (!destination) return;
  //   //destination 도착값이 없다면 건너뛰겠다
  //   // setToDos((oldToDos) => {
  //   //   // oldTodos 초기값
  //   //   // 원본데이터를 그대로 둔 상태에서 복제를 변형시킬거다
  //   //   const copyToDos = [...oldToDos];
  //   //   copyToDos.splice(source.index, 1);
  //   //   // source안에 index값을 1개 빼서
  //   //   copyToDos.splice(destination.index, 0, draggableId);
  //   //   // 삭제하지 않고 draggableId 넣겠다
  //   //   // draggableId 가져오려고했던 요소
  //   //   return copyToDos;
  //   // });
  // };
  const onDragEnd = (info: DropResult) => {
    // console.log(info);

    const { destination, source, draggableId } = info;

    if (destination?.droppableId === source.droppableId) {
      if (!destination) return;
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      // 보드를 크로스하겠다 / 다른 카테고리로
      if (!destination) return;
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]]; // 시작지점의 보드
        const destinationBoard = [...oldToDos[destination?.droppableId]]; // 도착지점의 보드
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination?.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
          {/* <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DraggableCard key={toDo} toDo={toDo} index={index} />
                  // <Draggable key={index} draggableId={toDo} index={index}>
                  //   {(magic) => (
                  //     <Card
                  //       ref={magic.innerRef}
                  //       {...magic.draggableProps}
                  //       {...magic.dragHandleProps}
                  //     >
                  //       {toDo}
                  //     </Card>
                  //     // {...magic.dragHandleProps}는 드래그를 할 수 있게 하는 요소다
                  //   )}
                  // </Draggable>
                ))}
              </Board>
            )}
          </Droppable> */}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
// <DragDropContext>얘가 가장 밖에 있어야한다
// <DragDropContext>는 onDragEnd 이 props를 써야한다
