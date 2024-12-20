import React from "react";

type CounterTitleProps = {
    text: string;
    value: number;
}

export const CounterTitle: React.FC<CounterTitleProps> = ({text, value}) => {
    return (
        <p>
            {text + value}
        </p>
    )
}