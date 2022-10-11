import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import WishList from "./components/wishlist";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <Catalog></Catalog>

      <WishList></WishList>

      <Footer></Footer>
    </div>
  );
}

export default App;
