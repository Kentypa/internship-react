import React, {useState} from "react";
import {UserInformation} from "../../types/user-information.tsx";
import {Button} from "../Button";
import {useNavigate} from "react-router";

export type RegistrationProps = {
    availableAccounts: UserInformation[];
    setAvailableAccounts: (availableAccounts: UserInformation[]) => void;
}

export const Registration: React.FC<RegistrationProps> = ({availableAccounts, setAvailableAccounts}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const addUser = () => {
        if (availableAccounts.find((element) => element.email === email && element.password === password)) {return}
        setAvailableAccounts([...availableAccounts, {id: availableAccounts.length + 1, email: email, password: password}]);
        navigate("/login");
    };

    return (
        <>
            <h1>Registration Form</h1>
            <section>
                <div className="container">
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button handleClick={addUser}>Registration</Button>
                </div>
            </section>
        </>
    )
}