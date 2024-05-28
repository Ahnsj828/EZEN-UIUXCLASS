// // drag2
// import React, { useRef, useEffect } from "react";
// import styled from "styled-components";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// // useMotionValue 상세한 값을 가져올때 사용 / 위치값을 찾아오는거
// // useTransform 이걸 사용하면 우리가 get한 값을 우리가 원하는 값으로 바꿀 수 있다

// // const Wrapper = styled.div`
// const Wrapper = styled(motion.div)`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
// `;

// // -800 => scale : 2
// // -400 => scale : 1.5
// // 0 => sclae: 1
// // 400 => scale : 0.5
// // 800 => scale : 0

// function App() {
//   const x = useMotionValue(0);

//   // const test = useTransform(x, [-800, 0, 800], [2, 1, 0]);
//   // (x, [-800, 0, 800], [2, 1, 0]) => (바꾸고싶은 target 값 / 어떤타입으로 띄게 / 어떻게 치환할거냐)
//   const rotateZ = useTransform(x, [-800, 800], [-360, 360]);

//   // console.log(x);
//   // useEffect(() => {
//   //   x.on("change", () => console.log(x.get()));
//   // }, [x]);
//   // useEffect(() => {
//   //   // test.on("change", () => console.log(test.get()));
//   //   rotateZ.on("change", () => console.log(rotateZ.get()));
//   // }, [x]);

//   const gradient = useTransform(
//     x,
//     [-800, 0, 800],
//     [
//       "linear-gradient(135deg, rgb(0,210,238), rgb(0, 83, 238))",
//       "linear-gradient(135deg, rgb(238,0,153), rgb(221, 0, 238))",
//       "linear-gradient(135deg, rgb(0,238,155), rgb(238, 178,0))",
//     ]
//   );

//   return (
//     <Wrapper style={{ background: gradient }}>
//       {/* <button onClick={() => x.set(200)}>Click Me!</button> */}

//       {/* <Box style={{ x }} drag="x" dragSnapToOrigin /> */}
//       <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
//     </Wrapper>
//   );
// }

// export default App;

// ======================================================================================

// scrol
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
// useScroll 스크롤 현재 된 값을 찾아오고  이값을 뭔가로 변경하는거

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.on("change", () =>
      console.log(scrollY.get(), scrollYProgress.get())
    );
  }, [scrollY, scrollYProgress]);

  const x = useMotionValue(0);

  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);

  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238, 178,0))",
    ]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  // 타겟값(어떤걸로 하겠냐),
  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        // style={{ x, rotateZ, scale: scrollYProgress }}
        style={{ x, rotateZ, scale }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
// style={{ x, rotateZ, scale: scrollYProgress }} => 내려갈수록 작아지고 올라갈수록 커진다
