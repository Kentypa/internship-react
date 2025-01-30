import counterReducer from "./features/counter/counterSlice.ts";
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../task6/features/theme/themeSlice.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
