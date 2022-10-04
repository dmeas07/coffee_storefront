import "./product.css";
import Quantity from "./quantity";

const Product = () => {
  return (
    <div className="items">
      <img src="https://picsum.photos/200" alt="" />
      <h5>This is a Product</h5>

      <div className="price">
        <label className="price">Price</label>
        <label className="total">Total</label>
      </div>
      <Quantity></Quantity>

      <button className="add">Add to cart</button>
    </div>
  );
};

export default Product;
