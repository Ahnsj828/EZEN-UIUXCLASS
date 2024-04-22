// app에서 받는 데이터를 저장과 관리
import { createStore } from "redux";
// createStore 줄그어진 이유 => 업데이트가되서
import reducer from "./reducer/reducer";

const store = createStore(reducer);
// store는 를 reducer경유해서(통해서) 값을 가져온다 => reducer를 정의해야한다
// reducer를 매개변수로

export default store;
// 얘를 출력해야지만 index에서 쓸 수 있다
