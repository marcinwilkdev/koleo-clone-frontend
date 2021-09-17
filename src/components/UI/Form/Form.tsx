import React from "react";
import Button from "../Button/Button";
import Input, { InputInterface } from "../Input/Input";

interface Props {
    inputs: InputInterface[];
    submitLabel: string;
}

const Form: React.FC<Props> = ({ inputs, submitLabel }) => {
    const isFormValid = inputs.reduce(
        (prev, curr) => prev && curr.hook.isValid,
        true
    );

    const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        if (!isFormValid) return;

        inputs.forEach((input) => input.hook.reset());
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
