import { ADD, DEL } from "../store/config";
import { payload } from "../store/database";
// 默认数据
// const payload = [{ name: "梨花", age: 18 }];
export function userReducer(state = payload, action) {
  switch (action.type) {
    case ADD:
      action.payload.unshift(...state)
      return action.payload;
    case DEL:
      return action.payload;
    default:
      return state;
  }
}