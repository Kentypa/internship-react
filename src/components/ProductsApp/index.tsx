import React, {useState} from "react";
import {Button} from "../Button";
import {Textarea} from "../Textarea";
import {useReducer} from "react";
import {ProductContexts} from "../../contexts/product-context.tsx";
import {ProductDispatchContexts} from "../../contexts/product-dispatch-contexts.tsx";
import {ProductList} from "../ProductList";
import {ProductReducer} from "../../reducers/product-reducer.tsx";


export const ProductsApp: React.FC = () => {
    const [products, dispatch] = useReducer(ProductReducer, []);
    const [productName, setProductName] = useState<string>("");
    const [productID, setProductID] = useState<number>(0);

    function handleAddProducts(name: string) {
        setProductID(productID + 1);
        dispatch({
            type: "add",
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