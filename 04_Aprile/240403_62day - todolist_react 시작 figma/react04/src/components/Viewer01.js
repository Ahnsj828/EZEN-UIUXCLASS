// import { useState } from "react";
// useState라는 훅을 찾아오려고

const Viewer01 = ({ count }) => {
  //   const [count, setCount] = useState(0);
  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{count}</h1>
    </div>
  );
};
export default Viewer01;
