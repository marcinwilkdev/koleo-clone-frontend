import React from "react";

import classes from "./styles/SplitLayout.module.css";

interface Props {
    className?: string;
}

const SplitLayout: React.FC<Props> = ({ className, children }) => {
    let compiledClassName = classes.split;

    if (className) {
        compiledClassName += " " + className;
    }

    return <div className={compiledClassName}>{children}</div>;
};

export default SplitLayout;
