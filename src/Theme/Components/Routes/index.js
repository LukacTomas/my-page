import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Transitionroutes } from "./Transitionroutes";

export const Routes = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Transitionroutes />
    </BrowserRouter>
  );
};
