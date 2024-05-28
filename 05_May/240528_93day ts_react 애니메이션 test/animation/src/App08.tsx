// slide
import React, { useState } from "react";
import styled from "styled-components";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 80px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  padding: 8px 20px;
  cursor: pointer;
  background-color: #02bbbb;
  border-radius: 30px;
  color: #3d3d3d;
  font-weight: bold;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

// const box = {
//   initial: {
//     // 애니메이션이 실행되기 전에 최초에
//     x: 500,
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     // 애니메이션이 돌기 시작하면
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exits: {
//     x: -500,
//     opacity: 0,
//     scale: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };
// // transition: { duration: 0.5, },  => 이거 줘서 통통 튀었던 느낌을 슬라이더 같이 스무스하게
// // 들어올때 0.5 , 나갈때 1초

const box = {
  initial: (back: boolean) => ({
    // 애니메이션이 실행되기 전에 최초에
    x: back ? -300 : 300,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    // 애니메이션이 돌기 시작하면
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 300 : -300,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.4,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  // useState(1) => 첫번째 박스가 무조건 랜더링되었을때 있어야하니까

  const [back, setBack] = useState(false);

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
    // 이전 값이 10이면 1이 되게 하고 , 이전값이 10이 아니면 이전값에 1을 더해라
  };

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
    // 이전 값이 10이면 1이 되게 하고 , 이전값이 10이 아니면 이전값에 1을 더해라
  };

  return (
    <Wrapper>
      {/* <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              key={i}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
            >
              {i}
            </Box>
          ) : null
        )}
			</AnimatePresence> */}
      <AnimatePresence custom={back} mode="wait">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              key={visible}
              variants={box}
              custom={back}
              initial="initial"
              animate="visible"
              exit="exits"
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <Buttons>
        <Button onClick={prevPlease}>PREV</Button>
        <Button onClick={nextPlease}>NEXT</Button>
      </Buttons>
    </Wrapper>
  );
}

export default App;
// <AnimatePresence custom={back} mode="wait"> => mode="wait"를주면 슬라이드가 이상하게 오는게 없어진다
