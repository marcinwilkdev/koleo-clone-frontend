import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";

import classes from "./styles/DiscountChoice.module.css";

interface Props {
    applyDiscount: () => void;
}

const DiscountChoice: React.FC<Props> = ({ applyDiscount }) => {
    return (
        <Fragment>
            <div>
                <h3>
                    <Title title="Dlaczego potrzebujemy informacji o Twojej zniżce?" />
                </h3>
                <p>
                    Już tylko kilka kroków dzieli Cię od kupna biletu w prosty i
                    wygodny sposób. Wybierając odpowiednią zniżkę będziemy mogli
                    zawsze zaprezentować bilet w najbardziej korzystnej dla
                    Ciebie cenie.
                </p>
            </div>
            <div className={classes.right}>
                <h3>
                    <Title title="Czy posiadasz zniżki?" />
                </h3>
                <Link to="/auth/set-data">
                    <Button onClick={applyDiscount}>TAK</Button>
                </Link>
                <Link to="/auth/set-data">
                    <Button>NIE</Button>
                </Link>
                <div className={classes.additionalInfo}>
                    <h4>Nie wiesz?</h4>
                    <p>
                        Skorzystaj z kreatora i sprawdź jaka zniżka Ci
                        przysługuje!
                    </p>
                    <Button>Znajdź swoją znizke (not implemented)</Button>
                </div>
            </div>
        </Fragment>
    );
};

export default DiscountChoice;
