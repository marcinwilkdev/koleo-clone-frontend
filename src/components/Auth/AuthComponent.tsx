import React from "react";
import { Redirect, Route, Switch } from "react-router";
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
                <AuthNav />
                <Switch>
                    <Route path="/auth/signin" exact>
                        <Signin />
                    </Route>
                    <Route path="/auth/signup" exact>
                        <Signup />
                    </Route>
                    <Route path="/auth/">
                        <Redirect to="/not-found" />
                    </Route>
                </Switch>
            </div>
        </SplitLayout>
    );
};

export default AuthComponent;
