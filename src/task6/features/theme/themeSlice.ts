import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../types/themeState.ts";

const initialState: ThemeState = { currentTheme: "dark" };

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.currentTheme === "dark") {
        state.currentTheme = "light";
      } else {
        state.currentTheme = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
