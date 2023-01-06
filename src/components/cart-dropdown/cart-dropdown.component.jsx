// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../context/cart.context";
import { useSelector } from "react-redux";
import "./cart-dropdown.styles.scss"
import Button from "../buttons/buttons.components"
import CartItems from "../cart-item/cart-item.component";
import { selectcartItems } from "../../store/cart/cart.selector";
function Cartdropdown() {
    
// const {cartitems} = useContext(CartContext)
const cartitems = useSelector(selectcartItems)
const navigate = useNavigate();

function handleclick(){
    navigate("/checkout");
}

return (
    
    
     (<div className="cart-dropdown-container "  >
    <div className="cart-items">
    {cartitems.length?cartitems.map(cartitem =>{
        return (<CartItems key={cartitem.id} cartitem={cartitem}/>)
    }):<span className="empty-message">Your Cart is Empty</span>}
    
    </div>
   <Button onClick={handleclick}>GO TO CHECKOUT</Button>
    </div>)
    
   
    
)

}

export default Cartdropdown;