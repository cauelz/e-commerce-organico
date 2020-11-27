import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from './pages/UserPage';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/user" component={UserPage}/>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
