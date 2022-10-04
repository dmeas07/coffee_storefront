import "./product.css";
import Quantity from "./quantity";

const Product = (props) => {
  return (
    <div className="items">
      <img src={"/img/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>

      <div className="price">
        <label className="price">Price {props.data.price}</label>
        <label className="total">Total</label>
      </div>
      <Quantity></Quantity>

      <button className="add">Add to cart</button>
    </div>
  );
};

export default Product;
