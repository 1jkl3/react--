import * as actions from "../store/action";
import { bindActionCreators } from "redux";

// 数据
const mapStateToProps = (state) => {
  return {
    name: state.redurcer,
  };
};
// 事件
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
export { mapStateToProps, mapDispatchToProps };
