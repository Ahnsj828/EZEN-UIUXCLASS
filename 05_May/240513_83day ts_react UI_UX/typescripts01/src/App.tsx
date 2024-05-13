import React from "react";
import { Styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="Im here" bgColor="tomato" />
    </div>
  );
}

export default App;
//App컴포넌트는 circle컴포넌트의 부모 컴포넌트다 => props를 줄수있다 => props 객체다 => key값이랑 value값을 줄 수 있다
// bgColor라는 key값의 객체 형태의 props
