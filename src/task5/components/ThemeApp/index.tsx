import React from "react";
import ThemeContext from "../../contexts/theme-context";
import "../../styles/styles.css"
import {Button} from "../Button";

export const ThemeApp: React.FC = () => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <Button handleClick={toggleTheme}>Current theme: {theme}</Button>
            )}
        </ThemeContext.Consumer>
    );
};
