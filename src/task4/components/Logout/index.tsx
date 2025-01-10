import React from "react";
import {Button} from "../Button";

type LogoutProps = {
    setIsAuthorized: (isAuthorized: boolean) => void;
}

export const Logout: React.FC<LogoutProps> = ({setIsAuthorized}) => {
    return (
        <>
            <Button handleClick={()=>{setIsAuthorized(false)}}>Logout</Button>
        </>
    )
}