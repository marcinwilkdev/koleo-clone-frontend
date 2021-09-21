import React from "react";
import MyOrdersTicket from "./MyOrdersTicket";
import classes from "./styles/MyOrdersTable.module.css";

interface Props {
    pageNumber: number;
}

const MyOrdersTable: React.FC<Props> = ({ pageNumber }) => {
    return (
        <div className={classes.table}>
            <div className={classes.tableHeader}>
                <h3>DATA WYJAZDU</h3>
                <h3>STACJE WYJAZDU I PRZYJAZDU</h3>
                <h3>BILET</h3>
                <h3>RODZAJ POCIAGU</h3>
                <h3>CENA</h3>
                <h3>AKCJE</h3>
            </div>
            <MyOrdersTicket
                date={new Date()}
                arrivalStation="Długołęka"
                departureStation="Wrocław Główny"
                price={2.84}
                ticketType="jednorazowy"
                trainType="KD"
            />
            <MyOrdersTicket
                date={new Date()}
                arrivalStation="Długołęka"
                departureStation="Wrocław Główny"
                price={2.84}
                ticketType="jednorazowy"
                trainType="KD"
            />
        </div>
    );
};

export default MyOrdersTable;
