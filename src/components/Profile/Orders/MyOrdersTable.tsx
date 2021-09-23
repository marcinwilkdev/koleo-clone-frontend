import React, { useContext, useEffect, useState } from "react";
import useHttp from "../../../hooks/use-http";
import { ISavedTicket } from "../../../models/ticket";
import authContext from "../../../store/auth-context";
import MyOrdersTicket from "./MyOrdersTicket";
import classes from "./styles/MyOrdersTable.module.css";

interface Props {
    pageNumber: number;
}

interface GetTicketsResponseBody {
    message: string;
    tickets: ISavedTicket[];
}

const MyOrdersTable: React.FC<Props> = ({ pageNumber }) => {
    const { sendRequest } = useHttp();
    const { token, isLoggedIn } = useContext(authContext);

    const [tickets, setTickets] = useState<ISavedTicket[]>([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const data = (await sendRequest(
                "/tickets/list?page=" + pageNumber,
                "GET",
                {},
                token
            )) as GetTicketsResponseBody;

            console.log(data);

            if (!data || !data.tickets) return;

            setTickets(data.tickets);
        };

        if (isLoggedIn !== null) {
            fetchTickets();
        }
    }, [pageNumber, token, isLoggedIn, sendRequest]);

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
            {tickets.map((ticket) => (
                <MyOrdersTicket key={ticket.id} {...ticket} />
            ))}
        </div>
    );
};

export default MyOrdersTable;
