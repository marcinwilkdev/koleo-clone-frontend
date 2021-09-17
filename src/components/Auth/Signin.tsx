import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Form from "../UI/Form/Form";
import { InputInterface } from "../UI/Input/Input";
import AuthNav from "./AuthNav";

import classes from "./styles/Signin.module.css";

const Signin: React.FC = () => {
    const emailHook = useInput((value) => value.includes("@"));
    const passwordHook = useInput((value) => value.length >= 8);

    const inputs: InputInterface[] = [
        {
            name: "email",
            hook: emailHook,
            type: "email",
            placeholder: "Adres e-mail",
        },
        {
            name: "password",
            hook: passwordHook,
            type: "password",
            placeholder: "Hasło",
        },
    ];

    return (
        <div className={classes.signin}>
            <AuthNav />
            <Form inputs={inputs} submitLabel="Zaloguj się" />
            <div className={classes.bottom}>
                <Link to="/signup">Zarejestruj się</Link>
                <Link to="/password/send">Zapomniałeś hasła?</Link>
            </div>
        </div>
    );
};

export default Signin;
