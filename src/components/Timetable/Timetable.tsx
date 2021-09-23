import React from "react";
import { useLocation } from "react-router";

const Timetable: React.FC = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const fromParam = queryParams.get("from");
    const toParam = queryParams.get("to");
    const dateParam = queryParams.get("date");

    return (
        <div>
            <h3>{fromParam}</h3>
            <h3>{toParam}</h3>
            <h3>{dateParam}</h3>
        </div>
    );
};

export default Timetable;
