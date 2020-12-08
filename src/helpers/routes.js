import React from "react";
import { Route, Redirect } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
};

export const Protect = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location);
        if (!user)
          return <Redirect to={{ pathname: "signin", state: location }} />;
        if (user) return children;
        return null;
      }}
    />
  );
};
