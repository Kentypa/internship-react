import {createContext, Dispatch} from "react";
import {ProductElementProps} from "../ProductElement";
import {Actions} from "../ProductsApp";

export const ProductContexts = createContext<ProductElementProps[]>([]);
export const ProductDispatchContexts = createContext<Dispatch<Actions>>(()=>{});
