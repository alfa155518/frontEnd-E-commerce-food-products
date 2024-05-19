import Footer from '../layout/Footer';

import '../sass/pages/checkout.css';
import pay_1 from '../images/payments/pay-1.webp';
import pay_2 from '../images/payments/pay-2.jpg';
import pay_3 from '../images/payments/pay-3.png';
import pay_4 from '../images/payments/pay-4.png';
import checkoutImg from '../images/payments/Self checkout-cuate.png';

function CheckOut() {
  return (
    <>
      <section className="container-payment">
        <div className="section-img">Checkout Page</div>
        <div className="express-checkout">
          <hr className="line-express-checkout p-relative" />
          <div className="images">
            <img src={pay_1} alt="payment Img" />
            <img src={pay_2} alt="payment Img" />
            <img src={pay_3} alt="payment Img" />
            <img src={pay_4} alt="payment Img" />
          </div>
        </div>

        {/* ********** alternative-checkout ********** */}
        <div className="alternative-checkout">
          <hr className="line-alternative-checkout p-relative" />
          <div className="content">
            <div className="content-img">
              <img src={checkoutImg} alt="checkout Img" />
            </div>
            <form>
              <h3>Contact information</h3>
              <input type="email" placeholder="Email" />
              <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                Sign up for apply special offers and get 10% off
              </label>
              <h4>Shipping Address</h4>
              <select required>
                <option value="">Select Country</option>
                <option value="EGYPT">EGYPT</option>
                <option value="USA">USA</option>
                <option value="Franca">Franca</option>
                <option value="Germany">Germany</option>
              </select>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="Phone Number(optional)" />
              <button className="btn-checkout">Continue</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CheckOut;
