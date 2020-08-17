import * as userAction from "../actions/user";
import { bindActionCreators } from "redux";

// 整合数据
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};
// 整合事件
const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch),
  };
};
export { mapStateToProps, mapDispatchToProps };
