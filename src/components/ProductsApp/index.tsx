import {ProductList} from "../ProductList";
import React, {useState} from "react";
import {ProductElementProps} from "../ProductElement";
import {Button} from "../Button";
import {Textarea} from "../Textarea";
import {useReducer} from "react";
import {ProductContexts, ProductDispatchContexts} from "../ProductContexts";

export type Actions = {
    id: number;
    type: string;
    name: string;
}

function ProductReducer(products: ProductElementProps[], action: Actions) {
    switch (action.type) {
        case "added": {
            return [...products, {id: action.id, name: action.name}];
        }
        case "delete": {
            return products.filter((product) => product.id !== action.id);
        }
        default:
            return products;
    }
}

export const ProductsApp: React.FC = () => {
    const [products, dispatch] = useReducer(ProductReducer, []);
    const [productName, setProductName] = useState<string>("");
    const [productID, setProductID] = useState<number>(0);

    function handleAddProducts(name: string) {
        setProductID(productID + 1);
        dispatch({
            type: "added",
            id: productID,
            name:  name
        })
    }

    function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setProductName(event.target.value)
    }

    return (
        <ProductContexts.Provider value={products}>
            <ProductDispatchContexts.Provider value={dispatch}>
                <Textarea value={productName} handleChange={handleTextareaChange} />
                <Button handleClick={() => {handleAddProducts(productName)}}>
                    Add new product to list
                </Button>
                <ProductList products={products} />
            </ProductDispatchContexts.Provider>
        </ProductContexts.Provider>
    )
}