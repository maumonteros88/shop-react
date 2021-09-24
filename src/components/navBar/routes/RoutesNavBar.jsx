import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../../pages/Home";
import About from "../../../pages/About";
import Shop from "../../../pages/Shop";
import Detail from "../../../pages/Detail";
import Products from "../../../pages/Products";

const RoutesNavBar = () => {
  return (
    <Switch>
      <Route path="/detalles/:id">
        <Detail />
      </Route>
      <Route path="/carrito">
        <Shop />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/productos">
        <Products />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default RoutesNavBar;
