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

const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartitems, setCartitems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [totalPrice ,settotalPrice] = useState(0)

  useEffect(() => {
    const newcartcount = cartitems.reduce(
      (accumalator, currentelement) => accumalator + currentelement.quantity,
      0
    );
    setcartCount(newcartcount);
  }, [cartitems]);

  useEffect(() => {
    const newPrice = cartitems.reduce(
      (accumalator, currentelement) => accumalator + (currentelement.quantity*currentelement.price),
      0
    );
    settotalPrice(newPrice);
  }, [cartitems]);
  
  const additemstocart = (productToAdd) => {
    return setCartitems(addCartitem(cartitems, productToAdd));
  };

  const removeitemsfromcart = (cartitemToremove) => {
    return setCartitems(removecartitem(cartitems, cartitemToremove));
  };
  const clearItemfromcart = (cartitemToremove) => {
    return setCartitems(clearcartitem(cartitems, cartitemToremove));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    additemstocart,
    cartitems,
    cartCount,
    removeitemsfromcart,
    clearItemfromcart,
    totalPrice,
    settotalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
