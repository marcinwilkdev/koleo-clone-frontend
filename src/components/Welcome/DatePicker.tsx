import React from "react";
import { UseInputHook } from "../../hooks/use-input";
import classes from "./styles/DatePicker.module.css";

interface Props {
    hook: UseInputHook<HTMLInputElement>;
}

const getFormattedDateString = (date: Date): string => {
    return date.toISOString().split("T")[0];
};

export const formattedToday = getFormattedDateString(new Date());

const DatePicker: React.FC<Props> = ({ hook }) => {
    const todayDate = new Date();

    const afterDate = new Date();
    afterDate.setDate(new Date().getDate() + 30);

    return (
        <input
            className={classes.datePicker}
            name="date"
            type="date"
            value={hook.value}
            onChange={hook.changeHandler}
            onBlur={hook.blurHandler}
            min={getFormattedDateString(todayDate)}
            max={getFormattedDateString(afterDate)}
        />
    );
};

export default DatePicker;
