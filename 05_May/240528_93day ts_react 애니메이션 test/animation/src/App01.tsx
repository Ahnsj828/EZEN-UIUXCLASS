// Variants 변수 / 변수에 담아서 쓸 수 있다
//Animation
import React from "react";
import styled from "styled-components";
import { delay, motion, stagger } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 2행2열 */
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 70px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center; // css속성이다(react만의 문법아니다) / 자체적으로 정렬한다
`;
// 이 원도 애니메이션 갖고 있다 => styled(motion.div)이런 형태로 줘야한다

// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
// };

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      staggerChildren: 0.3,
    },
  },
};
// delayChildren: 1, => 알아서 부모요소가 나오고 1초뒤에 자식요소가 나온다
// staggerChildren: 0.3 => 순차적으로 나오게 / 안주면 4원이 한번에 나왔는데 주니까 원들이 하나씩 나온다

const circleVariants = {
  start: { scale: 0, opacity: 0, y: 40 },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0.8,
    },
  },
};

function App() {
  return (
    <Wrapper>
      {/* <Box variants={myVars} initial="start" animate="end" />
      <motion.header></motion.header> */}
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;

// <Box variants={myVars} initial="start" animate="end" /> => 변수안에 정의된 값만 매칭을 시켰다
