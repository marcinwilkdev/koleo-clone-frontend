import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import authContext from "../../store/auth-context";
import classes from "./styles/ProfileNav.module.css";

const ProfileNav: React.FC = () => {
    const { logout } = useContext(authContext);
    const history = useHistory();

    const handleLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
        logout();

        history.replace("/");
    };

    return (
        <nav className={classes.profileNav}>
            <NavLink activeClassName={classes.active} to="/profile/my-orders">
                BILETY
            </NavLink>
            <NavLink activeClassName={classes.active} to="/profile/passengers">
                PASAŻEROWIE
            </NavLink>
            <NavLink activeClassName={classes.active} to="/profile/my-data">
                MOJE DANE
            </NavLink>
            <NavLink activeClassName={classes.active} to="/profile/finances">
                FINANSE
            </NavLink>
            <NavLink activeClassName={classes.active} to="/profile/settings">
                USTAWIENIA
            </NavLink>
            <button onClick={handleLogout}>WYLOGUJ SIĘ</button>
        </nav>
    );
};

export default ProfileNav;
