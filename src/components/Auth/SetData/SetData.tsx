import React, { Fragment } from "react";
import classes from "./styles/SetData.module.css";

const SetData: React.FC = () => {
    return (
        <Fragment>
            <div>
                <h3>
                    <b>Do</b> czego potrzebne są nam Twoje dane?
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
                    <b>Podaj</b> proszę swoje dane
                </h3>
                <div>
                    Data Form
                </div>
            </div>
        </Fragment>
    );
};

export default SetData;
