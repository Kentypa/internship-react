import React from "react";
import { useNavigate } from "react-router";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";
import { useFormInput } from "../../../hooks/use-form-input.ts";
import { Button } from "../../../components/Button";
import { UserInformation } from "../../../types/user-information.ts";

export type RegistrationProps = {
  availableAccounts: UserInformation[];
  setAvailableAccounts: (availableAccounts: UserInformation[]) => void;
};

export const Registration: React.FC<RegistrationProps> = ({
  availableAccounts,
  setAvailableAccounts,
}) => {
  const navigate = useNavigate();
  const { values, handleChange } = useFormInput({
    email: "",
    password: "",
  });

  const addUser = () => {
    if (
      availableAccounts.find(
        (element) =>
          element.email === values.email &&
          element.password === values.password,
      )
    ) {
      return;
    }
    setAvailableAccounts([
      ...availableAccounts,
      {
        id: availableAccounts.length + 1,
        email: values.email,
        password: values.password,
      },
    ]);
    navigate("/task3/login");
  };

  return (
    <>
      <h1>Registration Form</h1>
      <section>
        <div className="container">
          <Label htmlFor="email">Email</Label>
          <Input
            value={values.email}
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="on"
            name="email"
          />
          <Label htmlFor="psw">Password</Label>
          <Input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="psw"
            placeholder="Password"
            autoComplete="on"
            name="password"
          />
          <Button handleClick={addUser}>Registration</Button>
        </div>
      </section>
    </>
  );
};
