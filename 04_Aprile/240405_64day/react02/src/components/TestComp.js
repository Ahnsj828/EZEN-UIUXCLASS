// import { useState } from "react";
// import "./TestComp.css";

// const TestComp = () => {
//   const [count, setCount] = useState(0);
//   const onIncrease = () => {
//     setCount(count + 1);
//   };
//   const onDecrease = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h4>테스트 컴포넌트</h4>
//       <div>
//         <bold>{count}</bold>
//       </div>
//       <div className="buttons">
//         <button onClick={onIncrease}>+</button>
//         <button onClick={onDecrease}>-</button>
//       </div>
//     </div>
//   );
// };
// export default TestComp;

//
//
//
import { useReducer } from "react";
import "./TestComp.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
};

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div className="buttons">
        <button
          onClick={() =>
            dispatch({
              type: "INCREAASE",
              data: 1,
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "INIT",
            })
          }
        >
          초기화
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "DECREAASE",
              data: 1,
            })
          }
        >
          -
        </button>
      </div>
    </div>
  );
};
export default TestComp;
// reducer와 TestComp는 연결고리가없다
// 둘 매개체 역할

// useReducer()도 반환하는 값이 배열이다
//   =>    const [] = useReducer();
// const [count] count 초기값
//useReducer(0) 0 매개변수
// dispatch 상태변환감지 함수
//reducer 토스받을 함수를 첫번째 매개변수로
// dispatch 가 상태변환 감지 / reducer한테 토스 / reducer가 밖에서 함수를

// reducer가 밖에서 써서 무리가 덜하다

// dispatch 는 의무적으로 두가지를 받아야한다
// type와 data 다
