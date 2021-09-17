import React from "react";

interface Props {
    signup?: boolean;
}

const Auth: React.FC<Props> = ({ signup }) => {
    return <div>{signup ? "Signup" : "Signin"}</div>;
};

export default Auth;
