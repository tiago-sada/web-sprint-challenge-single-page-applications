import React from "react";
import { useState, useEffect } from "react-dom";
import { BrowserRouter as Router, Route, useParams, Link, useRouteMatch, useHistory, Switch } from 'react-router-dom';

const PizzaOrder = () => {
    return (
        <div>
            <form>
                <h1>Lambda Eats</h1>
                <h3>Let's order a Pizza</h3>

                <h5>Personal Information</h5>
                <label>
                    Name:
                    <input name="name" id="name" type="text" />
                </label>
                <br/>
                <br/>

                <h5>Type of Pizza</h5>
                <label>
                    Size:
                    <select id="size" name="size">
                        <option value="">--Select a size--</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">Extra-Large</option>
                    </select>
                </label>
                <br/>
                <br/>

                <h5>Ingredients</h5>
                <label>
                    Pepperoni
                    <input type="checkbox" name="hasPepperoni" id="hasPepperoni"/>
                </label>
                <br/>
                <label>
                    Pineapple
                    <input type="checkbox" name="hasPineapple" id="hasPineapple"/>
                </label>
                <br/>
                <label>
                    Mozzarella
                    <input type="checkbox" name="hasMozzarella" id="hasMozzarella"/>
                </label>
                <br/>
                <label>
                    Bacon
                    <input type="checkbox" name="hasBacon" id="hasBacon"/>
                </label>
                <br/>
                <br/>

                <h5>Other</h5>
                <label>
                    Special Instructions:
                    <input name="instructions" id="instructions" type="text"/>
                </label>

            </form>
        </div>
    )
}


export default PizzaOrder;