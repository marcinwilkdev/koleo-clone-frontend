import { createContext, useEffect, useState } from "react";

interface AuthContextInterface {
    userData: string;
    token: string;
    isLoggedIn: boolean | null;
    changeUserData: (userData: string) => void;
    login: (token: string, userData: string) => void;
    logout: () => void;
}

const authContext = createContext<AuthContextInterface>({
    userData: "",
    token: "",
    isLoggedIn: false,
    changeUserData: () => {},
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [userData, setUserData] = useState<string>("");
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("userData");
        const expiresIn = localStorage.getItem("expiresIn");

        if (!token || !expiresIn || new Date(expiresIn) < new Date()) {
            logout();
            return;
        }

        setIsLoggedIn(true);
        setToken(token);
        setUserData(userData || "User");

        const leftTime = new Date(expiresIn).getTime() - new Date().getTime();

        console.log(leftTime);

        const logoutTimeout = setTimeout(() => logout(), leftTime);

        return () => clearTimeout(logoutTimeout);
    }, []);

    const changeUserData = (userData: string) => {
        setUserData(userData);

        localStorage.setItem("userData", userData);
    };

    const login = (token: string, userData: string) => {
        setIsLoggedIn(true);
        setUserData(userData);
        setToken(token);

        const expiresIn = new Date();
        expiresIn.setHours(expiresIn.getHours() + 1);

        localStorage.setItem("expiresIn", expiresIn.toISOString());
        localStorage.setItem("token", token);
        localStorage.setItem("userData", userData);

        setTimeout(() => logout(), 3600000);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData("");
        setToken("");

        localStorage.removeItem("expiresIn");
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
    };

    return (
        <authContext.Provider
            value={{
                userData,
                token,
                isLoggedIn,
                changeUserData,
                login,
                logout,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default authContext;
