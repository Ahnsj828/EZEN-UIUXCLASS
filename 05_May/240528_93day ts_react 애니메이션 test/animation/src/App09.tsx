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

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #00a5ff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      {/* <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        <Circle />
      </Box> */}

      {/* <Box>{!clicked ? <Circle /> : null}</Box>
      <Box>{clicked ? <Circle /> : null}</Box> */}

      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;

{
  /* <Box
style={{
	justifyContent: clicked ? "center" : "flex-start",
	alignItems: clicked ? "center" : "flex-start",
}}
>  => 클릭하면 위치가 이동된다 */
}

{
  /* <Box>{!clicked ? <Circle /> : null}</Box> false이면 circle이 나오고 아니면 안나오게 */
}
{
  /* <Box>{clicked ? <Circle /> : null}</Box> </Box> true이면 circle이 나오고 아니면 안나오게 */
}

// layoutId="circle" 이걸 두개한테 주니까 자연스럽게 이동 / 매칭시켰다
