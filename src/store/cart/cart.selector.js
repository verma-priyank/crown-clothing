import { createSelector } from "reselect";

const selectcartReducer = state => state.cart ;

 export const selectcartItems = createSelector(
    [selectcartReducer] ,
    (cart) => cart.cartitems
);

export const selectIsCartOpen = createSelector(
    [selectcartReducer],
    (cart) => cart.isCartOpen
)

export const selectcartCount =createSelector(
    [selectcartItems],
    (cartitems) =>{
        
        return (cartitems.reduce(
        (accumalator, currentelement) => accumalator + currentelement.quantity,
        0
      ))
    }
);

export const selectCartprice = createSelector(
    [selectcartItems],
    (cartitems) => cartitems.reduce(
        (accumalator, currentelement) => accumalator + (currentelement.quantity*currentelement.price),
        0
      )
);

// const newcartcount = newcartitems.reduce(
//     (accumalator, currentelement) => accumalator + currentelement.quantity,
//     0
//   );
//   const newPrice = newcartitems.reduce(
//     (accumalator, currentelement) => accumalator + (currentelement.quantity*currentelement.price),
//     0
//   );