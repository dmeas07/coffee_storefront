import "./catalog.css";
import Product from "../components/product";

function Catalog() {
  return (
    <div className="words">
      <h1 className="title">Check out our amazing catalog!</h1>
      <div className="list-container">
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
}

export default Catalog;
