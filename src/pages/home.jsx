import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <h1>Home Page</h1>
      </div>
      <div className="homeimg">
        <img src="/img/homebg.jpg" alt="" />
      </div>
      <div>
        <Link className="btn btn-lg btn-dark" to="/catalog">
          Check out our catalog
        </Link>
      </div>
    </div>
  );
};

export default Home;
