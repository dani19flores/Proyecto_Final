import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../../actions";
import { ListProductContainer } from "./style";
import ShoppingCartList from "./ShoppingCartList";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector(state => state.shoppingCart.shoppingCart);

    const handleCartRemove = (id) => {
        dispatch(removeCart(id));
    }

    return (
        <ListProductContainer>
            {
                shoppingCart.map(item => (
                    <ShoppingCartList
                        key={item.id}
                        product={item.product}
                        onRemove={() => handleCartRemove(item.id)}
                    />
                ))
            }
        </ListProductContainer>
    )
}

export default ShoppingCart;
