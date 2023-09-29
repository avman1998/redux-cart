import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalCount = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <p>Cart : {cart.length}</p>
      <p>Count: {totalCount}</p>
    </div>
  );
};

export default Cart;
