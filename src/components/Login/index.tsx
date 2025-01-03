import React, {useState} from "react";
import {UserInformation} from "../../types/user-information.tsx";
import {Button} from "../Button";
import {useNavigate} from "react-router";

export type LoginProps = {
    availableAccounts: UserInformation[];
    setIsAuthorized: (isAuthorized: boolean) => void;
    setCurrentUserID: (id: number) => void;
}

type validationStatusType = {
    currentStatus: "Incorrect validation status" | "Correct validation status" | "Without status";
}

export const Login: React.FC<LoginProps> = ({availableAccounts, setIsAuthorized, setCurrentUserID}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationStatus, setValidationStatus] = useState<validationStatusType>({currentStatus: "Without status"});

    const loginUser = () => {
        const user = availableAccounts.find((element) => element.email === email && element.password === password);

        if (user) {
            setIsAuthorized(true);
            setValidationStatus({currentStatus: "Correct validation status"})
            setCurrentUserID(user.id)
            navigate("/");
        } else {
            setValidationStatus({currentStatus: "Incorrect validation status"});
        }
    };

    return (
        <>
            <h1>Login Form</h1>
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
                    {validationStatus.currentStatus === "Incorrect validation status" && <p>Incorrect input, you need to check your password or email</p>}
                    <Button handleClick={loginUser}>Login into account</Button>
                    <Button handleClick={() => {
                        navigate("/registration");
                    }}>Dont have account? create here!</Button>
                </div>
            </section>
        </>
    )
}