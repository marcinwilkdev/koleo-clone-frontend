import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import DatePicker, { formattedToday } from "./DatePicker";
import classes from "./styles/WelcomeForm.module.css";
import WelcomeFormInput from "./WelcomeFormInput";

export interface City {
    id: string;
    name: string;
}
interface GetCitiesResponseBody {
    message: string;
    cities: City[];
}

const WelcomeForm: React.FC = () => {
    const history = useHistory();
    const { sendRequest } = useHttp();

    const [cities, setCities] = useState<City[]>([]);

    const fromHook = useInput((value) => value.length >= 1);
    const toHook = useInput((value) => value.length >= 1);
    const dateHook = useInput(() => true, formattedToday);

    useEffect(() => {
        const fetchCities = async () => {
            const data = (await sendRequest(
                "/cities/list"
            )) as GetCitiesResponseBody;

            if (!data || !data.cities) return;

            setCities(data.cities);
        };

        fetchCities();
    }, [sendRequest]);

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (!fromHook.isReplaced || !toHook.isReplaced) return;

        history.push(
            `/timetable?from=${fromHook.value}&to=${toHook.value}&date=${dateHook.value}`
        );
    };

    return (
        <form className={classes.welcomeForm} onSubmit={submitHandler}>
            <WelcomeFormInput
                name="from"
                placeholder="Z"
                hook={fromHook}
                cities={cities}
            />
            <WelcomeFormInput
                name="to"
                placeholder="DO"
                hook={toHook}
                cities={cities}
            />
            <DatePicker hook={dateHook} />
            <Button type="submit">
                <Title title="ZNAJDŹ POŁĄCZENIE" />
            </Button>
        </form>
    );
};

export default WelcomeForm;
