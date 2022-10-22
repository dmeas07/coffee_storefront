import "./cart.css";
import { useContext } from "react";
import StoreContext from "../state/storeContext";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  return (
    <div className="cart">
      <div className="cartText">
        <h1 className="header">Checkout</h1>
        <h2 className="header">You have {cart.length} items in your cart</h2>

        <div>
          <ul>
            {cart.map((p) => (
              <li key={p._id}>
                {p.title} - {p.quantity}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
