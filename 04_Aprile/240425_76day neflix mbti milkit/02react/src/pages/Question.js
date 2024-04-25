import React from "react";
import { ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Button = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #000;
`;

const Question = () => {
  return (
    <Wrapper>
      <div>
        <Title>문제1</Title>
        <ButtonGroup>
          <Button>답변들</Button>
          <Button>답변1</Button>
          <Button>답변2</Button>
        </ButtonGroup>
      </div>
    </Wrapper>
  );
};

export default Question;

{
  /* <div>
<div>
	<div>문제1</div>
	<div>
		<div>답변들</div>
		<div>답변1</div>
		<div>답변2</div>
	</div>
</div>
</div> */
}
