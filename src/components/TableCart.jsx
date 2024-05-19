import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { TbMoodEmpty } from 'react-icons/tb';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { CartContainerContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import usePlusProductNumber from '../hooks/usePlusProductNumber';
import useMinusProductNumber from '../hooks/useMinusProductNumber';
import useDeleteProduct from '../hooks/useDeleteProduct';
import ScrollToTop from '../components/ScrollToTop';

function TableCart({ cartData }) {
  const { setCartData } = useContext(CartContainerContext);

  // -1) Custom Hook To Plus Product Number
  const [plusProductNum] = usePlusProductNumber(cartData, setCartData);

  // -2) Custom Hook To Minus Product Number
  const [minusProductNum] = useMinusProductNumber(cartData, setCartData);

  // -3) Custom Hook To Delete Product From Cart
  const [removeProduct] = useDeleteProduct(cartData, setCartData);

  // Calc Total Price
  let allProductPrice = cartData.reduce((acc, curr) => {
    return parseInt(acc + curr.quantity * curr.price);
  }, 0);

  return (
    <>
      {cartData.length > 0 ? (
        <div className="wrapper-cart">
          <table>
            <thead>
              <tr>
                <th>product</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>
                  <span className="remove-product">remove</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.length > 0 &&
                cartData.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <img src={product.catImg} alt="re" />
                    </td>
                    <td>
                      <h5 className="name">{product.productName}</h5>
                    </td>
                    <td>
                      <h6 className="price">
                        ${product.price * product.quantity}
                      </h6>
                    </td>
                    <td className="actions">
                      <div
                        className="plus"
                        onClick={(e) => plusProductNum(e, product)}
                      >
                        +
                      </div>
                      <span className="quantity">{product.quantity}</span>
                      <div
                        className={`${
                          product.quantity >= 2 ? 'minus' : 'stop-click'
                        }`}
                        onClick={(e) => minusProductNum(e, product)}
                      >
                        -
                      </div>
                    </td>
                    <td
                      className="trash"
                      onClick={() => removeProduct(product)}
                    >
                      <FaTrash />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="cart-action-btn">
            <form>
              <button name="check-out" className="check-out">
                <Link to={'/checkout'}>Proceed To CheckOut</Link>
              </button>
              <button
                name="clear"
                className="clear-cart"
                onClick={() => setCartData([])}
              >
                Clear Cart
              </button>
            </form>
          </div>
          <p className="total-price">Total: ${allProductPrice}.00</p>
        </div>
      ) : (
        <h1 className="empty-section">
          <Link to={'/shop'} aria-label="back to add product">
            <FaArrowAltCircleLeft />
          </Link>
          Cart Shopping Is Empty <TbMoodEmpty />
        </h1>
      )}
      <ScrollToTop />
    </>
  );
}

export default TableCart;
