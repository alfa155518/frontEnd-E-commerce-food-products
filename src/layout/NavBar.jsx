import logo from "../images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../sass/layout/navbar.css";
import axios from "axios";
import { useState } from "react";
function NavBar() {
  const [logoutStatus, setLogoutStatus] = useState({});
  async function handleLogout() {
    try {
      await axios.delete(
        "https://backend-e-commerce-food-products.onrender.com/api/v1/users/logout",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await localStorage.clear();
      setLogoutStatus("success");
      // window.location.href = "/frontend-E-commerce-food-products-/signup";
    } catch (error) {
      console.log(error);
    }
  }

  // Show Or Hide Menu In Small Screens
  function showOrHideMenu() {
    const allLinksMenu =
      document.documentElement.querySelector(".second-nav .links");
    allLinksMenu.classList.toggle("active-menu");
  }

  return (
    <nav>
      <div className="logo">
        <Link to={"/"} aria-label="home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search About Products"
          autoComplete="search"
        />
        <button>
          <IoSearchOutline />
        </button>
      </form>
      <ul className="actions">
        <li>
          <Link to="/favorite">
            <span>
              <CiHeart />
            </span>
            Favorite
            {/* <strong className="number">0</strong> */}
          </Link>
        </li>
        <li>
          <Link to="/cart-page">
            <span>
              <IoCartOutline />
            </span>
            My Wishlist
            {/* <strong className="number">{productNumber}</strong> */}
          </Link>
        </li>
        <li>
          {localStorage.getItem("status") ? (
            <Link
              className="user-account"
              to={logoutStatus === "success" && "/signup"}
              onClick={handleLogout}>
              <span>
                <img src={localStorage.getItem("photo")} alt="user" />
              </span>
              Logout
            </Link>
          ) : (
            <Link to="/signup">
              <span>
                <FaRegUser />
              </span>
              Sign-Up
            </Link>
          )}
        </li>
      </ul>
      <div className="bars" onClick={showOrHideMenu}>
        <FaBarsStaggered />
      </div>
    </nav>
  );
}

export default NavBar;
