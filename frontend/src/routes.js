import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "../src/pages/Logon";
import Register from "../src/pages/Register";
import Profile from "../src/pages/Profile";
import NewIncident from "../src/pages/NewIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
