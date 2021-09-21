import React from "react";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Title from "../UI/Title/Title";
import DatePicker, { formattedToday } from "./DatePicker";

import classes from "./styles/WelcomeForm.module.css";

const WelcomeForm: React.FC = () => {
    const fromHook = useInput((value) => value.length >= 1);
    const toHook = useInput((value) => value.length >= 1);
    const dateHook = useInput(() => true, formattedToday);

    return (
        <form className={classes.welcomeForm}>
            <Input name="from" placeholder="Z" hook={fromHook} />
            <Input name="to" placeholder="DO" hook={toHook} />
            <DatePicker hook={dateHook} />
            <Button type="submit">
                <Title title="ZNAJDŹ POŁĄCZENIE" />
            </Button>
        </form>
    );
};

export default WelcomeForm;
