import { DataContainer, Imagen_product, Price_product, RemoveButton, Title_product } from "./style"


const ShoppingCartList = ({product,onRemove}) =>{

    console.log({product})

    return(
        <section>
            <Imagen_product src={product.images[0].replace('[', '').replace(']', '')}></Imagen_product>
            <DataContainer>
                <Title_product>{product.title}</Title_product>
                <Price_product>${(product.price * 17).toLocaleString()}</Price_product>
                <RemoveButton onClick={onRemove}>Remove</RemoveButton>
            </DataContainer>
        </section>
    )
}

export default ShoppingCartList;