import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

const Resume = React.lazy(() => import("Pages/Resume"));

export const Routes = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact={true} path="en/home/" element={<h1>EN HOME</h1>} />
        <Route
          exact={true}
          path="en/resume/"
          element={
            <Suspense fallback={<></>}>
              <Resume />
            </Suspense>
          }
        />
        <Route exact={true} path="sk/home/" element={<h1>SK HOME</h1>} />
        <Route
          exact={true}
          path="sk/resume/"
          element={
            <Suspense fallback={<></>}>
              <Resume /> 
            </Suspense>
          }
        />
        <Route path="" element={<Navigate to="/en/home/" />} />
      </Switch>
    </BrowserRouter>
  );
};
