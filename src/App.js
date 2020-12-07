import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.SIGN_IN} component={Signin} />
      <Route exact path={ROUTES.SIGN_UP} component={Signup} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
      <Route exact path={ROUTES.HOME} component={Home} />
    </Router>
  );
}

export default App;
