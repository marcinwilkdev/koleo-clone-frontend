import React from "react";

import classes from "./styles/ConnectionAdditionalInfo.module.css";

const ConnectionAdditionalInfo: React.FC = () => {
    return (
        <div className={classes.additionalInfo}>
            <div>Połączenie bezpośrednie(dummy)</div>
            <div>69769(dummy)</div>
            <div>20 km(dummy)</div>
            <div>2(dummy)</div>
        </div>
    );
};

export default ConnectionAdditionalInfo;
