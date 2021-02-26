import React from "react";
import { useState, useEffect } from "react-dom";
import { BrowserRouter as Router, Route, useParams, Link, useRouteMatch, useHistory } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      {console.log("hey")}
    </Router>
  );
};
export default App;
