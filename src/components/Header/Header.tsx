import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import authContext from "../../store/auth-context";
import classes from "./styles/Header.module.css";

const Header: React.FC = () => {
    const { isLoggedIn } = useContext(authContext);

    return (
        <header className={classes.header}>
            <h3>
                <Link to="/">KOLEO</Link>
            </h3>
            {!isLoggedIn && (
                <div className={classes.controls}>
                    <NavLink to="/auth/signin" activeClassName={classes.active}>
                        zaloguj się
                    </NavLink>
                    <NavLink to="/auth/signup" activeClassName={classes.active}>
                        zarejestruj się
                    </NavLink>
                </div>
            )}
            {isLoggedIn && <NavLink to="/profile">Name</NavLink>}
        </header>
    );
};

export default Header;
