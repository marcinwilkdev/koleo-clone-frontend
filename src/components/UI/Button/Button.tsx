import React from "react";

import classes from "./styles/Button.module.css";

interface Props {
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
    children,
    className,
    type,
    disabled,
    onClick,
}) => {
    let compiledClassName = classes.button;

    if (className) {
        compiledClassName += " " + className;
    }

    return (
        <button
            className={compiledClassName}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
