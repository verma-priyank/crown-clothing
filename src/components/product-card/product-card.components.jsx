// import { useContext } from "react"
import { useDispatch , useSelector } from "react-redux"
// import { CartContext } from "../../context/cart.context"
import "./product-card.styles.scss"
import Button from "../buttons/buttons.components"
import { additemstocart } from "../../store/cart/cart.action"
import { selectcartItems } from "../../store/cart/cart.selector"


const ProductCard =(props) =>{
    // const{additemstocart}  = useContext(CartContext);
    const cartitems = useSelector(selectcartItems)
    const dispatch = useDispatch();
    function handleclick(){
        console.log(props.products)
       dispatch(additemstocart(cartitems ,props.products))
       

        
    }
    // console.log(props.products)
   const {name , price ,imageUrl } = props.products ;
//    console.log({name})
    return (
        <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
         <span className="name">{name}</span>
         <span className="price">${price}</span>
         </div>
         <Button buttontype="inverted" onClick={handleclick}>Add To Cart</Button>
        </div>
    )
} 

export default ProductCard ;