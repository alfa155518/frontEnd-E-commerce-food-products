import { Link } from "react-router-dom";
// import { TbMoodEmpty } from "react-icons/tb";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import img from "../images/page-404.png";
import "../sass/pages/page-not-found.css";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";

function PageNotFound() {
  return (
    <section className="page-not-found p-relative">
      <MainHeader />
      <NavBar />
      <SecondNav />
      <img src={img} alt="error-img" />
      <h1 className="empty-section">
        <Link to={"/shop"} aria-label="back to add home">
          <FaArrowAltCircleLeft />
        </Link>
        Page Not Found Back To Home Page
        {/* <TbMoodEmpty /> */}
      </h1>
      <Footer />
    </section>
  );
}

export default PageNotFound;
