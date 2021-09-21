import React, { useEffect, useState } from "react";
import { UseInputHook } from "../../hooks/use-input";
import Input from "../UI/Input/Input";
import classes from "./styles/WelcomeFormInput.module.css";
import { City } from "./WelcomeForm";

interface CityOptionProps {
    replaceValue: (value: string) => void;
    hideOptions: () => void;
    name: string;
}

interface Props {
    hook: UseInputHook<HTMLInputElement>;
    cities: City[];
    name: string;
    placeholder: string;
}

const CityOption: React.FC<CityOptionProps> = ({
    replaceValue,
    hideOptions,
    name,
}) => {
    const clickHandler: React.MouseEventHandler<HTMLDivElement> = () => {
        replaceValue(name);
        hideOptions();
    };

    return (
        <div className={classes.option} onClick={clickHandler}>
            {name.toLocaleUpperCase()}
        </div>
    );
};

const filterCities = (cities: City[], value: string) => {
    return cities
        .filter((city) => {
            const lowerCaseCityName = city.name.toLocaleLowerCase();
            const lowerCaseHookValue = value.toLocaleLowerCase();

            return lowerCaseCityName.includes(lowerCaseHookValue);
        })
        .slice(0, 5);
};

const WelcomeFormInput: React.FC<Props> = ({
    hook,
    cities,
    name,
    placeholder,
}) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const hideOptions = () => {
        setTimeout(() => setShowOptions(false)); // to make setShowOptions async
    };

    useEffect(() => {
        setShowOptions(hook.value.length >= 2);
    }, [hook.value]);

    const filteredCities = filterCities(cities, hook.value);

    let compiledOptionsClassName = classes.options;

    if (showOptions && filteredCities.length > 0) {
        compiledOptionsClassName += " " + classes.show;
    }

    return (
        <div className={classes.input}>
            <Input name={name} placeholder={placeholder} hook={hook} />
            <div className={compiledOptionsClassName}>
                {filteredCities.map((city) => (
                    <CityOption
                        key={city.id}
                        replaceValue={hook.replaceValue}
                        hideOptions={hideOptions}
                        name={city.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default WelcomeFormInput;
