import React from "react";
import useInput from "../../../hooks/use-input";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Title from "../../UI/Title/Title";

import classes from "./styles/SetDataForm.module.css";

interface Props {}

const SetDataForm: React.FC<Props> = ({}) => {
    const nameHook = useInput((value) => value.trim() !== "");
    const lastNameHook = useInput((value) => value.trim() !== "");
    const dayHook = useInput((value) => value.trim() !== "");
    const monthHook = useInput((value) => value.trim() !== "");
    const yearHook = useInput((value) => value.trim() !== "");

    const isFormValid =
        nameHook.isValid &&
        lastNameHook.isValid &&
        dayHook.isValid &&
        monthHook.isValid &&
        yearHook.isValid;

    return (
        <form className={classes.form}>
            <label htmlFor="name">
                <Title title="Imię i nazwisko" />
            </label>
            <Input name="name" hook={nameHook} placeholder="* Imię" />
            <Input
                name="lastName"
                hook={lastNameHook}
                placeholder="* Nazwisko"
            />
            <label htmlFor="day">
                <Title title="Data urodzenia" />
            </label>
            <div>
                <Input name="day" hook={dayHook} placeholder="* Dzień" />
                <Input name="month" hook={monthHook} placeholder="* Miesiąc" />
                <Input name="year" hook={yearHook} placeholder="* Rok" />
            </div>
            <Button type="submit" disabled={!isFormValid}>
                Zapisz
            </Button>
        </form>
    );
};

export default SetDataForm;
