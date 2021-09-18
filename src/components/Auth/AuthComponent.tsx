import React from "react";
import { Route, Switch } from "react-router";
import SplitLayout from "../Layout/SplitLayout";
import MainAuth from "./MainAuth";


const AuthComponent: React.FC = () => {
    return (
        <SplitLayout>
            <Switch>
                <Route path="/auth" component={MainAuth} />
            </Switch>
        </SplitLayout>
    );
};

export default AuthComponent;
