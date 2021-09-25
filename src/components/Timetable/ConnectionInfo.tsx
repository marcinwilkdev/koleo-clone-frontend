import React from "react";

import { ISavedCity } from "../../models/city";

import classes from "./styles/ConnectionInfo.module.css";

interface CityWithDate {
    city: ISavedCity;
    date: Date;
}

interface Props {
    departureCity: CityWithDate;
    arrivalCity: CityWithDate;
    trainType: string;
    price: number;
    opened: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const generateTravelTimeString = (departureDate: Date, arrivalDate: Date) => {
    const travelTimeInMinutes =
        (arrivalDate.getTime() - departureDate.getTime()) / 60000;

    const travelTimeHours = Math.floor(travelTimeInMinutes / 60);
    const travelTimeMinutes = travelTimeInMinutes - travelTimeHours * 60;

    let travelTimeString = `${travelTimeHours}h${travelTimeMinutes}`;

    if (travelTimeHours === 0) {
        travelTimeString = travelTimeMinutes + "min";
    }

    return travelTimeString;
};

const formatTime = (time: number) => {
    return time < 10 ? "0" + time : "" + time;
};

const ConnectionInfo: React.FC<Props> = ({
    departureCity,
    arrivalCity,
    trainType,
    price,
    opened,
    onClick,
}) => {
    const departureDate = new Date(departureCity.date);
    const arrivalDate = new Date(arrivalCity.date);

    const departureTime = `${departureDate.getHours()}:${formatTime(
        departureDate.getMinutes()
    )}`;
    
    const arrivalTime = `${arrivalDate.getHours()}:${formatTime(
        arrivalDate.getMinutes()
    )}`;

    const travelTimeString = generateTravelTimeString(
        departureDate,
        arrivalDate
    );

    let compiledClassName = classes.info;

    if (opened) {
        compiledClassName += " " + classes.active;
    }

    return (
        <div className={compiledClassName} onClick={onClick}>
            <div>{departureTime}</div>
            <div>{arrivalTime}</div>
            <div className={classes.trainType}>
                <p>{trainType}</p>
            </div>
            <div className={classes.travelTime}>{travelTimeString}</div>
            <div>{price.toFixed(2)}zł</div>
        </div>
    );
};

export default ConnectionInfo;
