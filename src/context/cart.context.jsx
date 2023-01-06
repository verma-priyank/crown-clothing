import { useReducer } from "react";
import { createContext, useState, useEffect } from "react";

const addCartitem = (cartitems, productToAdd) => {
  const existingCartItems = cartitems.find(
    (cartitem) => cartitem.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartitems.map((cartitem) => {
      return cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem;
    });
  } else {
    console.log(cartitems);
    return [...cartitems, { ...productToAdd, quantity: 1 }];
  }
};
const removecartitem = (cartitems, cartitemToremove) => {
  const existingCartItems = cartitems.find(
    (cartitem) => cartitem.id === cartitemToremove.id
  );
  if (existingCartItems.quantity === 1) {
    return cartitems.filter((item) => item.id !== cartitemToremove.id);
  }
  return cartitems.map((cartitem) =>
    cartitem.id === cartitemToremove.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem
  );
};
const clearcartitem = (cartitems, cartitemToremove) => {
  const existingCartItems = cartitems.find(
    (item) => item.id === cartitemToremove.id
  );
  if (existingCartItems) {
    return cartitems.filter((item) => item.id !== cartitemToremove.id);
  }
};
export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartitems: [],
  additemstocart: () => {},
  removeitemsfromcart: () => {},
  clearItemfromcart: () => {},
  cartCount: 0,
  totalPrice:0
});
const INITIAL_STATE = {
  cartCount:0,
  totalPrice:0,
  cartitems:[],
  isCartOpen:false
}
const CART_ACTION_TYPE ={
  SET_CART_ITEMS :'SET_CART_ITEMS',
  SET_IS_CART_OPENS :'SET_IS_CART_OPENS'
  
}

const cartReducer=(state ,action) =>{
  const {type , payload} =action;
  switch(type){
    case  CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case  CART_ACTION_TYPE.SET_IS_CART_OPENS:
      return {
        ...state,
        isCartOpen:payload
      }
      default:
        throw new Error(`unhandled error ${type}`)
  }
}

const CartProvider = ({ children }) => {
  // const [isCartOpen, setisCartOpen] = useState(false);
  
  
  const [state ,dispatch] = useReducer(cartReducer ,INITIAL_STATE);

  const {cartitems , cartCount , totalPrice , isCartOpen}= state;

  const newcartCounter =(newcartitems)=>{
    const newcartcount = newcartitems.reduce(
      (accumalator, currentelement) => accumalator + currentelement.quantity,
      0
    );
    const newPrice = newcartitems.reduce(
      (accumalator, currentelement) => accumalator + (currentelement.quantity*currentelement.price),
      0
    );
    dispatch({type:CART_ACTION_TYPE.SET_CART_ITEMS , payload:{cartitems:newcartitems ,cartCount:newcartcount,totalPrice:newPrice}})
  }
  
  const additemstocart = (productToAdd) => {
   const newCartItems= addCartitem(cartitems, productToAdd);
   newcartCounter(newCartItems)
   
  };

  const removeitemsfromcart = (cartitemToremove) => {
    const newCartItems= removecartitem(cartitems, cartitemToremove);
    newcartCounter(newCartItems)
  };
  const clearItemfromcart = (cartitemToremove) => {
    const newCartItems= clearcartitem(cartitems, cartitemToremove);
    newcartCounter(newCartItems)
  };
   const setisCartOpen =(bool)=>{
    dispatch({type:CART_ACTION_TYPE.SET_IS_CART_OPENS , payload:bool})
  }

  const value = {
    isCartOpen ,
    setisCartOpen,
    additemstocart,
    cartitems,
    cartCount,
    removeitemsfromcart,
    clearItemfromcart,
    totalPrice,
   
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
