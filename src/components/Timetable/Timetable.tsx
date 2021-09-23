import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import useHttp from "../../hooks/use-http";
import { ISavedConnection } from "../../models/connection";

import Connection from "./Connection";

import classes from "./styles/Timetable.module.css";
interface FindConnectionsResponseBody {
    message: string;
    connections: ISavedConnection[];
}

const Timetable: React.FC = () => {
    const [connections, setConnections] = useState<ISavedConnection[]>([]);

    const { sendRequest } = useHttp();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const fromParam = queryParams.get("from");
    const toParam = queryParams.get("to");

    useEffect(() => {
        const fetchConnections = async () => {
            const queryString = location.search;

            const connections = (await sendRequest(
                "/connections/find" + queryString
            )) as FindConnectionsResponseBody;

            setConnections(connections.connections);
        };

        fetchConnections();
    }, [sendRequest, location.search]);

    const departureCity = fromParam?.toLocaleUpperCase();
    const arrivalCity = toParam?.toLocaleUpperCase();

    const today = new Date();
    const fiveDaysFromNow = new Date();

    fiveDaysFromNow.setHours(today.getHours() + 2);
    fiveDaysFromNow.setMinutes(today.getMinutes() + 29);

    return (
        <div>
            <div className={classes.header}>
                <p>{departureCity}</p>
                <p>{arrivalCity}</p>
                <p>POŁACZENIE</p>
                <p>CZAS PODROŻY</p>
                <p>CENA DLA CIEBIE</p>
            </div>
            {connections.map((connection) => (
                <Connection key={connection.id} {...connection} />
            ))}
        </div>
    );
};

export default Timetable;
