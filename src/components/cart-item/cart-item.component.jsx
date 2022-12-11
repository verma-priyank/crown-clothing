
import "./cart-item.styles.scss";

const CartItems = (props) => {
  const { name, quantity, imageUrl, price } = props.cartitem;
  
   
  

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
