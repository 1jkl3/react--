import React, { Component } from "react";
import StoreHandle from "../components/StoreHandle";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store/handle";
class About extends Component {
  handleADD(e) {
    const { actions } = this.props;
    actions.add({name:e,age:22});
  }
  handleDEL(e) {
    console.log(this.props);
    const { actions } = this.props;
    actions.del(1);
  }
  render() {
    const { user } = this.props;
    console.log(this.props);
    return (
      <div>
        我是关于页:{user}
        <StoreHandle
          onStoreADD={this.handleADD.bind(this)}
          onStoreDEL={this.handleDEL.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
