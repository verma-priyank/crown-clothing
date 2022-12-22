// import { useContext  } from "react";
// import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss" ;
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectcartItems , selectCartprice } from "../../store/cart/cart.selector";

function Checkout(){
    // const {cartitems , totalPrice} = useContext(CartContext);
   const cartitems = useSelector(selectcartItems);
   const totalPrice = useSelector(selectCartprice)
   
    
return(
    <div className="checkout-container">
    <div className="checkout-header">
    <div className="header-block"> <span>Product</span> </div>
    <div className="header-block"> <span>Descreption</span> </div>
    <div className="header-block"> <span>Quantity</span> </div>
    <div className="header-block"> <span>Price</span> </div>
    <div className="header-block"> <span>Remove</span> </div>
    
    </div>
   {cartitems.map(items => 
   
    (<CheckoutItem key={items.id} cartitem={items}/>)
   )}
   <span className="total">Total :${totalPrice} </span>
   
    </div>
)



}

export default Checkout;