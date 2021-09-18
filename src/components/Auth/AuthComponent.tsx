import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import SplitLayout from "../Layout/SplitLayout";
import AuthNav from "./AuthNav";
import Signin from "./Signin";
import Signup from "./Signup";
import classes from "./styles/Auth.module.css";

const AuthComponent: React.FC = () => {
    return (
        <SplitLayout>
            <div>
                <h3>
                    <b>Dlaczego</b> warto założyć konto?
                </h3>
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
        </SplitLayout>
    );
};

export default AuthComponent;
