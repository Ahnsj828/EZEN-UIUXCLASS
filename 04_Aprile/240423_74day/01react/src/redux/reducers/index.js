// index라는 이름은 기본(default)이라는 거다
// 이렇게 이름을 해야 자동적으로 알아낸다

import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
