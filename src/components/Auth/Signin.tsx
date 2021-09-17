import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthNav from "./AuthNav";

import classes from "./styles/Signin.module.css";

const Signin: React.FC = () => {
    const emailHook = useInput((value) => value.includes("@"));
    const passwordHook = useInput((value) => value.length >= 8);

    return (
        <div className={classes.signin}>
            <AuthNav />
            <form>
                <Input
                    name="email"
                    type="email"
                    placeholder="Adres e-mail"
                    hook={emailHook}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Hasło"
                    hook={passwordHook}
                />
                <Button type="submit">Zarejestruj się</Button>
            </form>
            <div className={classes.bottom}>
                <Link to="/signup">Zarejestruj się</Link>
                <Link to="/password/send">Zapomniałeś hasła?</Link>
            </div>
        </div>
    );
};

export default Signin;
