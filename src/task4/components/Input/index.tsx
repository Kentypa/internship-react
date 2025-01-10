import React from "react";

type InputProps = {
    type: "text" | "password" | "email" | "password_confirmation";
    id: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete: "off" | "on";
}

export const Input: React.FC<InputProps> = ({type, id, placeholder, autoComplete, value, onChange}) => {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
        />
    )
}