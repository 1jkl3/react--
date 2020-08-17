import React, { Component } from "react";
import StoreHandle from "../components/StoreHandle";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store/handle";
class Home extends Component {
  handleADD(e) {
    const { userAction } = this.props;
    userAction.add([{ name: e, age: 22 }]);
  }
  handleDEL(e) {
    const { userAction } = this.props;
    userAction.del([{name:e,age:22}]);
  }
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        我是首页:
        <ul>
          {user.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.age}</span>
              </li>
            );
          })}
        </ul>
        <StoreHandle
          onStoreADD={this.handleADD.bind(this)}
          onStoreDEL={this.handleDEL.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
