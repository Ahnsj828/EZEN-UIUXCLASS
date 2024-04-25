import React from "react";
import { styled } from "styled-components";
import catImage from "../assets/ggompang.jpeg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fffacd;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SimKyungha";
  /* 폰트 사용은 여기서 */
  background: #ffa07a;
  padding: 10px 20px;
  border-radius: 20px;
  color: #fff;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-family: "SimKyungha";
  margin-top: 40px;
`;
// 안에 아무것도 안넣으면 warnning이 뜨지만 작동은된다

const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 20px;
`;

const Desc = styled.div`
  font-size: 30px;
  font-family: "SimKyungha";
  margin-bottom: 20px;
`;
const Button = styled.div`
  font-family: "SimKyungha";
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 0 8px 0 8px;
  background: #fff;
`;

// 이런 스타일 컴포넌트들을 위에 적어도 되고 밑에 적어도된다

const Home = () => {
  return (
    <Wrapper>
      <Contents>
        <Header>예비집사 판별기</Header>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            className="rounded circle"
            width={350}
            height={350}
            src="catImage"
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

// 원래는 <div className="title"><h1>예비집사 판별기</h1></div> 해서 App.js에서 스타일을 줬었다

// styled 컴포넌트도 컴포넌트다 => 그래서 대문자로 해야된다 =>Wrapper , Header
