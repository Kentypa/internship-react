import {createContext, Dispatch} from "react";

export type ProductActions = {
    id: number;
    type: "add" | "delete";
    name: string;
}

export const ProductDispatchContexts = createContext<Dispatch<ProductActions>>(()=>{});
