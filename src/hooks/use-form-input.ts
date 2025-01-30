import React, { useState } from "react";

export function useFormInput(initialState: Record<string, string> = {}) {
  const [values, setValues] = useState(initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return {
    values,
    handleChange,
  };
}
