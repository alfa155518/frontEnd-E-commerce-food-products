import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { PopularProductsContext } from "../context/ContextProducts";
import { useContext } from "react";
import CalcRatingProduct from "../components/CalcRatingProduct";
import MainHeader from "../layout/MainHeader";
import Categories from "../sections/Categories";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "../sass/pages/product-info.css";

function ProductInfo() {
  let { productInfo } = useContext(PopularProductsContext);
  let {
    brand,
    catImg,
    description,
    oldPrice,
    price,
    productImages,
    productName,
    weight,
  } = productInfo;

  // Change Product Img In Page Of Product Info
  function changeProductImg(e) {
    document.documentElement.querySelector(".iiz__zoom-img").src = e.target.src;
  }
  return (
    <>
      <MainHeader />
      <NavBar />
      <SecondNav />
      {productImages ? (
        <section className="wrapper-product-info">
          <div className="product-content">
            {/* ========= Single Product ======== */}
            <div className="product">
              {/* ============ Product Img =========== */}
              <div className="product-img">
                <InnerImageZoom
                  src={catImg}
                  alt={"img"}
                  zoomSrc={catImg}
                  zoomScale={2}
                  moveType="pan"
                  zoomPreload={true}
                  zoomType="hover"
                  className="img"
                  // hasSpacer={true}
                />
                {/* ========== Thumbnail Images ========== */}
                <ul className="thumbnail-images">
                  {productImages.map((img, i) => (
                    <li key={i}>
                      <img
                        src={img}
                        alt="img"
                        loading="lazy"
                        onClick={changeProductImg}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* ======== Second Hand Details ======= */}
              <div className="product-details">
                <h1 className="product-name">{productName}</h1>
                <div className="rating">
                  <CalcRatingProduct product={productInfo} />
                </div>
                <div className="prices">
                  <strong className="current-price">${price}</strong>
                  <strong className="old-price">${oldPrice}</strong>
                </div>
                <article className="description">{description}</article>
                <ul className="product-sizes">
                  {weight?.map((size, i) => (
                    <li className="size" key={i}>
                      {size}
                    </li>
                  ))}
                </ul>
                {/* ======== More Details ========= */}
                <ul className="more-details">
                  <li>
                    <span>
                      Type:
                      <em>{brand}</em>
                    </span>
                    <span>
                      MFQ:
                      <em> March,9/2024</em>
                    </span>
                  </li>
                  <li>
                    <span>
                      Life:
                      <em> 70ms</em>
                    </span>
                    <span>
                      Tags:
                      <em> Organic,Food,Fresh</em>
                    </span>
                  </li>
                  <li>
                    <span>
                      RAM:
                      <em> FMREQW187</em>
                    </span>
                    <span>
                      Country:
                      <em> Egypt</em>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="more-info">
              <h2>Description</h2>
              <article>
                {description} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Facere labore illum quae, commodi recusandae nemo libero
                accusantium. Vel ducimus itaque mollitia excepturi est quaerat
                illum dolorum laboriosam, iure, quam eius!
              </article>
              <ul className="about-product">
                <li>
                  <span>Type Of Backing:</span>
                  <span>Battle</span>
                </li>
                <li>
                  <span>color:</span>
                  <span>Red,Green,Blue,Pink,Yellow</span>
                </li>
                <li>
                  <span>Quantity Pare Case:</span>
                  <span>100ml</span>
                </li>
                <li>
                  <span>Ethyl Alcohol:</span>
                  <span>70%</span>
                </li>
                <li>
                  <span>Place In One:</span>
                  <span>Egypt</span>
                </li>
              </ul>
              <p className="second-article">
                {description} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor, magni!
              </p>
              <div className="delivery">
                <h3>Packing&Delivery</h3>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam dolorum iste, nobis, impedit nesciunt nam voluptatibus
                  nostrum, dolore ipsam tenetur rem! Excepturi repudiandae optio
                  necessitatibus ipsam vel quae nostrum doloremque quidem
                  praesentium accusamus maiores sapiente pariatur quis aliquam,
                  ut dolorum!
                </article>
              </div>
              <div className="uses">
                <h4>Suggests Uses</h4>
                <p>consectetur adipisicing elit. Expedita, quos?</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="gradients">
                <h5>Other Gradients</h5>
                <p>consectetur adipisicing elit. Expedita, quos</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>consectetur adipisicing elit. Expedita, quos</p>
              </div>
              <div className="waring">
                <h6>Waring</h6>
                <p>consectetur adipisicing elit. Expedita, quos</p>
              </div>
            </div>
          </div>
          <aside>
            <Categories />
          </aside>
        </section>
      ) : (
        <h1 className="empty-section">
          <Link to={"/"} aria-label="back to get product">
            <FaArrowAltCircleLeft />
          </Link>
          Product Info Empty
        </h1>
      )}
      <Footer />
    </>
  );
}

export default ProductInfo;
