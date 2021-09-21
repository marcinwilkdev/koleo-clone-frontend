import React, { useContext } from "react";
import { useHistory } from "react-router";
import useHttp from "../../../hooks/use-http";
import useInput from "../../../hooks/use-input";
import authContext from "../../../store/auth-context";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Title from "../../UI/Title/Title";

import classes from "./styles/SetDataForm.module.css";

interface Props {
    discount: boolean;
}

const SetDataForm: React.FC<Props> = ({ discount }) => {
    const history = useHistory();
    const { sendRequest } = useHttp();

    const nameHook = useInput((value) => value.trim() !== "");
    const lastNameHook = useInput((value) => value.trim() !== "");
    const dayHook = useInput((value) => +value > 0 && +value <= 31);
    const monthHook = useInput((value) => value.trim() !== "");
    const yearHook = useInput((value) => value.trim() !== "");

    const dateHasErrors =
        dayHook.showError || monthHook.showError || yearHook.showError;

    const tooOld = new Date().getFullYear() - +yearHook.value > 115;
    const tooYoung = new Date().getFullYear() - +yearHook.value < 16;

    const isFormValid =
        nameHook.isValid &&
        lastNameHook.isValid &&
        dayHook.isValid &&
        monthHook.isValid &&
        yearHook.isValid;

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        const token = localStorage.getItem("token");

        await sendRequest(
            "/auth/set-data",
            "PUT",
            {
                discount: discount ? "true" : "false",
                firstName: nameHook.value,
                lastName: lastNameHook.value,
                dateOfBirth: new Date(
                    +monthHook.value,
                    +yearHook.value,
                    +dayHook.value
                ).toISOString(),
            },
            token
        );

        history.replace("/");
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="name">
                <Title title="Imię i nazwisko" />
            </label>
            <Input name="name" hook={nameHook} placeholder="* Imię" />
            {nameHook.showError && (
                <div className={classes.error}>Nieprawidłowe imię.</div>
            )}
            <Input
                name="lastName"
                hook={lastNameHook}
                placeholder="* Nazwisko"
            />
            {lastNameHook.showError && (
                <div className={classes.error}>Nieprawidłowe nazwisko.</div>
            )}
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
                    <option value="" disabled selected>
                        * Miesiąc
                    </option>
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
            {dateHasErrors && (
                <div className={classes.error}>Nieprawidłowa data.</div>
            )}
            {!dateHasErrors && yearHook.value !== "" && tooOld && (
                <div className={classes.error}>
                    Aby zostać użytkownikiem KOLEO musisz mieć poniżej 115 lat.
                </div>
            )}
            {!dateHasErrors && yearHook.value !== "" && tooYoung && (
                <div className={classes.error}>
                    Aby zostać użytkownikiem KOLEO musisz mieć powyzej 16 lat.
                </div>
            )}
            <Button type="submit" disabled={!isFormValid}>
                Zapisz
            </Button>
        </form>
    );
};

export default SetDataForm;
