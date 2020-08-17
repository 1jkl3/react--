####  redux笔记

使用版本为react-redux 5

reducer  核心控制类

 1. 该组件用于操作状态数据 **需要注意的是返回值内容**：

     1. ```react
        export function userReducer(state = payload, action) {
          switch (action.type) {
            case ADD:
              action.payload.unshift(...state);
              //注意这里的返回值，我原来想的是
              // state.push(action.payload)
              // 这种方式来返回一个state，结果数据已更新，但是Home页面的render函数不执行
              // 表示组件未监听到redux更新，所有未做出操作
              return action.payload;
            case DEL:
              return action.payload;
            default:
              return state;
          }
        }
        ```

        

action 核心控制类

 1. 该方法作用为调用哪一个状态数据及数据传递，初始化等操作

     1. ```react
        // 这里的config 文件中存放统一的action type 
        import {ADD,DEL} from "../store/config";
        // 这里导出两个方法，分别代表两个功能的数据传递
        export const add = (data)=>{
            return {
                type:ADD,
                payload:data
            }
        }
        export const del = (data)=>{
            return {
                type:DEL,
                payload:data
            }
        }
        ```

        

store 初始挂载

 1. ```react
    // 这里需要引入 redux 和 指定需要挂载的reducer
    // 注意：如果有多个reducer 可以自行引入
    import { createStore, combineReducers } from "redux";
    import { userReducer } from "../reducers/user";
    
    // 将所有的reducer整合到一起
    const reducer = combineReducers({
      userReducer,
    });
    // createStore 创建store，这里单独拿出来封装为了便于管理，也可自行选择地方实现如app.js
    export default createStore(
      reducer,
      // 说明：这里为了支持 redux浏览器插件的配置
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : undefined
    );
    ```

    

react-redux 整合数据及action

1. ```react
   // 这里是公共的数据及action 存放封装
   // 为了之后的组件使用 可以直接导入mapStateToProps及mapDispatchToProps
   
   //userAction为需要操作的action，可以自行选择多个
   import * as userAction from "../actions/user";
   // bindActionCreators 这里是用来绑定所有 action 
   import { bindActionCreators } from "redux";
   
   // 整合数据
   const mapStateToProps = (state) => {
     return {
       // 注意 userReducer 该名称为一个reducer，需要注意别忘记修改
       // 忘记名字可以打印state查看
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
   
   ```

   

   index 入口页挂载

   ```react
   import React from "react";
   import ReactDOM from "react-dom";
   import "./index.css";
   import App from "./App";
   
   import * as serviceWorker from "./serviceWorker";
   import store from "./store";
   // Provider 这里需要使用它来包裹app组件 向下传递全局store
   import { Provider } from "react-redux";
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("root")
   );
   
   // If you want your app to work offline and load faster, you can change
   // unregister() to register() below. Note this comes with some pitfalls.
   // Learn more about service workers: https://bit.ly/CRA-PWA
   serviceWorker.unregister();
   ```

   

后续为方便管理

​	config

```react
// actions type 统一常量管理
// 用户管理
export const ADD = "ADD";//添加新用户
export const DEL = "DEL";//删除用户
```

​	database

```react
// 统一数据源

export const payload = [{ name: "梨花", age: 18 }];

```



​	组件使用

```react
import React, { Component } from "react";
import StoreHandle from "../components/StoreHandle";
// 该方法用于将修改的数据及action和组件统一导出操作
// 这一步就是创建redux的开始
import { connect } from "react-redux";
// 这里引入的就是封装的整合类
import { mapStateToProps, mapDispatchToProps } from "../store/handle";
class Home extends Component {
    // 这里为添加一组数据的方法
    // 使用的事件子传父方式
  handleADD(e) {
    //userAction 可以看到，react-redux将我们的action绑定到了props中
    const { userAction } = this.props;
    userAction.add([{ name: e, age: 22 }]);
  }
  handleDEL(e) {
    const { userAction } = this.props;
    userAction.del([{name:e,age:22}]);
  }
  render() {
    // user为redux中的数据也绑定到了props中，每一次调用action 修改状态时，会自动的刷新	     // render方法，相当于 在app组件中 向下传递了数据，也就是常规的组件父传子操作
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

```

以上是我个人结合视频教程总结的简单使用方式及说明，以便于后期忘记