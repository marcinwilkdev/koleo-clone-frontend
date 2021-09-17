import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Form from "../UI/Form/Form";
import { InputInterface } from "../UI/Input/Input";
import AuthNav from "./AuthNav";

import classes from "./styles/Signup.module.css";

const Signup: React.FC = () => {
    const emailHook = useInput((value) => value.includes("@"));
    const passwordHook = useInput((value) => value.length >= 8);
    const confirmPasswordHook = useInput((value) => value.length >= 8);

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
            placeholder: "Hasło (co najmniej 8 znaków)",
        },
        {
            name: "confirmPassword",
            hook: confirmPasswordHook,
            type: "password",
            placeholder: "Potwierdzenie hasła (co najmniej 8 znaków)",
        },
    ];

    return (
        <div className={classes.signup}>
            <AuthNav />
            <Form inputs={inputs} submitLabel="Zarejestruj się" />
            <p>
                Masz juz konto?{" "}
                <Link className={classes.bottomLink} to="/signin">
                    Zaloguj się
                </Link>
            </p>
        </div>
    );
};

export default Signup;
