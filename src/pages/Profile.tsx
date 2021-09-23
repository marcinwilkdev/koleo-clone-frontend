import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";

import MyOrders from "../components/Profile/Orders/MyOrders";
import ProfileNav from "../components/Profile/ProfileNav/ProfileNav";

const Profile: React.FC = () => {
    return (
        <Fragment>
            <ProfileNav />
            <Switch>
                <Route path="/profile/my-orders" component={MyOrders} exact />
                <Route path="/profile/passengers" exact>
                    not implemented
                </Route>
                <Route path="/profile/my-data" exact>
                    not implemented
                </Route>
                <Route path="/profile/finances" exact>
                    not implemented
                </Route>
                <Route path="/profile/settings" exact>
                    not implemented
                </Route>
                <Route path="/profile">
                    <Redirect to="/not-found" />
                </Route>
            </Switch>
        </Fragment>
    );
};

export default Profile;
