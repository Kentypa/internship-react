import React from "react";

type InputTypes = "email" | "password" | "password_confirmation";

type InputProps = {
  type: InputTypes;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete: "off" | "on";
  name: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  autoComplete,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      name={name}
      required
    />
  );
};
