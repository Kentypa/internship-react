import {ComponentWithChildren} from "../../../task3/types/component-with-children.tsx";

type LabelProps = {
    htmlFor: string;
}

export const Label: ComponentWithChildren<LabelProps> = ({ htmlFor, children }) => {
    return <label htmlFor={htmlFor}><b>{children}</b></label>
}