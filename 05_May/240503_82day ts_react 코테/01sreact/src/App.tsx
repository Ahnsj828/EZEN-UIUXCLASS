import React, { useState } from "react";
import styled from "styled-components"; // style 쓸 수 있게 불러오기
import "./App.css";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  font-size: 1.2rem;
  margin: 0 16px;
`;

// const Button = styled.button`
//   background: #ff5722;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 16px;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.7;
//   }
//   &:active {
//     /* 클릭했을때 */
//     box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
//     /* inset 그림자 안쪽으로 / x축 5px y축 5px 그림자길이 10px */
//   }
// `;
// => 지우기

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <h1>Counter App</h1>
      <Contents>
        {/* <Button onClick={sub}>-</Button> */}
        <Button label="-" onclick={sub} />
        <Label>{counter}</Label>
        {/* <Button onClick={add}>+</Button> */}
        <Button label="+" onclick={add} />
      </Contents>
    </Container>
  );
}

export default App;
