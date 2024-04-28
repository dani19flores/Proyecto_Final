const initialState = {
    shoppingCart: []
}

const shoppingCartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CART":
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload],
            };
        case "REMOVE_CART":
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(shoppingCart => shoppingCart.id !== action.payload)
            }
        default: 
            return state;
    }
}

export default shoppingCartReducer;