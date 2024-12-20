import React, {useContext} from "react";
import {Button} from "../Button";
import {ProductDispatchContexts} from "../ProductContexts";

export type ProductElementProps = {
    id: number;
    name: string;
}

export const ProductElement: React.FC<ProductElementProps> = ({id ,name}) => {
    const dispatch = useContext(ProductDispatchContexts);

    return (
        <section>
            <li>{name}</li>
            <Button handleClick={()=>{dispatch({
                name,
                type: "delete",
                id,
            })}}>
                Delete from list
            </Button>
        </section>
    )
}