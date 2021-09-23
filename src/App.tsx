import React, { Fragment, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import authContext from "./store/auth-context";

import Header from "./components/Header/Header";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App: React.FC = () => {
    const { isLoggedIn } = useContext(authContext);

    let loginStatus = isLoggedIn;

    if (loginStatus === null) {
        const token = localStorage.getItem("token");

        if (token) {
            loginStatus = true;
        }
    }

    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/auth" component={Auth} />

                    {loginStatus && (
                        <Route path="/profile" component={Profile} />
                    )}

                    {loginStatus && (
                        <Route path="/not-found" component={NotFound} exact />
                    )}

                    <Route path="/" exact>
                        <Redirect to="/index" />
                    </Route>

                    <Route path="/">
                        {loginStatus && <Redirect to="/not-found" />}
                        {!loginStatus && <Redirect to="/auth/signup" />}
                    </Route>
                </Switch>
            </main>
        </Fragment>
    );
};

export default App;
