import React from "react";
import { ThemeState } from "../types/theme-type.ts";

const ThemeContext = React.createContext<ThemeState>({
    theme: "dark",
    toggleTheme: () => {}
});

export default ThemeContext;