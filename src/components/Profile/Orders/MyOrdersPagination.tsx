import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useHttp from "../../../hooks/use-http";
import authContext from "../../../store/auth-context";

import classes from "./styles/MyOrdersPagination.module.css";

interface Props {
    pageNumber: number;
}

interface GetTicketsCountResponseBody {
    message: string;
    ticketsCount: number;
}

const MAX_LINKS = 11;
const TICKETS_PER_PAGE = 10;

const generateStringPageLinks = (pageNumber: number, pages: number) => {
    let pageLinks: number[] = [pageNumber];
    let generatedPages = 1;

    while (generatedPages < pages && generatedPages < MAX_LINKS) {
        const lastGeneratedPage = pageLinks[pageLinks.length - 1];
        const firstGeneratedPage = pageLinks[0];

        if (lastGeneratedPage < pages) {
            pageLinks = [...pageLinks, lastGeneratedPage + 1];
            generatedPages++;
        }

        if (
            generatedPages < pages &&
            generatedPages < MAX_LINKS &&
            firstGeneratedPage > 1
        ) {
            pageLinks = [firstGeneratedPage - 1, ...pageLinks];
            generatedPages++;
        }
    }

    if (pageLinks[0] > 1) {
        pageLinks[0] = 1;
        pageLinks[1] = -1;
    }

    if (pageLinks[MAX_LINKS - 1] < pages) {
        pageLinks[MAX_LINKS - 1] = pages;
        pageLinks[MAX_LINKS - 2] = -1;
    }

    const stringPageLinks: string[] = pageLinks.map((link) => "" + link);

    return stringPageLinks;
};

const MyOrdersPagination: React.FC<Props> = ({ pageNumber }) => {
    const { sendRequest } = useHttp();
    const { token, isLoggedIn } = useContext(authContext);

    const [ticketCount, setTicketCount] = useState<number>(0);

    useEffect(() => {
        const fetchTicketCount = async () => {
            const data = (await sendRequest(
                "/tickets/count",
                "GET",
                {},
                token
            )) as GetTicketsCountResponseBody;

            console.log(data);

            if (!data || !data.ticketsCount) return;

            setTicketCount(data.ticketsCount);
        };

        if (isLoggedIn !== null) {
            fetchTicketCount();
        }
    }, [token, isLoggedIn, sendRequest]);

    const pages = Math.ceil(ticketCount / TICKETS_PER_PAGE);

    const stringPageLinks = generateStringPageLinks(pageNumber, pages);

    return (
        <Fragment>
            {pages > 1 && (
                <div className={classes.pagination}>
                    {stringPageLinks.map((link, index) => {
                        if (link === "-1") {
                            return <p key={index}>...</p>;
                        }

                        let className: string | undefined;

                        if (+link === pageNumber) {
                            className = classes.active;
                        }

                        return (
                            <Link
                                key={index}
                                className={className}
                                to={"/profile/my-orders?page=" + link}
                            >
                                {link}
                            </Link>
                        );
                    })}
                </div>
            )}
        </Fragment>
    );
};

export default MyOrdersPagination;
