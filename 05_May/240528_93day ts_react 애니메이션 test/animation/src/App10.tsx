// modal
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
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2; // 두개 영역 차지
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  // const [clicked, setClicked] = useState(false);
  // // Overlay 나오면 안되니까 false
  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };

  const [id, setId] = useState<string | null>(null);

  return (
    // <Wrapper onClick={toggle}>
    <Wrapper>
      <Grid>
        {/* <Box layoutId="test" />
        <Box />
        <Box />
        <Box /> */}

        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
        ))}
      </Grid>
      <AnimatePresence>
        {/* {clicked ? (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box style={{ width: 600, height: 400 }} layoutId="test" />
          </Overlay>
        ) : null} */}
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box style={{ width: 600, height: 400 }} layoutId={id} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

// AnimatePresence준다 => 모션을 적용한다는거

// onClick={() => setId(null)}  => 이걸주니까 모달창에서 클릭하면 다시 원래상태로 돌아간다
