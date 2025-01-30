import React from "react";
import { UserInformation } from "../../../types/user-information.ts";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { useFormInput } from "../../../hooks/use-form-input.ts";
import { Button } from "../../../components/Button";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";

export type RegistrationProps = {
  availableAccounts: UserInformation[];
  setAvailableAccounts: (availableAccounts: UserInformation[]) => void;
};

const addUser = async (
  email: string,
  password: string,
  availableAccounts: UserInformation[],
): Promise<UserInformation> => {
  return new Promise((resolve, reject) => {
    if (availableAccounts.some((account) => account.email === email)) {
      reject(new Error("User is already have an account in this database."));
    }

    resolve({
      id: availableAccounts.length + 1,
      email,
      password,
    });
  });
};

export const Registration: React.FC<RegistrationProps> = ({
  availableAccounts,
  setAvailableAccounts,
}) => {
  const { values, handleChange } = useFormInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const mutation = useMutation<
    UserInformation,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => {
      return addUser(email, password, availableAccounts);
    },
    onSuccess: (user) => {
      setAvailableAccounts([...availableAccounts, user]);
      navigate("/task4/authorization/login");
    },
  });

  const registerUserHandler = () => {
    mutation.mutate({ email: values.email, password: values.password });
  };

  return (
    <>
      <h1>Registration Form</h1>
      <section>
        <div className="container">
          {mutation.isError && (
            <p>Oops, we have some error: {mutation.error.message}</p>
          )}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            autoComplete="on"
            name="email"
          />
          <Label htmlFor="psw">Password</Label>
          <Input
            type="password"
            id="psw"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            autoComplete="on"
            name={"password"}
          />
          <Button handleClick={registerUserHandler}>Registration</Button>
        </div>
      </section>
    </>
  );
};
