import React, { Component } from "react";
import PlanCarousel from "./carousel/PlanCarousel";
import { render } from "react-dom";
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import Checkout from './checkout/Checkout'

const app = (
  <Router>
    <Switch>
      <Route exact path="/">
        <PlanCarousel></PlanCarousel>
      </Route>
      <Route path="/checkout/:id">
        <Checkout />
      </Route>
    </Switch>
  </Router>
)

const container = document.getElementById("app");
render(app, container);