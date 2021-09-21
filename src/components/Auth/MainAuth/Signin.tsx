import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import useInput from "../../../hooks/use-input";
import authContext from "../../../store/auth-context";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import classes from "./styles/Signin.module.css";

interface SigninRequestBody {
    email: string;
    password: string;
}

interface SigninResponseBody {
    message: string;
    token: string;
    userData: string;
}

const Signin: React.FC = () => {
    const { login } = useContext(authContext);
    const { sendRequest, error } = useHttp();
    const history = useHistory();

    const emailHook = useInput((value) => value.includes("@"));
    const passwordHook = useInput((value) => value.length >= 8);

    const isFormValid = emailHook.isValid && passwordHook.isValid;

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        const requestBody: SigninRequestBody = {
            email: emailHook.value,
            password: passwordHook.value,
        };

        const data = (await sendRequest(
            "/auth/signin",
            "POST",
            requestBody
        )) as SigninResponseBody;

        if (error) return;

        emailHook.reset();
        passwordHook.reset();

        login(data.token, data.userData);

        history.replace("/profile/my-orders");
    };

    return (
        <div className={classes.signin}>
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
                    placeholder="Hasło"
                />
                <Button type="submit" disabled={!isFormValid}>
                    Zaloguj się
                </Button>
            </form>
            <div className={classes.bottom}>
                <Link to="/auth/signup">Zarejestruj się</Link>
                <Link to="/auth/password/send">Zapomniałeś hasła?</Link>
            </div>
        </div>
    );
};

export default Signin;
