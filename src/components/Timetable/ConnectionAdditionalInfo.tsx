import React from "react";
import classes from "./styles/ConnectionAdditionalInfo.module.css";

interface Props {}

const ConnectionAdditionalInfo: React.FC<Props> = ({}) => {
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
