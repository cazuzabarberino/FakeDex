import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokedexPage from "../pages/PokedexPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PokedexPage} />
    </Switch>
  </BrowserRouter>
);
