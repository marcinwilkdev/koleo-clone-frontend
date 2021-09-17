import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const WelcomeForm: React.FC = () => {
    return (
        <form>
            <Input placeholder="Z"/>
            <Input placeholder="DO"/>
            <Input type="date" placeholder="Z"/>
            <Button type="submit"><b>ZNAJDZ</b> POLACZENIE</Button>
        </form>
    );
};

export default WelcomeForm;
