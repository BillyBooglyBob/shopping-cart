import PT from 'prop-types';
import "./Item.module.css";
import { useDispatch } from 'react-redux';
import { addItem } from "../../redux/cart";

function Item({ image, title, price, description, category, item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>${price}</h2>
      <h2>{category}</h2>
      <p>{description}</p>
      <button onClick={() => dispatch(addItem(item))}>Add to cart</button>
    </div>
  );
}

Item.propTypes = {
  image: PT.string.isRequired,
  title: PT.string.isRequired,
  price: PT.number.isRequired,
  description: PT.string.isRequired,
  category: PT.string.isRequired,
  item: PT.object.isRequired
}

export default Item; 
