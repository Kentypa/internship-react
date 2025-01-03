import {UserInformation} from "../../types/user-information.tsx";
import React from "react";

type MainCabinetProps = {
    user?: UserInformation;
}

export const MainCabinet: React.FC<MainCabinetProps> = ({user}) => {
    if (!user) {
        return <h2>User not found</h2>;
    }

    return (
        <div>
            <h1>Main Cabinet</h1>
            <ul>
                <li key={1}>user id: {user.id}</li>
                <li key={1}>user email: {user.email}</li>
                <li key={1}>user password: {user.password}</li>
            </ul>
        </div>
    )
}