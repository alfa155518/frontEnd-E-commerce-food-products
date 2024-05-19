import about_img from "../images/newsletter.png";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";
import Managers from "../components/Managers";

import "../sass/pages/about.css";

function About() {
  return (
    <>
      <MainHeader />
      <NavBar />
      <SecondNav />
      <div className="section-img ">About Us Page</div>
      <section className="about">
        <div className="details">
          <strong>How We Started</strong>
          <h1>Our Dream Is Global Learning Transformation</h1>
          <br />
          <article>
            Distinctively provide acces mutfuncto users whereas transparent
            proceses somes ncentivize eficient functionalities rather than
            extensible archtectur communicate leveraged services and
            cross-platform.
          </article>
        </div>
        <div className="info">
          <div className="about-img">
            <img src={about_img} alt="about-img" />
          </div>
          <div className="achievement">
            <div className="box">
              <strong className="number">3.5k</strong>
              <span>Visitor In Last Month</span>
            </div>
            <div className="box">
              <strong className="number">32k</strong>
              <span>Customers In Years</span>
            </div>
            <div className="box">
              <strong className="number">830+</strong>
              <span>People Reviews</span>
            </div>
            <div className="box">
              <strong className="number">100k</strong>
              <span>Top Rating</span>
            </div>
          </div>
        </div>
      </section>
      {/* ======= Managers Section ====== */}
      <Managers />
      <Footer />
    </>
  );
}

export default About;
