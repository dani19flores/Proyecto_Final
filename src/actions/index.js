export const addTask = (task) =>{
    return {
        type: "ADD_CART",
        payload: {
            id: Date.now(),
            task,
            completed: false,
        }
    }
}

export const removeTask = (id) => {
    return {
        type: "REMOVE_ID",
        payload: id,
    }
}
