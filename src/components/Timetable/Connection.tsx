import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router";
import useHttp from "../../hooks/use-http";
import { ISavedConnection } from "../../models/connection";
import authContext from "../../store/auth-context";
import ConnectionAdditionalInfo from "./ConnectionAdditionalInfo";
import ConnectionBuyTicket from "./ConnectionBuyTicket";
import ConnectionInfo from "./ConnectionInfo";
import classes from "./styles/Connection.module.css";

export interface CreateTicketRequestBody {
    date: Date;
    departureCity: string;
    arrivalCity: string;
    ticketType: string;
    trainType: string;
    price: number;
}

const Connection: React.FC<ISavedConnection> = ({ cities, trainType }) => {
    const history = useHistory();
    const { token } = useContext(authContext);
    const { sendRequest } = useHttp();

    const [opened, setOpened] = useState<boolean>(false);

    const toggleOpened = () => {
        setOpened((opened) => !opened);
    };

    const departureCity = cities[0];
    const arrivalCity = cities[cities.length - 1];

    const price = 5.99;

    const buyTicket = async () => {
        const requestBody: CreateTicketRequestBody = {
            date: departureCity.date,
            departureCity: departureCity.city.name,
            arrivalCity: arrivalCity.city.name,
            price: price,
            trainType: trainType,
            ticketType: "jednorazowy",
        };

        const data = await sendRequest(
            "/tickets/create",
            "PUT",
            requestBody,
            token
        );

        history.push("/profile/my-orders");
    };

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
                    <ConnectionBuyTicket price={price} onClick={buyTicket} />
                </Fragment>
            )}
        </div>
    );
};

export default Connection;
