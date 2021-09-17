import React from "react";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import classes from "./styles/WelcomeForm.module.css";

const WelcomeForm: React.FC = () => {
    const fromHook = useInput((value) => value.length >= 1);
    const toHook = useInput((value) => value.length >= 1);
    const dateHook = useInput(() => true);

    return (
        <form className={classes.welcomeForm}>
            <Input name="from" placeholder="Z" hook={fromHook}/>
            <Input name="to" placeholder="DO" hook={toHook}/>
            <Input name="date" type="date" placeholder="Z" hook={dateHook}/>
            <Button type="submit"><b>ZNAJDŹ</b> POŁĄCZENIE</Button>
        </form>
    );
};

export default WelcomeForm;
