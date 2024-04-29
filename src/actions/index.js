export const addCart = (product) =>{
    return {
        type: "ADD_CART",
        payload: {
            id: Date.now(),
            product,
            completed: false,
        }
    }
}

export const removeCart = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id,
    }
}
