import React from "react";
import ThemeProvider from "../ThemeProvider";
import {CombinedApp} from "../CombinedApp";

export const Task5: React.FC = () => {
    return (
        <ThemeProvider>
            <CombinedApp />
        </ThemeProvider>
    )
}