import {ComponentWithChildren} from "../../types/component-with-children.tsx";

export const CounterTitle: ComponentWithChildren<object> = ({children}) => {
    return (
        <p>
            {children}
        </p>
    )
}