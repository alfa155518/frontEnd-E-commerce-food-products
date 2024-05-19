import productOne from "../images/thumbnail-1.jpg";
import productTow from "../images/thumbnail-2.jpg";
import productThree from "../images/thumbnail-3.jpg";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
function NewProductsCategory() {
  return (
    <div className="new-products-side">
      <h3 className="category-name">New Products</h3>
      {/* ========== Product List ========== */}
      <ul className="products-list">
        <li>
          <img src={productOne} alt="product-img" />
          <div className="info">
            <h4 className="product-name">Chen Cardigan</h4>
            <strong className="price">$99.2</strong>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </li>
        <li>
          <img src={productTow} alt="product-img" />
          <div className="info">
            <h4 className="product-name">Chen Sweater</h4>
            <strong className="price">$70.4</strong>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </li>
        <li>
          <img src={productThree} alt="product-img" />
          <div className="info">
            <h4 className="product-name">Colorful Carrot</h4>
            <strong className="price">$100.5</strong>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NewProductsCategory;
