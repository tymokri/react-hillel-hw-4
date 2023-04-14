import React from 'react';
import './formInput.css';


const FormInput = ({ label, onChange, onBlur, focused, errorMessage, ...inputProps }) => {
    return (
        <div className="form-input">
            <label>{ label }</label>
            <input
                { ...inputProps }
                onChange={ onChange }
                onBlur={ onBlur }
                focused={ focused.toString() }
            />
            <span>{ errorMessage }</span>
        </div>
    );
};

export default FormInput;