import React, { Fragment, useContext, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import authContext from "./store/auth-context";

import Header from "./components/Header/Header";

const Auth = React.lazy(() => import("./pages/Auth"));
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Profile = React.lazy(() => import("./pages/Profile"));

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
                <Suspense fallback={<div className="loading"><h1>Loading...</h1></div>}>
                    <Switch>
                        <Route path="/index" component={Index} />
                        <Route path="/auth" component={Auth} />

                        {loginStatus && (
                            <Route path="/profile" component={Profile} />
                        )}

                        {loginStatus && (
                            <Route
                                path="/not-found"
                                component={NotFound}
                                exact
                            />
                        )}

                        <Route path="/" exact>
                            <Redirect to="/index" />
                        </Route>

                        <Route path="/">
                            {loginStatus && <Redirect to="/not-found" />}
                            {!loginStatus && <Redirect to="/auth/signup" />}
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </Fragment>
    );
};

export default App;
