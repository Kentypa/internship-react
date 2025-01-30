import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../../components/Input";
import { Label } from "../../../components/Label";
import { useFormInput } from "../../../hooks/use-form-input.ts";
import { Button } from "../../../components/Button";
import { UserInformation } from "../../../types/user-information.ts";

export type LoginProps = {
  availableAccounts: UserInformation[];
  setIsAuthorized: (isAuthorized: boolean) => void;
  setCurrentUserID: (id: number) => void;
};

type validationStatusType =
  | "Incorrect validation status"
  | "Correct validation status"
  | "Without status";

export const Login: React.FC<LoginProps> = ({
  availableAccounts,
  setIsAuthorized,
  setCurrentUserID,
}) => {
  const navigate = useNavigate();
  const { values, handleChange } = useFormInput({
    email: "",
    password: "",
  });
  const [validationStatus, setValidationStatus] =
    useState<validationStatusType>("Without status");

  const loginUser = () => {
    const user = availableAccounts.find(
      (element) =>
        element.email === values.email && element.password === values.password,
    );

    if (user) {
      setIsAuthorized(true);
      setValidationStatus("Correct validation status");
      setCurrentUserID(user.id);
      navigate("/task3/main-page");
    } else {
      setValidationStatus("Incorrect validation status");
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      <section>
        <div className="container">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="on"
            name="email"
          />
          <Label htmlFor="psw">Password</Label>
          <Input
            onChange={handleChange}
            value={values.password}
            type="password"
            id="psw"
            placeholder="Password"
            autoComplete="on"
            name="password"
          />
          {validationStatus === "Incorrect validation status" && (
            <p>Incorrect input, you need to check your password or email</p>
          )}
          <Button handleClick={loginUser}>Login into account</Button>
          <Button
            handleClick={() => {
              navigate("/task3/registration");
            }}
          >
            Dont have account? create here!
          </Button>
        </div>
      </section>
    </>
  );
};
