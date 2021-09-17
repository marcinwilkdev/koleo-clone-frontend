import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";
import Signin from "./Signin";
import Signup from "./Signup";
import classes from "./styles/Auth.module.css";

const AuthComponent: React.FC = () => {
    return (
        <div className={classes.auth}>
            <div className={classes.info}>
                <p className={classes.h3}>
                    <b>Dlaczego</b> warto założyć konto?
                </p>
                <p>
                    Dzięki KOLEO w jednym miejscu kupisz wszystkie bilety na
                    wszystkie pociągi. Szybko, bezpiecznie i wygodnie.
                </p>
                <Link to="/">
                    <button>{"< "}wróć</button>
                </Link>
            </div>
            <div className={classes.form}>
                <AuthNav/>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </div>
        </div>
    );
};

export default AuthComponent;
