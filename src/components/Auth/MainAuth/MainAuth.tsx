import React, { Fragment } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Title from "../../UI/Title/Title";
import MainAuthNav from "./MainAuthNav";
import Signin from "./Signin";
import Signup from "./Signup";

import classes from "./styles/MainAuth.module.css";

const MainAuth: React.FC = () => {
    return (
        <Fragment>
            <div>
                <h3>
                    <Title title="Dlaczego warto założyć konto?"/>
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
                <MainAuthNav />
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
        </Fragment>
    );
};

export default MainAuth;
