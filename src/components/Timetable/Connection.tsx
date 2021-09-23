import React from "react";
import classes from "./styles/Connection.module.css";

interface Props {
    departureDate: Date;
    arrivalDate: Date;
    trainType: string;
    price: number;
}

const Connection: React.FC<Props> = ({
    departureDate,
    arrivalDate,
    trainType,
    price,
}) => {
    const departureTime = `${departureDate.getHours()}:${departureDate.getMinutes()}`;
    const arrivalTime = `${arrivalDate.getHours()}:${arrivalDate.getMinutes()}`;

    const travelTimeInMinutes =
        (arrivalDate.getTime() - departureDate.getTime()) / 60000;

    const travelTimeHours = Math.floor(travelTimeInMinutes / 60);
    const travelTimeMinutes = travelTimeInMinutes - travelTimeHours * 60;

    const travelTimeString = `${travelTimeHours}h${travelTimeMinutes}`;

    console.log(departureDate);
    console.log(arrivalDate);

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
