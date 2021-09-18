import { createContext, useEffect, useState } from "react";

interface AuthContextInterface {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const authContext = createContext<AuthContextInterface>({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token: string) => {
        setIsLoggedIn(true);
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    };

    return (
        <authContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default authContext;
