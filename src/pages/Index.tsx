import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Welcome from "../components/Welcome/Welcome";
import Timetable from "../components/Timetable/Timetable";

const Index: React.FC = () => {
    return (
        <Switch>
            <Route path="/index" component={Welcome} exact />
            <Route path="/index/timetable" exact>
                <Welcome />
                <Timetable />
            </Route>
            <Route path="/index">
                <Redirect to="/not-found" />
            </Route>
        </Switch>
    );
};

export default Index;
