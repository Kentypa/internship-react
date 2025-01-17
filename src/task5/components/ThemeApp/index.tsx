import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";
import "../../styles/styles.css"

export const ThemeApp: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>
                Toggle to {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
        </div>
    );
};
