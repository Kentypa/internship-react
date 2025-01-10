import React, {useState} from "react";
import {UserInformation} from "../../types/user-information.tsx";
import {Button} from "../Button";
import {useNavigate} from "react-router";
import {Label} from "../Label";
import {Input} from "../Input";
import {useMutation} from "react-query";

export type RegistrationProps = {
    availableAccounts: UserInformation[];
    setAvailableAccounts: (availableAccounts: UserInformation[]) => void;
}

const addUser = async (email: string, password: string, availableAccounts: UserInformation[]): Promise<UserInformation> => {
    if (availableAccounts.some((account) => (account.email === email))) {
        await Promise.reject(new Error("User is already have an account in this database."));
    }

    return Promise.resolve({
        id: availableAccounts.length + 1,
        email,
        password,
    });
};

export const Registration: React.FC<RegistrationProps> = ({availableAccounts, setAvailableAccounts}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const mutation = useMutation<UserInformation, Error, {email: string, password: string}>(
        { mutationFn: async ({email, password}) => {
            return await addUser(email, password, availableAccounts);},
    onSuccess: (user) => {
        setAvailableAccounts([...availableAccounts, user]);
        navigate("/task4/authorization/login");
    },})

    const registerUserHandler = () => {
        mutation.mutate({ email, password });
    };

    return (
        <>
            <h1>Registration Form</h1>
            <section>
                <div className="container">
                    {mutation.isError && <p>Oops, we have some error: {mutation.error.message}</p>}
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="on"
                    />
                    <Label htmlFor="psw">Password</Label>
                    <Input
                        type="password"
                        id="psw"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="on"
                    />
                    <Button handleClick={registerUserHandler}>Registration</Button>
                </div>
            </section>
        </>
    )
}