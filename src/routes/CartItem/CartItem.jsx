import PT from "prop-types";
import "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cart";

function CartItem({ image, title, price, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>${price}</h2>
      <button onClick={() => dispatch(deleteItem(id))}>Delete from cart</button>
    </div>
  );
}

CartItem.propTypes = {
  image: PT.string.isRequired,
  title: PT.string.isRequired,
  price: PT.number.isRequired,
  id: PT.number.isRequired,
};

export default CartItem;
