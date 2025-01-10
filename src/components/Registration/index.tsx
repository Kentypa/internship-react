import React, {useState} from "react";
import {UserInformation} from "../../types/user-information.tsx";
import {Button} from "../Button";
import {useNavigate} from "react-router";
import {Label} from "../Label";
import {Input} from "../Input";

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
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="on"
                    />
                    <Label htmlFor="psw">Password</Label>
                    <Input
                        type="password"
                        id="psw"
                        placeholder="Password"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="on"
                    />
                    <Button handleClick={addUser}>Registration</Button>
                </div>
            </section>
        </>
    )
}