import React, { useState } from "react";
import styled, { Styled } from "styled-components";

const Container = styled.div<ContainerProps>`
  // div<ContainerProps> => 제네릭 형식으로 타입정의
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

// 객체의 타입을 정의하기 위해서 interface를 생성
// interface형식으로 타입정의
interface CircleProps {
  bgColor: string;
  borderColor?: string; // ?:   => 옵셔널하게 줬다(줘도되고 안줘도 되고)
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  // counter라는 변수,setCounter라는 함수(counter값을 바꿀 수 있다), counter 초기값 1
  setCounter("hello");
  // 초기값을 숫자로 하다가 문자열로 바꿔야하는경우는?
  // 로컬스토리지로 가면 문자열로 변환할 수 있다
  // 하지만 이건 숫자도 문자도 받아야한다  => 제네릭으로하면된다
  // number | string 유니온 타입

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
  //{borderColor ?? bgColor} => 단락회로 평가 = 좌항의 값이 참이면 우항의 값을 넣어라
  // borderColor가 존재하면 borderColor값을 주고 그게 아니라면 bgColor를 주겠다
  // ?? bgColor  <=이게 없으면 에러가 뜬다
  //  =>  ContainerProps변수에서 borderColor를 옵셔널하게 주지 않아서 에러가뜨니까 단락회로평가 방식으로 줬다

  // text = "default text" => 부모요소한테 받지 않으면 기본값을주겠다 / 고정 매개변수
};

export default Circle;
