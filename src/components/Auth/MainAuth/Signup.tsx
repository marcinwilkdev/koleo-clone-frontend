import React from "react";
import { Link, useHistory } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import useInput from "../../../hooks/use-input";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import classes from "./styles/Signup.module.css";

const Signup: React.FC = () => {
    const history = useHistory();
    const { sendRequest } = useHttp();

    const emailHook = useInput((value) => value.includes("@"));
    const passwordHook = useInput((value) => value.length >= 8);
    const confirmPasswordHook = useInput((value) => value.length >= 8);

    const isFormValid =
        emailHook.isValid &&
        passwordHook.isValid &&
        confirmPasswordHook.isValid;

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        const data = await sendRequest("/auth/signup", "PUT", {
            email: emailHook.value,
            password: passwordHook.value,
            confirmPassword: confirmPasswordHook.value,
        });

        history.push("/auth/discount-choice");
    };

    return (
        <div className={classes.signup}>
            <form onSubmit={submitHandler}>
                <Input
                    name="email"
                    type="email"
                    hook={emailHook}
                    placeholder="Adres e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    hook={passwordHook}
                    placeholder="Hasło (co najmniej 8 znaków)"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    hook={confirmPasswordHook}
                    placeholder="Potwierdzenie hasła (co najmniej 8 znaków)"
                />
                <Button type="submit" disabled={!isFormValid}>
                    Zaloguj się
                </Button>
            </form>
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
