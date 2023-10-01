import Product from "./Product";
import Cart from "./Cart";
import { useGetProductQuery } from "./redux/api";
import "./App.css";

function App() {
  // const [products, setProducts] = useState([]);
  // const fetchData = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProducts(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { data: products, error, isLoading } = useGetProductQuery();
  if (error) return <h1>Error : {error}</h1>;

  if (isLoading) return <h1>Loading......</h1>;

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
