import React from "react";
import { useState, useEffect } from "react";
import * as yup from "yup";

const PizzaOrder = () => {

    const defaultData = {
        name: "",
        size: "",
        hasPepperoni: false,
        hasPineapple: false,
        hasMozzarella: false,
        hasBacon: false,
        instructions: ""
    }

    const [formData, setFormData] = useState(defaultData);
    const [submitDisabled, setSubmitDisabled] = useState(false)

    const change = event => {
        const { type, checked, value, name } = event.target
        const fieldToUse = type === "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: fieldToUse
        })
        console.log(fieldToUse)
    }

    const submit = event => {
        event.preventDefault()
        setFormData(defaultData)
    }

    const schema = yup.object().shape({
        // name: yup.string().required("Name is required").min(2, "Name needs to be 2 characters min"),
        // size: yup.string().oneOf(["1", "2", "3", "4"], "You must select a Pizza size"),
        // hasPepperoni: yup.boolean().oneOf([true, false]),
        // hasPineapple: yup.boolean().oneOf([true, false]),
        // hasMozzarella: yup.boolean().oneOf([true, false]),
        // hasBacon: yup.boolean().oneOf([true, false]),
        // instructions: yup.string()
        name: yup.string().min(2),
        size: yup.string(),
        hasPepperoni: yup.boolean(),
        hasPineapple: yup.boolean(),
        hasMozzarella: yup.boolean(),
        hasBacon: yup.boolean(),
        instructions: yup.string()
    })

    useEffect(() => {
        schema.isValid(formData).then(isSchemaValid => console.log(isSchemaValid))
        schema.isValid(formData).then(validSchema => setSubmitDisabled(!validSchema))
    }, [formData])


    return (
        <div>
            <form>
                <h1>Lambda Eats</h1>
                <h3>Let's order a Pizza</h3>

                <h5>Personal Information</h5>
                <label>
                    Name:
                    <input name="name" id="name" value={formData.name} type="text" onChange={change}/>
                </label>
                <br/>
                <br/>

                <h5>Type of Pizza</h5>
                <label>
                    Size:
                    <select id="size" name="size" onChange={change} value={formData.size}>
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
                    <input type="checkbox" name="hasPepperoni" id="hasPepperoni" onChange={change} checked={formData.hasPepperoni}/>
                </label>
                <br/>
                <label>
                    Pineapple
                    <input type="checkbox" name="hasPineapple" id="hasPineapple" onChange={change} checked={formData.hasPineapple}/>
                </label>
                <br/>
                <label>
                    Mozzarella
                    <input type="checkbox" name="hasMozzarella" id="hasMozzarella" onChange={change} checked={formData.hasMozzarella}/>
                </label>
                <br/>
                <label>
                    Bacon
                    <input type="checkbox" name="hasBacon" id="hasBacon" onChange={change} checked={formData.hasBacon}/>
                </label>
                <br/>
                <br/>

                <h5>Other</h5>
                <label>
                    Special Instructions:
                    <input name="instructions" id="instructions" type="text" onChange={change} value={formData.instructions}/>
                </label>
                <br/>
                <br/>

                <input type="submit" disabled={submitDisabled}/>

            </form>
        </div>
    )
}


export default PizzaOrder;