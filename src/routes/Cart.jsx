import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <>
      <p>Cart</p>
      {items.map((item) => {
        return <CartItem key={`cartItem_${item.id}`} {...item} />;
      })}
    </>
  );
}
