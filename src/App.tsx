import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <Switch>  
                <Route path="/" component={Index} exact />
                <Route path="/signin" exact>
                  <Auth />
                </Route>
                <Route path="/signup" exact>
                  <Auth signup/>
                </Route>
                <Route path="/" component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default App;
