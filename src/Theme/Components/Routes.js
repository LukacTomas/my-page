import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { paths } from "Config";

export const Routes = ({ children }) => {
  console.log(paths);
  return (
    <Router>
      <Switch>
       
      </Switch>
    </Router>
  );
};
