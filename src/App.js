import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Nav />
        <Switch>
          <Route path="/index" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Redirect from="/" to="/index"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
