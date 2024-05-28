// Path
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: #fff;
    stroke-width: 2;
  }
`;

const svg = {
  start: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function App() {
  return (
    <Wrapper>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          fill="transparent"
          // stroke="#fff"
          // strokeWidth="2"
          // initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
          // animate={{ pathLength: 1, fill: "rgba(255, 255, 255, 1)" }}
          // transition={{ duration: 5 }}
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 5 },
          }}
          d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
        />
      </Svg>
    </Wrapper>
  );
}

export default App;

// <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> 이건 지워야한다

// focusable="false" => tab을 허용할거냐 말거냐

// fill="currentColor" 색상값 /
// 색상부여 첫번째방법=>  fill="#fff" 흰색으로 /
// 색상부여 두번째방법=> const Svg = styled.svg`   width: 300px;  height: 300px;  color: #f00;`;

// initial={{ fill: "rgba(255, 255, 255, 0)" }} 처음 색상값
// animate={{ fill: "rgba(255, 255, 255, 1)" }} 나중색상값
// transition={{ duration: 5 }} 시간

// pathLength: 0.2 패스의 길이
// pathLength: 1 이면 패스가 다 있는거 / 다 채워진 상태

// pathLength: 0 -> pathLength: 1 / 처음에는 아웃라인이 없다가 아웃라인이 다 따지게
