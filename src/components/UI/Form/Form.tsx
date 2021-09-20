import React, { Fragment } from "react";
import useHttp from "../../../hooks/use-http";
import Button from "../Button/Button";
import Input, { InputInterface } from "../Input/Input";
import Title from "../Title/Title";

import classes from "./styles/Form.module.css";

export interface FormInputInterface extends InputInterface {
    label?: string;
}

interface Props {
    className?: string;
    inputs: FormInputInterface[];
    submitLabel: string;
    submitUrl: string;
    submitMethod: string;
    afterSubmitCallback?: (data: any) => void;
}

const Form: React.FC<Props> = ({
    className,
    inputs,
    submitLabel,
    submitUrl,
    submitMethod,
    afterSubmitCallback,
}) => {
    const { sendRequest } = useHttp();

    const isFormValid = inputs.reduce(
        (prev, curr) => prev && curr.hook.isValid,
        true
    );

    const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
        event
    ) => {
        event.preventDefault();

        if (!isFormValid) return;

        let body: any = {};

        inputs.forEach((input) => (body[input.name] = input.hook.value));

        const data = await sendRequest(submitUrl, submitMethod, body);

        inputs.forEach((input) => input.hook.reset());

        if (afterSubmitCallback) afterSubmitCallback(data);
    };

    let compiledClassName = classes.form;

    if (className) {
        compiledClassName += " " + className;
    }

    return (
        <form onSubmit={submitHandler} className={compiledClassName}>
            {inputs.map((input) => (
                <Fragment>
                    {input.label ? (
                        <label htmlFor={input.name}>
                            <Title title={input.label} />
                        </label>
                    ) : null}
                    <Input
                        key={input.name}
                        className={input.className}
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        hook={input.hook}
                    />
                </Fragment>
            ))}
            <Button type="submit" disabled={!isFormValid}>
                {submitLabel}
            </Button>
        </form>
    );
};

export default Form;
