import logo from "../images/logo.svg";
import downloadImg_1 from "../images/app-store.jpg";
import downloadImg_2 from "../images/google-play.jpg";
import payment from "../images/payment-method.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../sass/layout/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <ul className="wrapper-links">
          <ul className="links">
            <li className="category">
              <img src={logo} alt="logo-img" />
              <p>Awesome grocery store website template</p>
            </li>
            <li>
              <FaLocationDot />
              <strong>
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </strong>
            </li>
            <li>
              <FaHeadset />
              <strong>Call Us: (+91) - 540-025-124553</strong>
            </li>
            <li>
              <FaTelegramPlane />
              <strong>Email: sale@Nest.com</strong>
            </li>
            <li>
              <IoChatbubbleEllipsesSharp />
              <strong>Hours: 10:00 - 18:00, Mon - Sat</strong>
            </li>
          </ul>
          <ul className="links">
            <li className="category">Company</li>
            <li>
              <Link to={"#"}>About Us</Link>
            </li>
            <li>
              <Link to={"#"}>Delivery Information</Link>
            </li>
            <li>
              <Link to={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"#"}>Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"#"}>Support Center</Link>
            </li>
            <li>
              <Link to={"#"}>Careers</Link>
            </li>
          </ul>
          <ul className="links">
            <li className="category">Account</li>
            <li>
              <Link to={"#"}>Account</Link>
            </li>
            <li>
              <Link to={"#"}>Sing UP</Link>
            </li>
            <li>
              <Link to={"#"}>View Cart</Link>
            </li>
            <li>
              <Link to={"#"}>My Wishlist</Link>
            </li>
            <li>
              <Link to={"#"}>Track Order</Link>
            </li>
            <li>
              <Link to={"#"}>Shopping Details</Link>
            </li>
            <li>
              <Link to={"#"}>Compare Products</Link>
            </li>
          </ul>
          <ul className="links">
            <li className="category">Corporate</li>
            <li>
              <Link to={"#"}>Economy Vendor</Link>
            </li>
            <li>
              <Link to={"#"}>Artificial Program</Link>
            </li>
            <li>
              <Link to={"#"}>Farm Business</Link>
            </li>
            <li>
              <Link to={"#"}>Farm Curses</Link>
            </li>
            <li>
              <Link to={"#"}>Our Splicers</Link>
            </li>
            <li>
              <Link to={"#"}>Accessibly</Link>
            </li>
            <li>
              <Link to={"#"}>Promotion</Link>
            </li>
          </ul>
          <ul className="links">
            <li className="category">Popular</li>
            <li>
              <Link to={"#"}>Bean</Link>
            </li>
            <li>
              <Link to={"#"}>Milk</Link>
            </li>
            <li>
              <Link to={"#"}>Butter</Link>
            </li>
            <li>
              <Link to={"#"}>Eggs</Link>
            </li>
            <li>
              <Link to={"#"}>Dip</Link>
            </li>
            <li>
              <Link to={"#"}>Tea</Link>
            </li>
            <li>
              <Link to={"#"}>cheese</Link>
            </li>
          </ul>
          <ul className="links">
            <li className="category">Install App</li>
            <li>From App Store or Google Play</li>
            <li>
              <img src={downloadImg_1} alt="playStore-img" />
              <img src={downloadImg_2} alt="GogglePlay-img" />
            </li>
            <li>Secured Payment Gateways</li>
            <li>
              <img src={payment} alt="payment-img" />
            </li>
          </ul>
        </ul>
      </footer>

      {/* ================ CopyRight Section ============== */}

      <div className="wrapper-copyright">
        <div className="all-rights">
          <p>
            © 2024, <em>Ahmed Hassob</em> - Ecommerce Food
          </p>
          <span>All rights reserved</span>
        </div>
        <div className="call-us">
          <div className="item">
            <div className="phone">
              <FaPhoneAlt />
            </div>
            <div className="number">
              <strong>1900 - 6666</strong>
              <span>working 8.00 - 22.00</span>
            </div>
          </div>
          <div className="item">
            <div className="phone">
              <FaPhoneAlt />
            </div>
            <div className="number">
              <strong>1900 - 8888</strong>
              <span>24/7 Support center</span>
            </div>
          </div>
        </div>
        <ul className=" socials">
          <li>
            <BsFacebook />
          </li>
          <li>
            <IoLogoYoutube />
          </li>
          <li>
            <RiTwitterXLine />
          </li>
          <li>
            <FaPinterest />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
