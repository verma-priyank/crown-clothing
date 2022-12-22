
// import { useContext  } from "react";
import { useSelector , useDispatch } from "react-redux";

import {ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
// import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss"
import { setisCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen , selectcartCount} from "../../store/cart/cart.selector";


function CartIcon () {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectcartCount)
    // const {isCartOpen , setisCartOpen , cartCount}  = useContext(CartContext)
    function handleclick() {
       
       dispatch(setisCartOpen(!isCartOpen));
    }
   
    
return (<div className="cart-icon-container" onClick={handleclick}>

 <ShoppingIcon  className="shopping-icon" /> 
<span className="item-count">{cartCount}</span>
</div>)

}

export default CartIcon ;