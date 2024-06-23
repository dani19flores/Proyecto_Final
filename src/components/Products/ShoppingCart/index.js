import { useDispatch, useSelector } from "react-redux";
import { removeProduct,updateTotalPayment } from "../../../state/products.slice";
import { ListProductContainer, CheckoutButton, TotalPrice } from "./style";
import ShoppingCartList from "./ShoppingCartList";
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const shoppingCart = useSelector(state => state.products.shoppingCart);

    const handleCartRemove = (id) => {
        dispatch(removeProduct(id));
    }

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const totalPrice = shoppingCart.reduce((total, product) => total + product.price * 17, 0);
    const formattedTotalPayment = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalPrice);
    dispatch(updateTotalPayment(formattedTotalPayment)); 

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
            {
                totalPrice > 0 && (
                    <>
                        <TotalPrice>Total a pagar: {formattedTotalPayment}</TotalPrice>
                        <CheckoutButton onClick={handleCheckout}>Finalizar compra</CheckoutButton>
                    </>
                )
            }
        </ListProductContainer>

    )
}

export default ShoppingCart;
