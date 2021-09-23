import React from "react";
import classes from "./styles/ConnectionInfo.module.css";

interface Props {
    departureTime: string;
    arrivalTime: string;
    trainType: string;
    travelTimeString: string;
    price: number;
    opened: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ConnectionInfo: React.FC<Props> = ({
    departureTime,
    arrivalTime,
    trainType,
    travelTimeString,
    price,
    opened,
    onClick
}) => {
    let compiledClassName = classes.info;

    if(opened) {
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
