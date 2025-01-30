import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme-context.tsx";
import { CounterApp } from "../CounterApp";
import { ThemeApp } from "../ThemeApp";
import "../../styles/styles.css";

export const CombinedApp: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`task5-styles ${theme}`}>
      <CounterApp />
      <ThemeApp />
    </div>
  );
};
