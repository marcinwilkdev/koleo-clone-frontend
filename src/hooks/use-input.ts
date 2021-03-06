import React, { useState } from "react";

export interface UseInputHook<T> {
    value: string;
    isValid: boolean;
    showError: boolean;
    isReplaced: boolean;
    changeHandler: React.ChangeEventHandler<T>;
    blurHandler: React.FocusEventHandler<T>;
    replaceValue: (value: string) => void;
    reset: () => void;
}

const useInput = <T extends HTMLSelectElement & HTMLInputElement>(
    validator: (value: string) => boolean,
    initialValue?: string
): UseInputHook<T> => {
    const [value, setValue] = useState<string>(initialValue || "");
    const [isTouched, setIsTouched] = useState<boolean>(false);
    const [isReplaced, setIsReplaced] = useState<boolean>(false);

    const isValid = validator(value);
    const showError = !isValid && isTouched;

    const changeHandler: React.ChangeEventHandler<T> = (event) => {
        setValue(event.target.value);
        setIsReplaced(false);
    };

    const blurHandler: React.FocusEventHandler<T> = () => {
        setIsTouched(true);
    };

    const replaceValue = (value: string) => {
        setValue(value);
        setIsReplaced(true);
    };

    const reset = () => {
        setIsTouched(false);
        setValue("");
    };

    return {
        value,
        isValid,
        showError,
        isReplaced,
        changeHandler,
        blurHandler,
        replaceValue,
        reset,
    };
};

export default useInput;
