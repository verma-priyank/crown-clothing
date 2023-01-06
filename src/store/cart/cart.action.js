import { CART_ACTION_TYPE } from "./cart.types";
const createAction =(type ,payload) =>({type , payload});



  const addCartitem = (cartitems, productToAdd) => {
    
    const existingCartItems = cartitems.find(
        
        (cartitem) => cartitem.id === productToAdd.id
      );
    console.log(productToAdd)
    console.log(cartitems)
    if (existingCartItems) {
      return cartitems.map((cartitem) => {
        return (cartitem.id === productToAdd.id
          ? { ...cartitem, quantity: cartitem.quantity + 1 }
          : cartitem )
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
   
 export  const setisCartOpen =(bool)=>{
    
  return createAction(CART_ACTION_TYPE.SET_IS_CART_OPENS , bool)
  }

  export const additemstocart = (cartitems ,productToAdd) => {
    const newCartItems= addCartitem(cartitems, productToAdd);
   return createAction(CART_ACTION_TYPE.SET_CART_ITEMS , newCartItems)
    
   };
 
   export const removeitemsfromcart = (cartitems ,cartitemToremove) => {
     const newCartItems= removecartitem(cartitems, cartitemToremove);
    return createAction( CART_ACTION_TYPE.SET_CART_ITEMS ,newCartItems)
   };
   export const clearItemfromcart = (cartitems ,cartitemToremove) => {
     const newCartItems= clearcartitem(cartitems, cartitemToremove);
    return createAction( CART_ACTION_TYPE.SET_CART_ITEMS ,newCartItems)
   };

   export const paymentCompleted =() => {
    return createAction(CART_ACTION_TYPE.PAYMENT_COMPLETE)
   }