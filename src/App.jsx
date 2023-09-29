import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {products?.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
      <Cart />
    </>
  );
}

export default App;
