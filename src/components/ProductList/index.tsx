import {ProductElement, ProductElementProps} from "../ProductElement";
import React from "react";

export type ProductListProps = {
    products: ProductElementProps[];
}

export const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
        <ul>
            {products.map((product) => (
                <ProductElement id={product.id} key={product.id} name={product.name} />
            ))}
        </ul>
    )
}