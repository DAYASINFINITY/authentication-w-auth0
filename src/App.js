import React from "react";
import "./styles.css";

import { Switch, Link, Route, Redirect, NavLink } from "react-router-dom";

import Private from "./private";

import Public from "./public";

import { AuthProvider } from "./Auth/index";

import { PrivateRoute } from "./PrivateRouter";

import Login from "./login";

import Callback from "./callback";

export default function App() {
  return (
    <AuthProvider>
      <nav>
        <Link to="/public" component={Public}>
          Public
        </Link>
        <Link to="/private" component={Private}>
          Private
        </Link>
      </nav>

      <Switch>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <Route path="/callback" component={Callback} />
        <PrivateRoute path="/private" component={Private} />
        <Redirect to="/public" />
      </Switch>
    </AuthProvider>
  );
}
