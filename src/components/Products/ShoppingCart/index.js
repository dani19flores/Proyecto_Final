import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../../state/products.slice";
import { ListProductContainer } from "./style";
import ShoppingCartList from "./ShoppingCartList";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector(state => state.products.shoppingCart);

    const handleCartRemove = (id) => {
        dispatch(removeProduct(id));
    }

    return (
        <ListProductContainer>
            {
                shoppingCart && shoppingCart.map(item => (
                    
                    <ShoppingCartList
                        key={item.id}
                        product={item}
                        onRemove={() => handleCartRemove(item.id)}
                    />
                ))
            }
        </ListProductContainer>
    )
}

export default ShoppingCart;
