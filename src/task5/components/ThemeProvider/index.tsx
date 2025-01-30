import { ReactNode, useState } from "react";
import ThemeContext from "../../contexts/theme-context";
import { ComponentWithChildren } from "../../../types/component-with-children.tsx";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: ComponentWithChildren<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
