// 这里对数据进行操作
import { ADD, DEL } from "./config";
import { payload } from "./database";
// 默认数据
// const payload = [{ name: "梨花", age: 18 }];
export function redurcer(state = payload[0].name, action) {
  switch (action.type) {
    case ADD:
      return action.payload;
    case DEL:
      return action.payload;
    default:
      return state;
  }
}

// export function user(state = payload[0].name, action){
//   switch (action.type) {
//     case "ADD":
//       return action.payload;
//     case "DEL":
//       return action.payload;
//     default:
//       return state;
//   }
// }
