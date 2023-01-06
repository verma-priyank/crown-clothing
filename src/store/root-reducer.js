import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
export const rootReducers = combineReducers({

user :userReducer,
categoriesmap  : categoriesReducer  ,
cart : cartReducer
})
