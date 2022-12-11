
import { useContext  } from "react";
import {ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss"



function CartIcon () {
    
    const {isCartOpen , setisCartOpen , cartCount}  = useContext(CartContext)
    function handleclick() {
       
       setisCartOpen(!isCartOpen);
    }
   
    
return (<div className="cart-icon-container" onClick={handleclick}>

 <ShoppingIcon  className="shopping-icon" /> 
<span className="item-count">{cartCount}</span>
</div>)

}

export default CartIcon ;