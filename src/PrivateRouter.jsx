import React from "react";
import { withAuth } from "./Auth";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuthorized, ...rest }) => (
    <Route
      {...rest}
      render={routeProps =>
        isAuthorized ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
);
