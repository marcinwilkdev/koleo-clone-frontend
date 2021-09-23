import React from "react";

import { UseInputHook } from "../../../hooks/use-input";

import classes from "./styles/Input.module.css";

export interface InputInterface {
    name: string;
    className?: string;
    type?: string;
    placeholder?: string;
    hook: UseInputHook<HTMLInputElement>;
}

const Input: React.FC<InputInterface> = ({
    name,
    className,
    type,
    placeholder,
    hook,
}) => {
    let compiledClassName = classes.input;

    if (className) {
        compiledClassName += " " + className;
    }

    return (
        <input
            name={name}
            id={name}
            className={compiledClassName}
            type={type}
            placeholder={placeholder}
            value={hook.value}
            onChange={hook.changeHandler}
            onBlur={hook.blurHandler}
        />
    );
};

export default Input;
