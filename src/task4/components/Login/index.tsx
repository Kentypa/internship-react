import React, {useState} from "react";
import {UserInformation} from "../../types/user-information.tsx";
import {Button} from "../Button";
import {useNavigate} from "react-router";
import {Input} from "../Input";
import {Label} from "../Label";
import {useMutation} from "react-query";
import {validationStatusType} from "../../types/validation-status.ts";

type LoginProps = {
    availableAccounts: UserInformation[];
    setIsAuthorized: (isAuthorized: boolean) => void;
    setCurrentUserID: (id: number) => void;
}

const loginUser = async (
    email: string,
    password: string,
    availableAccounts: UserInformation[]
): Promise<UserInformation> => {
    const user = availableAccounts.find(
        (element) => element.email === email && element.password === password
    );

    if (user) {
        return Promise.resolve(user);
    } else {
        return Promise.reject(new Error("Incorrect email or password"));
    }
};

export const Login: React.FC<LoginProps> = ({availableAccounts, setIsAuthorized, setCurrentUserID}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationStatus, setValidationStatus] = useState<validationStatusType>({currentStatus: "Without status"});

    const mutation = useMutation<UserInformation, Error, { email: string; password: string }>({
        mutationFn: async ({ email, password }) => loginUser(email, password, availableAccounts),
        onSuccess: (user) => {
            setIsAuthorized(true);
            setValidationStatus({ currentStatus: "Correct validation status" });
            setCurrentUserID(user.id);
            navigate("/task4/authorization/");
        },
        onError: () => {
            setValidationStatus({ currentStatus: "Incorrect validation status" });
        },
    });


    const loginUserHandler = () => {
        mutation.mutate( {email, password} );
    };

    return (
        <>
            <h1>Login Form</h1>
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
                    {validationStatus.currentStatus === "Incorrect validation status" &&
                        <p>Incorrect input, you need to check your password or email</p>}
                    <Button handleClick={loginUserHandler}>Login into account</Button>
                    <Button handleClick={() => {
                        navigate("/task4/authorization/registration");
                    }}>Dont have account? create here!</Button>
                </div>
            </section>
        </>
    )
}