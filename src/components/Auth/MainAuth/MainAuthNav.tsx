import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./styles/AuthNav.module.css";

interface Props {
    path: string;
    label: string;
    chosen: boolean;
}

const NavItem: React.FC<Props> = ({ path, label, chosen }) => {
    let compiledClassName = classes.wrapper;

    if(!chosen) {
        compiledClassName += " " + classes.helper;
    }

    const linkClassName = chosen ? classes.chosen : classes.other;

    return (
        <div className={compiledClassName}>
            <Link to={path} className={linkClassName}>
                {label}
            </Link>
        </div>
    );
};

const MainAuthNav: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className={classes.nav}>
            <NavItem label="Zarejestruj się" path="/auth/signup" chosen={pathname === "/auth/signup"} />
            <NavItem label="Zaloguj się" path="/auth/signin" chosen={pathname === "/auth/signin"} />
        </div>
    );
};

export default MainAuthNav;
