import React, { useState } from "react";
import styled, { Styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const App01 = () => {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // (event: React.FormEvent<HTMLInputElement>) 이건 문법이다
    console.log(event);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
    // console.log(event.target.value);
  };

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // preventDefault() => 서버로 값을 주지 않을때 사용
    console.log("Hello", value);
  };

  return (
    <Container>
      <form onSubmit={onsubmit}>
        <input
          value={value}
          type="text"
          placeholder="user name"
          onChange={onChange}
        />
      </form>
    </Container>
  );
};

export default App01;

// input 태그 쓸거다 => 사용자한테 값을 받을거다 => 값을 관리하는게 필요하다 => useState

// onChange => input태그에 어떠한 값이 들어온다면 onchange라는 함수가 작동되게하겠다
