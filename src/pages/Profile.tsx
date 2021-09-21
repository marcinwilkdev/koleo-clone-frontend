import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import ProfileNav from "../components/Profile/ProfileNav/ProfileNav";

const Profile: React.FC = () => {
    return (
        <Fragment>
            <ProfileNav />
            <Switch>
                <Route path="/profile/my-orders" exact/>
                <Route path="/profile/passengers" exact/>
                <Route path="/profile/my-data" exact/>
                <Route path="/profile/finances" exact/>
                <Route path="/profile/settings" exact/>
                <Route path="/profile/">
                    <Redirect to="/not-found" />
                </Route>
            </Switch>
        </Fragment>
    );
};

export default Profile;
