// rafc
// import React from 'react'

// export const Controller = () => {
//   return (
// 	<div>Controller</div>
//   )
// }

// import { useState } from "react";

const Controller = ({ handleSetCount }) => {
  //   const [count, setCount] = useState(0);
  //   const handleSetCount = (num) => {
  //     // console.log(num);
  //     setCount(count + num);
  //     console.log(count);
  //   };
  //   여기에 주면 Viewer01한테 줄수 없어서 App02로
  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div>
  );
};
export default Controller;
/* <button onClick={handleSetCount(-1)}>-1</button> */
// onClick={() => handleSetCount(-1)}에서 () => 처음에 연산 못하게 하려고 / 랜더링 못하게
