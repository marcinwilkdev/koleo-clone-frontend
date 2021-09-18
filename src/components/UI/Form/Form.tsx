import React from "react";
import useHttp from "../../../hooks/use-http";
import Button from "../Button/Button";
import Input, { InputInterface } from "../Input/Input";

interface Props {
    inputs: InputInterface[];
    submitLabel: string;
    submitUrl: string;
    submitMethod: string;
    afterSubmitCallback?: (data: any) => void;
}

const Form: React.FC<Props> = ({
    inputs,
    submitLabel,
    submitUrl,
    submitMethod,
    afterSubmitCallback
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

        if(afterSubmitCallback) afterSubmitCallback(data);
    };

    return (
        <form onSubmit={submitHandler}>
            {inputs.map((input) => (
                <Input
                    key={input.name}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    hook={input.hook}
                />
            ))}
            <Button type="submit" disabled={!isFormValid}>
                {submitLabel}
            </Button>
        </form>
    );
};

export default Form;
