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
            <div className={classes.date}>
                <Input
                    name="day"
                    type="number"
                    hook={dayHook}
                    placeholder="* Dzień"
                />
                <select
                    name="month"
                    value={monthHook.value}
                    onChange={monthHook.changeHandler}
                    onBlur={monthHook.blurHandler}
                >
                    <option value="" disabled selected>* Miesiąc</option>
                    <option value="1">stycznia</option>
                    <option value="2">lutego</option>
                    <option value="3">marca</option>
                    <option value="4">kwietnia</option>
                    <option value="5">maja</option>
                    <option value="6">czerwca</option>
                    <option value="7">lipca</option>
                    <option value="8">sierpnia</option>
                    <option value="9">września</option>
                    <option value="10">października</option>
                    <option value="11">listopada</option>
                    <option value="12">grudnia</option>
                </select>
                <Input
                    name="year"
                    type="number"
                    hook={yearHook}
                    placeholder="* Rok"
                />
            </div>
            <Button type="submit" disabled={!isFormValid}>
                Zapisz
            </Button>
        </form>
    );
};

export default SetDataForm;
