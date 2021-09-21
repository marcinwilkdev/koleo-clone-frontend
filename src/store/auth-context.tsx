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
    // ADD TIMEOUT FOR TOKEN

    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [userData, setUserData] = useState<string>("");
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("userData");

        if (token) {
            setIsLoggedIn(true);
            setToken(token);
            setUserData(userData || "User");
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const changeUserData = (userData: string) => {
        setUserData(userData);
        
        localStorage.setItem("userData", userData);
    };

    const login = (token: string, userData: string) => {
        setIsLoggedIn(true);
        setUserData(userData);
        setToken(token);

        localStorage.setItem("token", token);
        localStorage.setItem("userData", userData);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData("");
        setToken("");

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
