import { useState } from "react";
import "./product.css";
import Quantity from "./quantity";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (qty) => {
    console.log("Quantity changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };

  return (
    <div className="items">
      <img src={"/img/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>

      <div className="price">
        <label className="single">
          Price: ${props.data.price.toFixed("2")}
        </label>
        <label className="total">Total: {getTotal()}</label>
      </div>
      <div className="controls">
        <Quantity onChange={handleQuantityChange} />
      </div>
      <button className="add">Add to cart</button>
    </div>
  );
};

export default Product;
