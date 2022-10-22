import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalContext = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ id: 1, name: "Daravy" });

  const addToCart = (prod) => {
    setCart([...cart, prod]);
    console.log("Adding to cart");
  };

  const removeFromCart = () => {
    console.log("removing from cart");
  };

  const clearCart = () => {
    console.log("clearing cart");
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalContext;
