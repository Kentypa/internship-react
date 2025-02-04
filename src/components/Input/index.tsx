import React from "react";

type InputTypes = "email" | "password" | "password_confirmation" | "checkbox";

type InputProps = {
  type: InputTypes;
  id: string;
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete: "off" | "on";
  name: string;
  checked?: boolean;
};

export const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  autoComplete,
  value,
  onChange,
  name,
  checked,
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
      checked={checked}
    />
  );
};
