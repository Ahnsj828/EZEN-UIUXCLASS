// 버튼 이사한다 =>  리팩토링한다
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: #ff5722;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    /* 클릭했을때 */
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    /* inset 그림자 안쪽으로 / x축 5px y축 5px 그림자길이 10px */
  }
`;
interface Props {
  // interface => 객체의 타입정의
  label: string;
  onclick: () => void;
  // 반환값이 없다 => void
}

const Button = ({ label, onclick }: Props) => {
  return <Container onClick={onclick}>{label}</Container>;
};

export default Button;
