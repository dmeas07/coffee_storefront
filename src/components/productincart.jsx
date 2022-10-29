import "./productincart.css";

const ProductInCart = (props) => {
  const getTotal = () => {
    return props.data.price * props.data.quantity;
  };

  return (
    <div className="prod-cart">
      <div className="cartCardSect d-flex align-items-center gap-1">
        <div className="cart-img">
          <img
            src={"/img/" + props.data.image}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="info">
          <h5>{props.data.title}</h5>
          <p>{props.data.category}</p>

          <label>{props.data.price}</label>

          <label>{props.data.quantity}</label>

          <label>{getTotal()}</label>

          <button className="btn btn-sm btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
