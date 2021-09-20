import React, { Fragment } from "react";

interface Props {
    title: string;
}

const Title: React.FC<Props> = ({ title }) => {
    const splitTitle = title.split(" ");

    const firstWord = splitTitle[0];

    splitTitle[0] = "";

    const connectedTitle = splitTitle.join(" ");

    return (
        <Fragment>
            <b>{firstWord}</b>
            {connectedTitle}
        </Fragment>
    );
};

export default Title;
