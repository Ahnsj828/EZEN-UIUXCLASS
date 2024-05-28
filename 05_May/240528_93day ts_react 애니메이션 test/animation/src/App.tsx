import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  /* motion값을 가지고 있는 div한테 스타일을 줄거야 라는 뜻 */
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  // x축 y축 blur(퍼지는정도) 그림자
`;

function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
      <motion.header></motion.header>
    </Wrapper>
  );
}

export default App;

// <motion.Box /> => 스타일 컴포넌트에 애니메이션 줄 수 있게 하는 방법
// or
// 위에서 먼저 정의하고 주는 방법
// const Box = styled(motion.div)` 모션을 적용한 스타일 컴포넌트
// transition={{ duration: 3 }} => 3초에 시간에 걸쳐서 바뀌게 하겠다

// css에서 애니메이션 줄때 애니메이션 이름 주고 0%와 100%를 줫었다
//  => initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }}

// transition={{ type: "spring", damping: 1 }} => damping = 진동 / 기본값은 10이다 / 작으면작을수록 심해진다

// transition={{ type: "spring", mass: 1 }} => mass => 무거운 정도 / 값이 클 수 록 무거워서 효과가 오래간다 / 반동을 크게 가져간다

// transition={{ type: "spring", delay: 0.5 }} => delay: 지연 / 0.5초 후에 애니메이션이 작동된다

// <motion.header></motion.header> => heaer라는 시멘틱 태그를 쓸 수 있다
// <motion.div></motion.div> => duv라는 시멘틱 태그를 쓸 수 있다
