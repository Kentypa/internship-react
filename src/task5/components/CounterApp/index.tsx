import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {decrement, increment} from "../../features/counter/counterSlice.ts";
import {Button} from "../Button";

export const CounterApp: React.FC = () => {
    const count = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <div>
            <b>Counter value: {count.value}</b>
            <Button handleClick={()=>{dispatch(increment())}}>Increment counter value</Button>
            <Button handleClick={()=>{dispatch(decrement())}}>Decrement counter value</Button>
        </div>
    )
}