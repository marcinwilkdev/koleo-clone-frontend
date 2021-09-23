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

    const price = 5.99;

    return (
        <div className={classes.connection}>
            <ConnectionInfo
                arrivalCity={arrivalCity}
                departureCity={departureCity}
                price={price}
                trainType={trainType}
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
