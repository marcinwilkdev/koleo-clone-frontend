import { useCallback, useState } from "react";

const DB_URL = "https://koleo-clone.herokuapp.com";

interface ErrorResponseBody {
    errorMessage: string;
}

interface UseHttpHook {
    isLoading: boolean;
    error: string;
    sendRequest: (
        url: string,
        method?: string,
        body?: any,
        token?: string | null
    ) => Promise<any>;
}

const useHttp = (): UseHttpHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const sendRequest = useCallback(
        async (
            url: string,
            method?: string,
            body?: any,
            token?: string | null
        ) => {
            setIsLoading(true);
            setError("");

            let headers: HeadersInit = {};

            if (method !== "GET") {
                headers["Content-Type"] = "application/json";
            }

            if (token) {
                headers["Authorization"] = "Bearer " + token;
            }

            const requestInit: RequestInit = {
                method,
                headers,
            };

            if (method !== "GET") {
                requestInit.body = JSON.stringify(body);
            }

            try {
                const response = await fetch(DB_URL + url, requestInit);

                const data = await response.json();

                if (!response.ok) {
                    const responseData = data as ErrorResponseBody;

                    throw new Error(responseData.errorMessage);
                }

                setIsLoading(false);

                return data;
            } catch (err) {
                let errorMessage = "Something went wrong!";

                if ((err as Error).message) {
                    errorMessage = (err as Error).message; // ?????
                }

                setError(errorMessage);
            }

            setIsLoading(false);
        },
        []
    );

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
