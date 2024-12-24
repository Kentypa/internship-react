import React, {useState} from 'react';
import {Button} from "../Button";
import {CounterTitle} from "../CounterTitle";

export const Counter: React.FC = () => {
    const [counterValue, setCounterValue] = useState(0);

    function handleCounterIncrement() {
        setCounterValue(counterValue + 1);
    }

    function handleCounterDecrement() {
        setCounterValue(counterValue - 1);
    }

    return (
        <div>
            <CounterTitle>
                {"Current counter value: " + counterValue}
            </CounterTitle>
            <Button handleClick={handleCounterIncrement}>
                Add
            </Button>
            <Button handleClick={handleCounterDecrement}>
                Subtract
            </Button>
        </div>
    )
}