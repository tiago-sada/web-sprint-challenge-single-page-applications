import React from "react";
import { useState, useEffect } from "react-dom";
import { BrowserRouter as Router, Route, useParams, Link, useRouteMatch, useHistory, Switch } from 'react-router-dom';


const Landing = () => {
    return (
        <div>
            <Link to="/pizza">Order a Pizza</Link>
        </div>
        
    )
}


export default Landing;