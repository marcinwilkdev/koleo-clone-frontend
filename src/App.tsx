import React, { Fragment, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import authContext from "./store/auth-context";

const App: React.FC = () => {
    const { isLoggedIn } = useContext(authContext);

    let loginStatus = isLoggedIn;

    if(loginStatus === null) {
        const token = localStorage.getItem("token");

        if(token) {
            loginStatus = true;
        }
    }

    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Index} exact />
                    <Route path="/auth" component={Auth} />
                    {loginStatus && (
                        <Route path="/profile" component={Profile} />
                    )}

                    <Route path="/not-found" component={NotFound} />
                    
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
