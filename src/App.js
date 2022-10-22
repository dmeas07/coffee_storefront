import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import WishList from "./components/wishlist";
import Home from "./pages/home";
import About from "./pages/about";
import Admin from "./pages/admin";
import Cart from "./pages/cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./state/globalContext";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <div>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/wish" element={<WishList />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
