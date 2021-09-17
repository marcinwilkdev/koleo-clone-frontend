import React from "react";
import Input from "../UI/Input/Input";

const WelcomeForm: React.FC = () => {
    return (
        <form>
            <Input placeholder="Z"/>
            <Input placeholder="DO"/>
            <Input type="date" placeholder="Z"/>
            <button type="submit">ZNAJDŹ POŁAC</button>
        </form>
    );
};

export default WelcomeForm;
