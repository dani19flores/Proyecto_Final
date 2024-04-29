export const addTask = (product) =>{
    return {
        type: "ADD_CART",
        payload: {
            id: Date.now(),
            product,
            completed: false,
        }
    }
}

export const removeTask = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id,
    }
}
