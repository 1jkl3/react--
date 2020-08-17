import { createStore, combineReducers } from "redux";
import { userReducer } from "../reducers/user";

// 将所有的reducer整合到一起
const reducer = combineReducers({
  userReducer,
});
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);
