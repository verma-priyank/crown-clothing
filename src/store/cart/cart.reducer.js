import { CART_ACTION_TYPE } from "./cart.types";
  const INITIAL_STATE = {
    // cartCount:0,
    // totalPrice:0,
    cartitems:[],
    isCartOpen:false
  }
  
  export const cartReducer=(state=INITIAL_STATE ,action) =>{
    const {type , payload} =action;
    switch(type){
      case  CART_ACTION_TYPE.SET_CART_ITEMS:
        return {
          ...state,
          cartitems:payload
        }
      case  CART_ACTION_TYPE.SET_IS_CART_OPENS:
        
        return {
          ...state,
          isCartOpen:payload
        }
        default:
          return state ; 
    }
  }