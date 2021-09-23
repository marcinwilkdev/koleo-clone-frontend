import React, { Fragment, useState } from "react";
import { ISavedConnection } from "../../models/connection";
import ConnectionAdditionalInfo from "./ConnectionAdditionalInfo";
import ConnectionBuyTicket from "./ConnectionBuyTicket";
import ConnectionInfo from "./ConnectionInfo";
import classes from "./styles/Connection.module.css";

const Connection: React.FC<ISavedConnection> = ({ cities, trainType }) => {
    const [opened, setOpened] = useState<boolean>(false);

    const toggleOpened = () => {
        setOpened((opened) => !opened);
    };

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
            <ConnectionInfo
                arrivalTime={arrivalTime}
                departureTime={departureTime}
                price={price}
                trainType={trainType}
                travelTimeString={travelTimeString}
                opened={opened}
                onClick={toggleOpened}
            />
            {opened && (
                <Fragment>
                    <ConnectionAdditionalInfo />
                    <ConnectionBuyTicket price={price} />
                </Fragment>
            )}
        </div>
    );
};

export default Connection;
