import React from "react";
import { useState, useEffect } from "react-dom";
import { BrowserRouter as Router, Route, useParams, Link, useRouteMatch, useHistory, Switch } from 'react-router-dom';
import Landing from "./Components/Landing";
import PizzaOrder from "./Components/PizzaOrder";

const App = () => {
  return (
    <Router>
      {/* <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p> */}
      <Switch>
        <Route path="/pizza" component={PizzaOrder}/>
        <Route path="/" component={Landing}/>
      </Switch>
      {console.log("hey")}
    </Router>
  );
};
export default App;
