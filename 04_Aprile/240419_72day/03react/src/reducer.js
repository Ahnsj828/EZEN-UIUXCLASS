// store를 완성하려면 reducer가 있어야한다
// reducer는 함수다

// import { act } from "react-dom/test-utils";

const initialState = {
  count: 0,
  // 초기값 0으로시작
  id: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  // action값을 받아야하고
  // action값을 저장할 초기값 => state
  // state 초기값
  // reducer는 두가지 값이 있어야한다
  // console.log(action);

  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + action.payload.num };
  //   // 여기서 return은 if조건문이 참인경우에 반환해야한는 return이다
  // } else if (action.type === "LOGIN") {
  // }

  // return { ...state };
  // //여기서 return은 이 함수를 실행하고 반환해야하는 return

  // 👇🏼switch문으로
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
};

export default reducer;
