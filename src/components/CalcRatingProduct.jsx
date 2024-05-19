import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
function CalcRatingProduct({ product }) {
  return (
    <>
      {product.rating === 5 && (
        <ul className="rating">
          <li className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </li>
          <li>({product.rating})</li>
        </ul>
      )}
      {product.rating === 4.5 && (
        <ul className="rating">
          <li className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="half-star" />
          </li>
          <li>({product.rating})</li>
        </ul>
      )}
      {product.rating === 4 && (
        <ul className="rating">
          <li className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="half-star" />
          </li>
          <li>({product.rating})</li>
        </ul>
      )}
      {product.rating === 3.5 && (
        <ul className="rating">
          <li className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="half-star" />
          </li>
          <li>({product.rating})</li>
        </ul>
      )}
      {product.rating === 3 && (
        <ul className="rating">
          <li className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="half-star" />
          </li>
          <li>({product.rating})</li>
        </ul>
      )}
      {product.rating === 0 && (
        <ul className="rating">
          <li className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="half-star" />
          </li>
          <li>({product.rating})</li>
        </ul>
      )}
    </>
  );
}

export default CalcRatingProduct;
