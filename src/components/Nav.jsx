import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/index">首页</NavLink>
        <br />
        <NavLink to="/about">关于</NavLink>
      </div>
    );
  }
}

export default Nav;
