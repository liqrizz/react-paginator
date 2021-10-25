import React from "react";
import {IButtonProps} from "./models/Button.models";
import CSS_CLASSES from './Button.module.css'

console.log(CSS_CLASSES);

const Button = ({onClick, children, disabled}: IButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={CSS_CLASSES.mainButton}>
            {children}
        </button>
    );
};

export default Button;
