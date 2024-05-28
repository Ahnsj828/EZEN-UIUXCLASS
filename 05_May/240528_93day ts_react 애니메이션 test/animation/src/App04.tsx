// drag
import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "200px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 0.3 } },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={10}
          dragConstraints={biggerBoxRef}
          // dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          // drag="y"
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          // whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
// drag="x"  => x축으로만 움직이게 / drag="y" => y축으로만 움직이게

// 드레그 제한 범위를 설정하지 않으면 저멀리까지도 가버린다 / 갈 수있는 최대 범위를 설정 할수 있다
// => dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }} => 상하좌우 50만큼만 움직이게

// dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }} => 이동 범위를 더 넓힐 수 있다

// dragSnapToOrigin => 원심력을 가져서 원래 자리로 돌아가게끔
// Snap사진 => 순간을 포착하는 사진

// Elastic => 부드럽게
// dragElastic={0} => 총알처럼 간다
// dragElastic={10} => 조금 부드럽게
