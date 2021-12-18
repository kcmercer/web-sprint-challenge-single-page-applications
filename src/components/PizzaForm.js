import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import formSchema from '../validation/validpizza';
import axios from 'axios';

// Styling
const StyledDiv = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: space-between;
 width: 60%;
 margin-left: auto;
 margin-right: auto;
 margin-bottom: 5%;
`

const StyledCheckbox = styled.div`
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 align-items: left;
 justify-content: space-between;
 width: 60%;
 margin-left: auto;
 margin-right: auto;
`

const StyledInput = styled.input`
 margin-left: 5%;
`

const StyledH4 = styled.h2`
 width: 100%;
`

// Initial Objects
const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    Pepperoni: false,
    Sausage: false,
    Canadian_Bacon: false,
    Spicy_Italian_Sausage: false,
    Grilled_Chicken: false,
    Onions: false,
    Green_Pepper: false,
    Diced_Tomatos: false,
    Black_Olives: false,
    Roasted_Garlic: false,
    Artichoke_Hearts: false,
    Three_Cheese: false,
    Pineapple: false,
    Extra_Cheese: false,
    special: '',
}

const initialFormErrors = {
    name: ''
}

const initialPizza = [];

// Pizza Form Render
export default function PizzaTime() {

    const [ pizza, setPizza] = useState(initialPizza);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [ formErrors, setFormErrors ] = useState(initialFormErrors);

    const postNewPizza = newPizza => {
        axios.post('https://reqres.in/api/orders', newPizza)
            .then(resp => {
                console.log(resp.data)
                setPizza([resp.data, ...pizza]);
            }).catch(error => console.error(error))
            .finally(() => setFormValues(initialFormValues))
    }

        const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ''}))
            .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
    }

    const inputChange = (name, value) => {
        setFormValues({
          ...formValues,
          [name]: value
        })
      }

      const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked: value;
        inputChange(name, valueToUse)
    }

    const onValidChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked: value;
        inputValidChange(name, valueToUse)
    }

    const inputValidChange = (name, value) => {
        validate(name, value);
        setFormValues({
          ...formValues,
          [name]: value
        })
      }

    const submit = () => {
        const newPizza = {
            name: formValues.name,
            size: formValues.size,
            sauce: formValues.sauce,
            Pepperoni: formValues.Pepperoni,
            Sausage: formValues.Sausage,
            Canadian_Bacon: formValues.Canadian_Bacon,
            Spicy_Italian_Sausage: formValues.Spicy_Italian_Sausage,
            Grilled_Chicken: formValues.Grilled_Chicken,
            Onions: formValues.Onions,
            Green_Pepper: formValues.Green_Pepper,
            Diced_Tomatos: formValues.Diced_Tomatos,
            Black_Olives: formValues.Black_Olives,
            Roasted_Garlic: formValues.Roasted_Garlic,
            Artichoke_Hearts: formValues.Artichoke_Hearts,
            Three_Cheese: formValues.Three_Cheese,
            Pineapple: formValues.Pineapple,
            Extra_Cheese: formValues.Extra_Cheese,
            special: formValues.special,
        }
        postNewPizza(newPizza);
    }
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <StyledDiv>
                <StyledH4> Choice of Size </StyledH4>
                <label>
                    <select id='size-dropdown'
                        name='size'
                        value={formValues.size}
                        onChange={onChange}
                    >
                        <option>- Select -</option>
                        <option>- Large -</option>
                        <option>- Medium -</option>
                        <option>- Small -</option>
                        <option>- Personal -</option>
                    </select>
                </label>
            </StyledDiv>
            <StyledDiv>
                <StyledH4>Choice of Sauce</StyledH4>
                <label> Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='original_red'
                        onChange={onChange}
                        checked={formValues.sauce === 'original_red'}
                    />
                </label>

                <label> Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlic_ranch'
                        onChange={onChange}
                        checked={formValues.sauce === 'garlic_ranch'}
                    />
                </label>

                <label> BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq_sauce'
                        onChange={onChange}
                        checked={formValues.sauce === 'bbq_sauce'}
                    />
                </label>

                <label> Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinach_alfredo'
                        onChange={onChange}
                        checked={formValues.sauce === 'spinach_alfredo'}
                    />
                </label>
            </StyledDiv>

            <StyledCheckbox>
            <StyledH4>Add Topings</StyledH4>
                <label> Pepperoni
                    <StyledInput
                        type='checkbox'
                        name='Pepperoni'
                        checked={formValues.Pepperoni}
                        onChange={onChange}
                    />
                </label>

                <label> Sausage
                    <StyledInput
                        type='checkbox'
                        name='Sausage'
                        checked={formValues.Sausage}
                        onChange={onChange}
                    />
                </label>

                <label> Canadian Bacon
                    <StyledInput
                        type='checkbox'
                        name='Canadian_Bacon'
                        checked={formValues.Canadian_Bacon}
                        onChange={onChange}
                    />
                </label>

                <label> Spicy Italian Sausage
                    <StyledInput
                        type='checkbox'
                        name='Spicy_Italian_Sausage'
                        checked={formValues.Spicy_Italian_Sausage}
                        onChange={onChange}
                    />
                </label>

                <label> Grilled Chicken
                    <StyledInput
                        type='checkbox'
                        name='Grilled_Chicken'
                        checked={formValues.Grilled_Chicken}
                        onChange={onChange}
                    />
                </label>

                <label> Onions
                    <StyledInput
                        type='checkbox'
                        name='Onions'
                        checked={formValues.Onions}
                        onChange={onChange}
                    />
                </label>

                <label> Green Pepper
                    <StyledInput
                        type='checkbox'
                        name='Green_Pepper'
                        checked={formValues.Green_Pepper}
                        onChange={onChange}
                    />
                </label>

                <label> Diced Tomatos
                    <StyledInput
                        type='checkbox'
                        name='Diced_Tomatos'
                        checked={formValues.Diced_Tomatos}
                        onChange={onChange}
                    />
                </label>

                <label> Black Olives
                    <StyledInput
                        type='checkbox'
                        name='Black_Olives'
                        checked={formValues.Black_Olives}
                        onChange={onChange}
                    />
                </label>

                <label> Roasted Garlic
                    <StyledInput
                        type='checkbox'
                        name='Roasted_Garlic'
                        checked={formValues.Roasted_Garlic}
                        onChange={onChange}
                    />
                </label>

                <label> Artichoke Hearts
                    <StyledInput
                        type='checkbox'
                        name='Artichoke_Hearts'
                        checked={formValues.Artichoke_Hearts}
                        onChange={onChange}
                    />
                </label>

                <label> Three Cheese
                    <StyledInput
                        type='checkbox'
                        name='Three_Cheese'
                        checked={formValues.Three_Cheese}
                        onChange={onChange}
                    />
                </label>

                <label> Pineapple
                    <StyledInput
                        type='checkbox'
                        name='Pineapple'
                        checked={formValues.Pineapple}
                        onChange={onChange}
                    />
                </label>

                <label> Extra Cheese
                    <StyledInput
                        type='checkbox'
                        name='Extra_Cheese'
                        checked={formValues.Extra_Cheese}
                        onChange={onChange}
                    />
                </label>
            </StyledCheckbox>

            <StyledDiv>
                <StyledH4>Name for Order</StyledH4>
                <input id='name-input'
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={onValidChange}
                />
            </StyledDiv>
            
            <StyledDiv>
                <StyledH4>Special Instructions</StyledH4>
                <input id='special-text'
                    type='text'
                    name='special'
                    value={formValues.special}
                    onChange={onChange}
                />
            </StyledDiv>

            <StyledDiv>
                <div id='errors'>
                    <div>{formErrors.name}</div>
                </div>
                <button id='order-button'> Add to Order </button>
            </StyledDiv>
        </form>
    )
}