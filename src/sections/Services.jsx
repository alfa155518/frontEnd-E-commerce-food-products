import serviceImg_1 from "../images/service-1.svg";
import serviceImg_2 from "../images/service-2.svg";
import serviceImg_3 from "../images/service-3.svg";
import serviceImg_4 from "../images/service-4.svg";
import serviceImg_5 from "../images/service-5.svg";

import "../sass/sections/services.css";

function Services() {
  return (
    <section className="services">
      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_1} alt="service-img" />
        </div>
        <div className="details">
          <h5>Wide Assortment</h5>
          <span>Mega Discounts</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_2} alt="service-img" />
        </div>
        <div className="details">
          <h5>Easy Returns</h5>
          <span>Within 30 Days</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_3} alt="service-img" />
        </div>
        <div className="details">
          <h5>Best Price & Offer</h5>
          <span>Order $50 or More</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_4} alt="service-img" />
        </div>
        <div className="details">
          <h5>Free Delivery</h5>
          <span>24/7 Amazing Services</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_5} alt="service-img" />
        </div>
        <div className="details">
          <h5>Great Daily Deal</h5>
          <span>When You Sing up</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
