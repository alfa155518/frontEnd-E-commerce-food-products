import { NavLink } from "react-router-dom";
import "../sass/layout/second-nav.css";
import { FaHeadset } from "react-icons/fa";

function SecondNav() {
  return (
    <nav className="second-nav">
      <div className="btn-categories">Browse All Categories</div>
      <ul className="links">
        <li>
          <NavLink to="/" aria-label="Back To home page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" aria-label="go to about page">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" aria-label="go to shop page">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart-page" aria-label="go to cart page">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" aria-label="go to blog page">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" aria-label="go to contact page">
            Contact-us
          </NavLink>
        </li>
      </ul>
      <div className="support">
        <h5>
          <FaHeadset />
        </h5>
        <div>
          <p>1900 - 888</p>
          <span>24/7 support center</span>
        </div>
      </div>
    </nav>
  );
}

export default SecondNav;
