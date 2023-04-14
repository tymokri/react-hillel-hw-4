import React, {useState} from 'react';
import FormInput from "../FormInput";
import {formDefaultValues, inputs} from './formDataModel';


const MyForm = () => {
    const [inputsValues, setInputsValues] = useState(formDefaultValues);
    const [focused, setFocused] = useState(false);

    const handleInputChange = (e) => {
        setInputsValues({
            ...inputsValues,
            [e.target.name]: e.target.value
        })
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user-registration', JSON.stringify(inputsValues));
    };

    return (
        <form
            className="form"
            onSubmit={ handleSubmit }
        >
            <h2>Please fill this form</h2>

            {inputs.map(input => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={inputsValues[input.name]}
                    onChange={ handleInputChange }
                    onBlur={ handleFocus }
                    focused={ focused }
                />
            ))}

            <button type="submit">
                Submit
            </button>
        </form>
    );
};

export default MyForm;