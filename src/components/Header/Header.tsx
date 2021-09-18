import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <h3><Link to="/">KOLEO</Link></h3>
            <div className={classes.controls}>
                <NavLink to="/auth/signin" activeClassName={classes.active}>zaloguj się</NavLink>
                <NavLink to="/auth/signup" activeClassName={classes.active}>zarejestruj się</NavLink>
            </div>
        </header>
    );
}

export default Header;