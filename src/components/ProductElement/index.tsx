import React, {useContext} from "react";
import {Button} from "../Button";
import {ProductDispatchContexts} from "../../contexts/product-dispatch-contexts.tsx";

export type ProductElementProps = {
    id: number;
    name: string;
}

export const ProductElement: React.FC<ProductElementProps> = ({id ,name}) => {
    const productDispatch = useContext(ProductDispatchContexts);

    return (
        <section>
            <li>{name}</li>
            <Button handleClick={()=>{productDispatch({
                name,
                type: "delete",
                id,
            })}}>
                Delete from list
            </Button>
        </section>
    )
}