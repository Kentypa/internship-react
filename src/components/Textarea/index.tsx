import React from "react";

type TextareaProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({value, handleChange}) => {
    return (
        <textarea value={value} onChange={handleChange}/>
    )
}