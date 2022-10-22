import { useState, useContext } from "react";
import StoreContext from "../state/storeContext";
import "./product.css";
import Quantity from "./quantity";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleQuantityChange = (qty) => {
    console.log("Quantity changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };

  const handleAdd = () => {
    let pForCart = { ...props.data, quantity: quantity };
    addToCart(pForCart); //call the context fn
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
      <button onClick={handleAdd} className="add">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
