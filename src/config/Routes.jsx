import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catelog from "../pages/Catelog";
import Detail from "../pages/detail/Detail";

function Routes(props) {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catelog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catelog} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default Routes;
