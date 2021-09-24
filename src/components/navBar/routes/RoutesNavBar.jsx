import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../../../pages/Home';
import About from '../../../pages/About'
import Shop from '../../../pages/Shop';

const RoutesNavBar = () => {
  return (
    <Switch>
      <Route path="/carrito">
        <Shop />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default RoutesNavBar
