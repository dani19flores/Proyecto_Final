import React, { useState } from 'react';
import getAllProducts from "../Hooks/getAllProducts";
import {SearchContainer, SearchInput} from "./style";
import ProductsList from './ProductsList';

const Products = () => {
    const { loading, error, response} = getAllProducts(
        "https://api.escuelajs.co/api/v1/products"
    );

    return (
        <article>
            <h1>Products</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <ProductsList shows={response} />
            )}
        </article>
    );
};

export default Products;
