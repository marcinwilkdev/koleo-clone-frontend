import React from "react";
import useInput, { UseInputHook } from "../../hooks/use-input";
import Input from "../UI/Input/Input";
import classes from "./styles/WelcomeFormInput.module.css";

interface Props {
    hook: UseInputHook<HTMLInputElement>;
    name: string;
    placeholder: string;
}

const WelcomeFormInput: React.FC<Props> = ({ hook, name, placeholder }) => {
    let compiledOptionsClassName = classes.options;

    if (hook.value.length >= 2) {
        compiledOptionsClassName += " " + classes.show;
    }

    return (
        <div className={classes.input}>
            <Input name={name} placeholder={placeholder} hook={hook} />
            <div className={compiledOptionsClassName}>
                <div className={classes.option}>WROCŁAW GŁOWNY</div>
                <div className={classes.option}>WROCŁAW ZACHODNI</div>
                <div className={classes.option}>WROCŁAW MIKOŁAJOW</div>
                <div className={classes.option}>INOWROCŁAW</div>
                <div className={classes.option}>WRONKI</div>
            </div>
        </div>
    );
};

export default WelcomeFormInput;
