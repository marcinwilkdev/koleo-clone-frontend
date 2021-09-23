import React from "react";
import { ISavedTicket } from "../../../models/ticket";
import Title from "../../UI/Title/Title";
import classes from "./styles/MyOrdersTicket.module.css";

const MyOrdersTicket: React.FC<ISavedTicket> = ({
    date,
    departureCity,
    arrivalCity,
    ticketType,
    trainType,
    price,
}) => {
    const formattedDate = new Date(date).toLocaleDateString();

    return (
        <div className={classes.ticket}>
            <p>{formattedDate}</p>
            <p>
                <Title title={departureCity} /> -{" "}
                <Title title={arrivalCity} />
            </p>
            <p>{ticketType}</p>
            <p>{trainType}</p>
            <p>{price.toFixed(2)}zł</p>
            <p>Bilet | Drukuj | Oceń podróz | Opcje</p>
        </div>
    );
};

export default MyOrdersTicket;
