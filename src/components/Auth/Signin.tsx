import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthNav from "./AuthNav";

import classes from "./styles/Signin.module.css";

const Signin: React.FC = () => {
    return (
        <div className={classes.signin}>
            <AuthNav />
            <form>
                <Input type="email" placeholder="Adres e-mail" />
                <Input type="password" placeholder="Hasło" />
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
