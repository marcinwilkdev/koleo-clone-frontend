import React from "react";
import Button from "../UI/Button/Button";
import classes from "./styles/ConnectionBuyTicket.module.css";

interface Props {
    price: number;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ConnectionBuyTicket: React.FC<Props> = ({ price, onClick }) => {
    return (
        <Button className={classes.buyTicket} onClick={onClick}>
            Kup bilet {price.toFixed(2)}zł
        </Button>
    );
};

export default ConnectionBuyTicket;
