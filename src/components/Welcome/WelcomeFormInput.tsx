import React from "react";
import useInput, { UseInputHook } from "../../hooks/use-input";
import Input from "../UI/Input/Input";
import classes from "./styles/WelcomeFormInput.module.css";
import { City } from "./WelcomeForm";

interface Props {
    hook: UseInputHook<HTMLInputElement>;
    cities: City[];
    name: string;
    placeholder: string;
}

const WelcomeFormInput: React.FC<Props> = ({
    hook,
    cities,
    name,
    placeholder,
}) => {
    let compiledOptionsClassName = classes.options;

    const showOptions = hook.value.length >= 2;

    const filteredCities = cities
        .filter((city) => {
            const lowerCaseCityName = city.name.toLocaleLowerCase();
            const lowerCaseHookValue = hook.value.toLocaleLowerCase();

            return lowerCaseCityName.includes(lowerCaseHookValue);
        })
        .slice(0, 5);

    if (showOptions && filteredCities.length > 0) {
        compiledOptionsClassName += " " + classes.show;
    }

    return (
        <div className={classes.input}>
            <Input name={name} placeholder={placeholder} hook={hook} />
            <div className={compiledOptionsClassName}>
                {filteredCities.map((city) => (
                    <div className={classes.option}>
                        {city.name.toLocaleUpperCase()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WelcomeFormInput;
