import React from 'react';

import {Section_container,
    Container_List,
    Title_product, 
    Imagen_product, 
    Prices_container, 
    Price_product, 
    Add_product} from "./style";

const ProductsList = ({ shows }) => {

    const handle_addProduct = () =>{

    }

    return (
        <Section_container>
            {shows.map(show => (
                <Container_List key={show.id}> 
                    <Imagen_product src={show.images[0].replace('[', '').replace(']', '')}></Imagen_product>
                    <Title_product>{show.title}</Title_product>
                    <Prices_container>
                        <Price_product>${(show.price * 17).toLocaleString()}</Price_product>
                        <Add_product onClick={handle_addProduct}>Add To Cart</Add_product>
                    </Prices_container>
                </Container_List>
            ))}
        </Section_container>
    );
};

export default ProductsList;
