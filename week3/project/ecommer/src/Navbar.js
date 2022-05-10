import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav">
      <Link to={"/"} className="nav-link">
        Products
      </Link>
      <Link to={"/favorites"} className="nav-link">
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
