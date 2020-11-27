import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from './pages/UserPage';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/user" component={UserPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
