import { useState } from "react";
import "./quantity.css";

const Quantity = () => {
  const [qty, setQuantity] = useState(1);

  const plusOne = () => {
    // console.log("btn clicked plus one");
    let value = qty + 1;
    setQuantity(value);
  };

  const minusOne = () => {
    // console.log("btn clicked minus one");
    if (qty !== 1) {
      let value = qty - 1;
      setQuantity(value);
    }
  };

  return (
    <div className="quantitySelector">
      <h6>Select Quantity</h6>
      <button className="btn btn-sm btn-primary" onClick={plusOne}>
        +
      </button>
      <label>{qty}</label>
      <button
        className="btn btn-sm btn-primary"
        disabled={qty === 1}
        onClick={minusOne}
      >
        -
      </button>
    </div>
  );
};

export default Quantity;
