import React from "react";
import useInput from "../../../hooks/use-input";
import Form, { FormInputInterface } from "../../UI/Form/Form";

import classes from "./styles/SetDataForm.module.css";

interface Props {}

const SetDataForm: React.FC<Props> = ({}) => {
    const nameHook = useInput((value) => value.trim() !== "");
    const lastNameHook = useInput((value) => value.trim() !== "");
    const dayHook = useInput((value) => value.trim() !== "");
    const monthHook = useInput((value) => value.trim() !== "");
    const yearHook = useInput((value) => value.trim() !== "");

    const inputs: FormInputInterface[] = [
        {
            name: "name",
            hook: nameHook,
            placeholder: "* Imię",
            label: "Imię i nazwisko",
        },
        {
            name: "lastName",
            hook: lastNameHook,
            placeholder: "* Nazwisko",
        },
        {
            name: "day",
            hook: dayHook,
            type: "number",
            placeholder: "* Dzień",
            label: "Data urodzenia",
            className: `${classes.date} ${classes.day}`
        },
        {
            name: "month",
            hook: monthHook,
            placeholder: "* Miesiąc",
            className: classes.date
        },
        {
            name: "year",
            hook: yearHook,
            type: "number",
            placeholder: "* Rok",
            className: classes.date
        },
    ];

    return (
        <Form
            className={classes.form}
            inputs={inputs}
            submitLabel="Zapisz"
            submitMethod="POST"
            submitUrl=""
        />
    );
};

export default SetDataForm;
