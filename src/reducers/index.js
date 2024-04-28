import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCart";

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
})

export default rootReducer;