// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";

import { additemstocart,clearItemfromcart , removeitemsfromcart} from "../../store/cart/cart.action";
import { selectcartItems } from "../../store/cart/cart.selector";
import "./checkout-item.styles.scss"

const CheckoutItem =({cartitem}) =>{
// const {clearItemfromcart , additemstocart , removeitemsfromcart } = useContext(CartContext);
const{name ,imageUrl,price,quantity} = cartitem;
const dispatch = useDispatch();
const cartitems = useSelector(selectcartItems)

function increamentHandler(){
    
    return dispatch(additemstocart(cartitems , cartitem));
}
function decreamentHandler(){
    return dispatch(removeitemsfromcart(cartitems ,cartitem));
}
return(
    <div className="checkout-item-container">
    <div className="image-container">
    <img  src={imageUrl} alt={`${name}`}/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
    <div className="arrow"  onClick={decreamentHandler}>&#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick={increamentHandler}>&#10095;</div>
    </span>
    <span className="price">${price}</span>
    <div className="remove-button" onClick={()=> dispatch(clearItemfromcart(cartitems ,cartitem))}>&#10005;;</div>
    
    </div>
)


}
export default CheckoutItem;