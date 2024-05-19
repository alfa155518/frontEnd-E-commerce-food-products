import { Link } from 'react-router-dom';

import { MdKeyboardArrowDown } from 'react-icons/md';

import '../sass/layout/header.css';
// import img from '../images/users/';
function MainHeader() {
  return (
    <header>
      <ul className="header-links">
        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/">My Account</Link>
        </li>

        <li>
          <Link to="/">My Wishlist</Link>
        </li>
        <li>
          <Link to="/">Order Tracking</Link>
        </li>
      </ul>
      <p>100% Fast services and deliveries</p>
      <ul className="header-support">
        <li>
          Need Help? Call Us +<span className="phone-number">1800 900 200</span>
        </li>
        <li>
          English
          <span>
            <MdKeyboardArrowDown />
          </span>
        </li>
        <li>
          USD
          <span>
            <MdKeyboardArrowDown />
          </span>
        </li>
      </ul>
    </header>
  );
}

export default MainHeader;
