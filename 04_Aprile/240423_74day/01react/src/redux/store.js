// 값이 저장되는공간
import { createStore, applyMiddleware } from "redux";
// import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from  "./reducers/index";
// 이렇게 안해도 된다 / 알아서 index를 찾아서 rootReducer로 찾아온다

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
