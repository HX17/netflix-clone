import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { IsUserRedirect, Protect } from "./helpers/routes";
import { useAuthListener } from "./hooks/use-auth-listener";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE} // if there is a user, redirect ot browse
          exact
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE} // if there is a user, redirect ot browse
          exact
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>

        <Protect user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </Protect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
