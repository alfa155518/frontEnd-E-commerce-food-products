import "../sass/pages/contact.css";

import contact_img from "../images/contact.png";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";

function Contact() {
  return (
    <>
      <MainHeader />
      <NavBar />
      <SecondNav />
      <section className="contact">
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <input type="text" name="user name" placeholder="Enter Your Name" />
            <input
              type="email"
              name="user email"
              placeholder="Enter Your Email"
            />
            <textarea name="user message" placeholder="Message"></textarea>
            <button type="button" name="send user message">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-img">
          <img src={contact_img} alt="contact-img" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
