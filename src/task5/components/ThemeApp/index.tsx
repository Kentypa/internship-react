import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";
import "../../styles/styles.css";
import { Button } from "../../../components/Button";

export const ThemeApp: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <Button handleClick={toggleTheme}>Current theme: {theme}</Button>;
};
