import React, { Suspense } from "react";
import {
  Routes as Switch,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./Transitionroutes.css";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Home } from "Pages";
import Loading from "Shared/Loading";

const Game = React.lazy(() => import("Pages/Game"));
const Resume = React.lazy(() => import("Pages/Resume"));

export const Transitionroutes = ({ children }) => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={{ enter: 750, exit: 0 }}
        classNames="page"
      >
        <Switch location={location}>
          <Route exact={true} path="en/home/" element={<Home />} />
          <Route
            exact={true}
            path="en/game/"
            element={
              <Suspense fallback={<Loading />}>
                <Game />
              </Suspense>
            }
          />
          <Route
            exact={true}
            path="en/resume/"
            element={
              <Suspense fallback={<Loading />}>
                <Resume />
              </Suspense>
            }
          />
          <Route exact={true} path="sk/home/" element={<Home />} />
          <Route
            exact={true}
            path="sk/game/"
            element={
              <Suspense fallback={<Loading />}>
                <Game />
              </Suspense>
            }
          />
          <Route
            exact={true}
            path="sk/resume/"
            element={
              <Suspense fallback={<Loading />}>
                <Resume />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/en/home/" />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
