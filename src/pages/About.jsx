import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StoreHandle from "../components/StoreHandle";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../redux-handle";
class About extends Component {
  handleADD(e) {
    const { actions } = this.props;
    actions.add(e);
  }
  handleDEL(e) {
    const { actions } = this.props;
    actions.del(e);
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        我是关于页:{name}
        <StoreHandle
          onStoreADD={this.handleADD.bind(this)}
          onStoreDEL={this.handleDEL.bind(this)}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
