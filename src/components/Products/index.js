import React, { useEffect } from "react";
import {SearchContainer, SearchInput, ContainerProducts} from "./style";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from './ProductsList';
import { fetchProducts } from "../../state/products.slice";
import ShoppingCart from './ShoppingCart';
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../state/status";
import Menu from "../Menu";

const Products = ({visible,menu_visible}) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const status = useSelector(state => state.products.status);
    useEffect(() => {
        status === IDLE && dispatch(fetchProducts());
    }, [dispatch, status])

    return (
        <ContainerProducts>
            {
                menu_visible && <Menu />
            }
            {
                (products && status === SUCCEEDED ) && <ProductsList shows={products} />
            }
            {
                visible && <ShoppingCart />
            }
            {
                status === LOADING && <p>Cargando productos ....</p>
            }

            {
                status === FAILED && <p>Ha habido un problema</p>
            }
        </ContainerProducts>
    );
};

export default Products;
