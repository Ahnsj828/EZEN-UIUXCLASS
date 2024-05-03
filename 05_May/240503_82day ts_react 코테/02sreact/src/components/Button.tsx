import React from "react";
import styled from "styled-components";

const Container = styled.button`
  /* background: #ff5722; */
  background: ${(props) => props.color};
  /* 부모한테 받은 props값을 자식한테도 줄 수 있다 */
  /* 부모에서 지정해준 색을 자식한테도 지정할 수 있고 따로 지정해 줄수도 있다 => 이건 순수 css로는 불가능하다/ styled-components로만가능하다*/
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;

  &:hover {
    background: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ label, onClick, color = "#ff5722" }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
