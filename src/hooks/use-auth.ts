interface UseAuthHook {
    login: (token: string) => void;
    logout: () => void;
}

const useAuth = (): UseAuthHook => {
    const login = (token: string) => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", token);
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
    };

    return {
        login,
        logout,
    };
};

export default useAuth;
