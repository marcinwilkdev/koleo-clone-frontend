import React from "react";
import Title from "../UI/Title/Title";
import classes from "./styles/Welcome.module.css";
import WelcomeForm from "./WelcomeForm";

const Welcome: React.FC = () => {
    return (
        <div className={classes.welcome}>
            <p className={classes.firstLine}>
                <Title title="Rozkład jazdy PKP i bilety" />
            </p>
            <p className={classes.secondLine}>
                Wyszukaj połączenie i kup bilet!
            </p>
            <WelcomeForm />
        </div>
    );
};

export default Welcome;
