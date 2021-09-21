import React from "react";
import Title from "../../UI/Title/Title";
import classes from "./styles/MyOrdersTicket.module.css";

interface Props {
    date: Date;
    departureStation: string;
    arrivalStation: string;
    ticketType: string;
    trainType: string;
    price: number;
}

const MyOrdersTicket: React.FC<Props> = ({
    date,
    departureStation,
    arrivalStation,
    ticketType,
    trainType,
    price,
}) => {
    return (
        <div className={classes.ticket}>
            <p>{date.toLocaleDateString()}</p>
            <p>
                <Title title={departureStation} /> -{" "}
                <Title title={arrivalStation} />
            </p>
            <p>{ticketType}</p>
            <p>{trainType}</p>
            <p>{price.toFixed(2)}zł</p>
            <p>Bilet | Drukuj | Oceń podróz | Opcje</p>
        </div>
    );
};

export default MyOrdersTicket;
