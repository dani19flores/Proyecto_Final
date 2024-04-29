import React, { useState } from 'react';
import getAllProducts from "../Hooks/getAllProducts";
import {SearchContainer, SearchInput, ContainerProducts} from "./style";
import ProductsList from './ProductsList';
import ShoppingCart from './ShoppingCart';

const Products = ({visible}) => {
    const { loading, error, response} = getAllProducts(
        "https://api.escuelajs.co/api/v1/products"
    );

    return (
        <ContainerProducts>
            <h1>Products</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <ProductsList shows={response} />
            )}
        {visible && <ShoppingCart />}
        </ContainerProducts>
    );
};

export default Products;
