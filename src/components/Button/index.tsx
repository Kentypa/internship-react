import {ComponentWithChildren} from "../../types/component-with-children.tsx";

type ButtonProps = {
    handleClick: () => void;
}

export const Button: ComponentWithChildren<ButtonProps> = ({handleClick, children}) => {
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}