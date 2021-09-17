import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthNav from "./AuthNav";

import classes from "./styles/Signup.module.css";

const Signup: React.FC = () => {
    const emailHook = useInput((value) => value.includes("@"));
    const passwordHook = useInput((value) => value.length >= 8);
    const confirmPasswordHook = useInput((value) => value.length >= 8);

    return (
        <div className={classes.signup}>
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
                    placeholder="Hasło (co najmniej 8 znaków)"
                    hook={passwordHook}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Potwierdzenie hasła (co najmniej 8 znaków)"
                    hook={confirmPasswordHook}
                />
                <Button type="submit">Zarejestruj się</Button>
            </form>
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
