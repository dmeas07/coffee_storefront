import "./navBar.css";
import { Link } from "react-router-dom";
import StoreContext from "../state/storeContext";
import { useContext } from "react";

function NavBar() {
  const user = useContext(StoreContext).user;
  const cart = useContext(StoreContext).cart;

  const getCount = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }
    return count;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/#">
          Coffee
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wish">
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-light" to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="badge text-bg-danger">{getCount()}</span>
            </Link>
            <label id="userName">{user.name}</label>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
