import React from "react";
import { useLocation } from "react-router";
import Title from "../../UI/Title/Title";
import MyOrdersPagination from "./MyOrdersPagination";
import MyOrdersTable from "./MyOrdersTable";
import classes from "./styles/MyOrders.module.css";

const MyOrders: React.FC = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const pageParam = queryParams.get("page");

    let pageNumber = 1;

    if (pageParam) {
        pageNumber = +pageParam;
    }

    return (
        <div className={classes.myOrders}>
            <h1>
                <Title title="Moje bilety" />
            </h1>
            <MyOrdersTable pageNumber={pageNumber} />
            <MyOrdersPagination pageNumber={pageNumber} />
        </div>
    );
};

export default MyOrders;
