import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import classes from "./styles/WelcomeForm.module.css";

const WelcomeForm: React.FC = () => {
    return (
        <form className={classes.welcomeForm}>
            <Input placeholder="Z"/>
            <Input placeholder="DO"/>
            <Input type="date" placeholder="Z"/>
            <Button type="submit"><b>ZNAJDŹ</b> POŁĄCZENIE</Button>
        </form>
    );
};

export default WelcomeForm;
