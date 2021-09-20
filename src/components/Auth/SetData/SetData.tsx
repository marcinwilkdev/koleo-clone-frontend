import React, { Fragment } from "react";
import Title from "../../UI/Title/Title";
import SetDataForm from "./SetDataForm";
import classes from "./styles/SetData.module.css";

interface Props {
    discount: boolean;
}

const SetData: React.FC<Props> = ({ discount }) => {
    return (
        <Fragment>
            <div>
                <h3>
                    <Title title="Do czego potrzebne są nam Twoje dane?" />
                </h3>
                <p>
                    Nie obawiaj się - wszystkie dane, które podajesz są
                    bezpieczne i służą nam tylko do wystawienia biletu.
                </p>
                <p>
                    Wszyscy przewoźnicy wymagają umieszczenia na nim imienia i
                    nazwiska, niektórzy dodatkowo oczekują podania numeru
                    dokumentu tożsamości.Aby ułatwić Ci proces kupna, prosimy o
                    dane już teraz.
                </p>
                <p>
                    Dodatkowo, prosimy o podanie daty urodzenia - Twój wiek
                    ułatwi nam odalezienie najtańszego biletu na każdy przejazd.
                </p>
            </div>
            <div>
                <h3>
                    <Title title="Podaj proszę swoje dane" />
                </h3>
                <SetDataForm discount={discount} />
            </div>
        </Fragment>
    );
};

export default SetData;
