import React from "react";
import classes from "./styles/ConnectionInfo.module.css";

interface Props {
    departureTime: string;
    arrivalTime: string;
    trainType: string;
    travelTimeString: string;
    price: number;
}

const ConnectionInfo: React.FC<Props> = ({
    departureTime,
    arrivalTime,
    trainType,
    travelTimeString,
    price,
}) => {
    return (
        <div className={classes.info}>
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
