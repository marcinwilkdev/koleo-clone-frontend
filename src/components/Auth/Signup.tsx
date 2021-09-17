import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthNav from './AuthNav';

import classes from "./styles/Signup.module.css";

const Signup: React.FC = () => {
    return (
        <div className={classes.signup}>
            <AuthNav />
            <form>
                <Input type="email" placeholder="Adres e-mail"/>
                <Input type="password" placeholder="Hasło (co najmniej 8 znaków)"/>
                <Input type="password" placeholder="Potwierdzenie hasła (co najmniej 8 znaków)"/>
                <Button type="submit">Zarejestruj się</Button>
            </form>
            <p>Masz juz konto? <Link className={classes.bottomLink} to="/signin">Zaloguj się</Link></p>
        </div>
    );
}

export default Signup;