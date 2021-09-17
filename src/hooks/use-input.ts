import React, { useState } from "react";

type UseInput = (validator: (value: string) => boolean) => {
    value: string;
    isValid: boolean;
    showError: boolean;
    changeHandler: React.ChangeEventHandler<HTMLInputElement>;
    blurHandler: React.FocusEventHandler<HTMLInputElement>;
    reset: () => void;
};

const useInput: UseInput = (validator) => {
    const [value, setValue] = useState<string>("");
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const isValid = validator(value);
    const showError = !isValid && isTouched;

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setValue(event.target.value);
    };

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setIsTouched(false);
        setValue("");
    };

    return {
        value,
        isValid,
        showError,
        changeHandler,
        blurHandler,
        reset,
    };
};

export default useInput;
