import React from "react";
import Button from "../UI/Button/Button";
import classes from "./styles/ConnectionBuyTicket.module.css";

interface Props {
    price: number;
}

const ConnectionBuyTicket: React.FC<Props> = ({ price }) => {
    return <Button className={classes.buyTicket}>Kup bilet {price.toFixed(2)}zł</Button>;
};

export default ConnectionBuyTicket;
