import React from "react";
import { Route, Switch } from "react-router";
import DiscountChoice from "../components/Auth/DiscountChoice/DiscountChoice";
import MainAuth from "../components/Auth/MainAuth/MainAuth";
import SetData from "../components/Auth/SetData/SetData";
import SplitLayout from "../components/Layout/SplitLayout";

const Auth: React.FC = () => {
    return (
        <SplitLayout>
            <Switch>
                <Route
                    path="/auth/discount-choice"
                    component={DiscountChoice}
                    exact
                />
                <Route path="/auth/set-data" component={SetData} exact />
                <Route path="/auth" component={MainAuth} />
            </Switch>
        </SplitLayout>
    );
};

export default Auth;
