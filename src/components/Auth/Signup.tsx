import React from "react";
import { Link, useHistory } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Form from "../UI/Form/Form";
import { InputInterface } from "../UI/Input/Input";

import classes from "./styles/Signup.module.css";

const Signup: React.FC = () => {
    const history = useHistory();

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

    const afterSubmitCallback = () => {
        history.push("/auth/discount-choice");
    };

    return (
        <div className={classes.signup}>
            <Form
                inputs={inputs}
                submitLabel="Zarejestruj się"
                submitUrl="/auth/signup"
                submitMethod="PUT"
                afterSubmitCallback={afterSubmitCallback}
            />
            <p>
                Masz juz konto?{" "}
                <Link className={classes.bottomLink} to="/auth/signin">
                    Zaloguj się
                </Link>
            </p>
        </div>
    );
};

export default Signup;
