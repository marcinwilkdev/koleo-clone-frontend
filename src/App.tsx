import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Index} exact />
                    <Route path="/auth" component={Auth} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </main>
        </Fragment>
    );
};

export default App;
