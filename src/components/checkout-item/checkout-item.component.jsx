import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss"

const CheckoutItem =({cartitem}) =>{
const {clearItemfromcart , additemstocart , removeitemsfromcart } = useContext(CartContext);
const{name ,imageUrl,price,quantity} = cartitem;



function increamentHandler(){
    
    return additemstocart(cartitem)
}
function decreamentHandler(){
    return removeitemsfromcart(cartitem)
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
    <div className="remove-button" onClick={()=> clearItemfromcart(cartitem)}>&#10005;;</div>
    
    </div>
)


}
export default CheckoutItem;