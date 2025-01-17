import counterReducer from './features/counter/counterSlice.ts'
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer;