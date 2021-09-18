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

    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Index} exact />

                    {!isLoggedIn && <Route path="/auth" component={Auth} />}
                    {isLoggedIn && (
                        <Route path="/profile" component={Profile} />
                    )}

                    <Route path="/not-found" component={NotFound} />
                    
                    <Route path="/">
                        {isLoggedIn && <Redirect to="/not-found" />}
                        {!isLoggedIn && <Redirect to="/auth/signup" />}
                    </Route>
                </Switch>
            </main>
        </Fragment>
    );
};

export default App;
