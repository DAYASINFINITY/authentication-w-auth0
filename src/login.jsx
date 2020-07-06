import React from "react";
import { Switch, Link, Route, Redirect, NavLink } from "react-router-dom";

import FlexWrapped from "./components/FlexWrapped";
import { withAuth } from "./Auth/index";

export default withAuth(({ isAuthorized, authorize }) =>
  isAuthorized ? (
    <Redirect to="/public" />
  ) : (
    <div>
      <button onClick={authorize}> АВТОРИЗОВАТЬСЯ </button>
    </div>
  )
);
