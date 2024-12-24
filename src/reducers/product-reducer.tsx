import {ProductElementProps} from "../components/ProductElement";
import {ProductActions} from "../contexts/product-dispatch-contexts.tsx";

export function ProductReducer(products: ProductElementProps[], action: ProductActions) {
    switch (action.type) {
        case "add": {
            return [...products, {id: action.id, name: action.name}];
        }
        case "delete": {
            return products.filter((product) => product.id !== action.id);
        }
        default:
            return products;
    }
}