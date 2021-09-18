import React from "react";
import { Route, Switch } from "react-router";
import SplitLayout from "../Layout/SplitLayout";
import DiscountChoice from "./DiscountChoice/DiscountChoice";
import MainAuth from "./MainAuth/MainAuth";

const AuthComponent: React.FC = () => {
    return (
        <SplitLayout>
            <Switch>
                <Route
                    path="/auth/discount-choice"
                    component={DiscountChoice}
                    exact
                />
                <Route path="/auth" component={MainAuth} />
            </Switch>
        </SplitLayout>
    );
};

export default AuthComponent;
