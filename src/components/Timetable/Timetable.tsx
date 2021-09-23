import React from "react";
import { useLocation } from "react-router";
import Connection from "./Connection";

import classes from "./styles/Timetable.module.css";

const Timetable: React.FC = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const fromParam = queryParams.get("from");
    const toParam = queryParams.get("to");
    const dateParam = queryParams.get("date");

    const departureCity = fromParam?.toLocaleUpperCase();
    const arrivalCity = toParam?.toLocaleUpperCase();

    const today = new Date();
    const fiveDaysFromNow = new Date();

    fiveDaysFromNow.setHours(today.getHours() + 2)
    fiveDaysFromNow.setMinutes(today.getMinutes() + 29)

    return (
        <div>
            <div className={classes.header}>
                <p>{departureCity}</p>
                <p>{arrivalCity}</p>
                <p>POŁACZENIE</p>
                <p>CZAS PODROŻY</p>
                <p>CENA DLA CIEBIE</p>
            </div>
            <Connection departureDate={today} arrivalDate={fiveDaysFromNow} price={5.99} trainType="IC" />
            <Connection departureDate={today} arrivalDate={fiveDaysFromNow} price={5.99} trainType="IC" />
        </div>
    );
};

export default Timetable;
