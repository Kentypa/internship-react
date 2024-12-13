import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    handleClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    )
}