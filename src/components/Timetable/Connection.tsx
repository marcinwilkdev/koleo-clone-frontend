import React from "react";
import { ISavedConnection } from "../../models/connection";
import classes from "./styles/Connection.module.css";

const Connection: React.FC<ISavedConnection> = ({
    cities,
    trainType,
}) => {
    const departureCity = cities[0];
    const arrivalCity = cities[cities.length - 1];

    const departureDate = new Date(departureCity.date);
    const arrivalDate = new Date(arrivalCity.date);

    const price = 5.99;

    const departureTime = `${departureDate.getHours()}:${departureDate.getMinutes()}`;
    const arrivalTime = `${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`;

    const travelTimeInMinutes =
        (arrivalDate.getTime() - departureDate.getTime()) / 60000;

    const travelTimeHours = Math.floor(travelTimeInMinutes / 60);
    const travelTimeMinutes = travelTimeInMinutes - travelTimeHours * 60;

    const travelTimeString = `${travelTimeHours}h${travelTimeMinutes}`;

    return (
        <div className={classes.connection}>
            <div>{departureTime}</div>
            <div>{arrivalTime}</div>
            <div className={classes.trainType}><p>{trainType}</p></div>
            <div className={classes.travelTime}>{travelTimeString}</div>
            <div>{price.toFixed(2)}zł</div>
        </div>
    );
};

export default Connection;
