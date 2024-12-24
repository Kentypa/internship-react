import {createContext} from "react";
import {ProductElementProps} from "../components/ProductElement";

export const ProductContexts = createContext<ProductElementProps[]>([]);