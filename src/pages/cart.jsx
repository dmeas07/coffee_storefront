import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";
import ProductInCart from "../components/productincart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getCount = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }
    return count;
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return "$" + total.toFixed("2");
  };

  return (
    <div className="cart">
      <div className="cartText">
        <h1 className="header">Checkout</h1>
        <h2 className="header">You have {getCount()} items in your cart</h2>

        <div>
          <ul>
            {cart.map((prod) => (
              <ProductInCart key={prod.id} data={prod} />
            ))}
          </ul>
        </div>
        <div className="cartPricesList">
          <div className="cartPrice">
            <h4>Total</h4>
            <hr />
            <h5>{getTotal()}</h5>
          </div>
          <br />
          <div className="payNow">
            <button className="btn btn-primary btn-lg" id="payNow">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
