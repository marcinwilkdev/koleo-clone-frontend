import React from "react";
import classes from "./styles/Input.module.css";

interface Props {
    className?: string;
    type?: string;
    placeholder?: string;
}

const Input: React.FC<Props> = ({ className, type, placeholder }) => {
    let compiledClassName = classes.input;

    if (className) {
        compiledClassName += " " + className;
    }

    return <input className={compiledClassName} type={type} placeholder={placeholder} />;
};

export default Input;
