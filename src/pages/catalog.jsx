import "./catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import Dataservice from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);
  // use effect
  // to do something when the component is loaded
  useEffect(() => {
    loadData();
  }, {});

  const loadData = async () => {
    let service = new Dataservice();
    let result = await service.getCatalog();
    setProducts(result);
  };

  return (
    <div className="words">
      <h1 className="title">Check out our amazing catalog!</h1>
      <h5>We have {products.length} products waiting for you</h5>
      <div className="list-container">
        {products.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
