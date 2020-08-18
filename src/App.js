import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import List from "./containers/list";
import Details from "./containers/Details";

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route path={"/"} exact component={List} />
        <Route path={"/details/:id"} exact component={Details} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
