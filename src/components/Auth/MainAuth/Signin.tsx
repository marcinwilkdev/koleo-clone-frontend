import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import authContext from "../../../store/auth-context";
import Form from "../../UI/Form/Form";
import { InputInterface } from "../../UI/Input/Input";

import classes from "./styles/Signin.module.css";

const Signin: React.FC = () => {
    const { login } = useContext(authContext);

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

    const afterSubmitCallback = (data: any) => {
        const formattedData = data as { message: string; token: string };

        if(!formattedData.token) return;

        login(formattedData.token);
    };

    return (
        <div className={classes.signin}>
            <Form
                inputs={inputs}
                submitLabel="Zaloguj się"
                submitUrl="/auth/signin"
                submitMethod="POST"
                afterSubmitCallback={afterSubmitCallback}
            />
            <div className={classes.bottom}>
                <Link to="/auth/signup">Zarejestruj się</Link>
                <Link to="/auth/password/send">Zapomniałeś hasła?</Link>
            </div>
        </div>
    );
};

export default Signin;