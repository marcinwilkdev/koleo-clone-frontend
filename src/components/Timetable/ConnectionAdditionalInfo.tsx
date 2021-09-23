import React from "react";
import classes from "./styles/ConnectionAdditionalInfo.module.css";

const ConnectionAdditionalInfo: React.FC = () => {
    return (
        <div className={classes.additionalInfo}>
            <div>Połączenie bezpośrednie</div>
            <div>69769</div>
            <div>20 km</div>
            <div>2</div>
        </div>
    );
};

export default ConnectionAdditionalInfo;
