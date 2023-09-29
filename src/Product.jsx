import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
// eslint-disable-next-line react/prop-types
const Product = ({ id, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div key={id}>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => dispatch(addToCart({ id, title, price }))}>
        Add Item
      </button>
    </div>
  );
};

export default Product;
