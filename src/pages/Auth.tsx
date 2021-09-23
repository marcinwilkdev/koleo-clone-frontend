import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import DiscountChoice from "../components/Auth/DiscountChoice/DiscountChoice";
import MainAuth from "../components/Auth/MainAuth/MainAuth";
import SetData from "../components/Auth/SetData/SetData";
import SplitLayout from "../components/Layout/SplitLayout";
import authContext from "../store/auth-context";

const Auth: React.FC = () => {
    const { isLoggedIn } = useContext(authContext);

    const [discount, setDiscount] = useState<boolean>(false);

    return (
        <SplitLayout>
            <Switch>
                <Route path="/auth/discount-choice" exact>
                    <DiscountChoice
                        applyDiscount={setDiscount.bind(null, true)}
                    />
                </Route>
                <Route path="/auth/set-data" exact>
                    <SetData discount={discount} />
                </Route>
                {!isLoggedIn && <Route path="/auth" component={MainAuth} />}
                {isLoggedIn && (
                    <Route path="/auth">
                        <Redirect to="/not-found" />
                    </Route>
                )}
            </Switch>
        </SplitLayout>
    );
};

export default Auth;
