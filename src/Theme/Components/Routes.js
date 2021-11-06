import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="en/home/" element={<h1>EN HOME</h1>} />
        <Route path="en/resume/" element={<h1>EN resume</h1>} />
        <Route path="sk/home/" element={<h1>SK HOME</h1>} />
        <Route path="sk/resume/" element={<h1>SK resume</h1>} />
        <Route path="" element={<Navigate to="/en/home/" />} />
      </Switch>
    </BrowserRouter>
  );
};
