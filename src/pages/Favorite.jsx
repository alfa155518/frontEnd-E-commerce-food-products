import { useContext } from "react";
import { CartContainerContext } from "../context/CartContext";
import { TbMoodEmpty } from "react-icons/tb";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "../sass/components/products.css";
import ProductContent from "../components/ProductContent";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import { Link } from "react-router-dom";

function FavoriteProducts() {
  const { favoriteProduct } = useContext(CartContainerContext);
  return (
    <>
      <MainHeader />
      <NavBar />
      <SecondNav />
      <div className="section-img">Favorite Page</div>
      {favoriteProduct.length > 0 ? (
        <section className="all-products">
          {favoriteProduct.map((product, i) => {
            return <ProductContent key={i} product={product} />;
          })}
        </section>
      ) : (
        <h1 className="empty-section">
          <Link to={"/shop"} aria-label="back to add product">
            <FaArrowAltCircleLeft />
          </Link>
          Favorite Is Empty <TbMoodEmpty />
        </h1>
      )}
    </>
  );
}

export default FavoriteProducts;
