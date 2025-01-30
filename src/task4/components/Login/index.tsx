import React from "react";
import { UserInformation } from "../../../types/user-information.ts";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { Button } from "../../../components/Button";
import { useFormInput } from "../../../hooks/use-form-input.ts";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";

type LoginProps = {
  availableAccounts: UserInformation[];
  setIsAuthorized: (isAuthorized: boolean) => void;
  setCurrentUserID: (id: number) => void;
};

const loginUser = async (
  email: string,
  password: string,
  availableAccounts: UserInformation[],
): Promise<UserInformation> => {
  return new Promise((resolve, reject) => {
    const user = availableAccounts.find(
      (element) => element.email === email && element.password === password,
    );

    if (user) {
      resolve(user);
    } else {
      reject(new Error("Incorrect email or password"));
    }
  });
};

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

  const mutation = useMutation<
    UserInformation,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) =>
      loginUser(email, password, availableAccounts),
    onSuccess: (user) => {
      setIsAuthorized(true);
      setCurrentUserID(user.id);
      navigate("/task4/authorization/");
    },
  });

  const loginUserHandler = () => {
    mutation.mutate({ email: values.email, password: values.password });
  };

  return (
    <>
      <h1>Login Form</h1>
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
            name="password"
          />
          <Button handleClick={loginUserHandler}>Login into account</Button>
          <Button
            handleClick={() => {
              navigate("/task4/authorization/registration");
            }}
          >
            Dont have account? create here!
          </Button>
        </div>
      </section>
    </>
  );
};
