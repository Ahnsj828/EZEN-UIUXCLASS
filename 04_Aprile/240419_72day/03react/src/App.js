// import "./App.css";
// import { useState } from "react";
// // useState 상태변화

// function App() {
//   const [count, setCount] = useState(0);
//   const increase = () => {
//     // console.log("increase"); // 버튼 누를때마다 숫자가 증가하면 버튼이 잘 작동하는구나
//     setCount(count + 1);
//     // setCount는 increase가 실행할때에 콜백함수로
//   };

//   return (
//     <div className="App">
//       <h1>0</h1>
//       <button onClick={increase}>증가하기</button>
//       {/* 이 버튼을 누르면 increase라는 함수가 작동되게하라 */}
//     </div>
//   );
// }

// export default App;

// // 버튼이 있는데 증가 버튼을 클릭할 때마다 숫자가 1개씩 증가하는 컴포넌트(정식명칭은 앱이 맞다)를 완성해보기

// redux👇🏼

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  // state안에 count값만 가져올거다

  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();
  // useDispatch도 useNavigate랑 비슷하다 / 한번거쳤다가 간다

  const decrease = () => {
    dispatch({
      type: "DECREMENT",
      payload: { num: 5 },
    });
  };

  const increase = () => {
    dispatch({
      // useDispatc에는 객체가 담겨있어야한다 =>그래서 action객체라고 부르는거다
      type: "INCREMENT",
      payload: { num: 5 },
      // INCREMENT라는 타입인경우에
    });
  };

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: { id: "david", password: "1234" },
    });
  };
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrease}>감소하기</button>
      <button onClick={increase}>증가하기</button>
      <Box />
      <button onClick={login}>로그인</button>
      <h1>
        {id} {password}
      </h1>
    </div>
  );
}

export default App;
