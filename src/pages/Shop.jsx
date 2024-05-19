import { useContext } from "react";
import Footer from "../layout/Footer";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import "../sass/pages/shop-page.css";
import SliderCategory from "../sections/SliderCategory";
import { PopularProductsContext } from "../context/ContextProducts";
import Categories from "../sections/Categories";
import AllProductsContent from "../components/AllProductsContent";
import FilterProductByPrice from "../components/FilterProductByPrice";
import FilteredProducts from "../components/FiltredProducts";
import "../sass/sections/popular-products.css";
import ScrollToTop from "../components/ScrollToTop";
function Shop() {
  const {
    data,
    pricesRange,
    categoriesData,
    filterByCategories,
    showAllProductsByCategories,
  } = useContext(PopularProductsContext);
  return (
    <>
      {/* ========== LayOut ========= */}
      <MainHeader />
      <NavBar />
      <SecondNav />
      <section className="wrapper-shop">
        {/* ========= Section img ========= */}
        <div className="section-img">Shopping Cart</div>
        <SliderCategory />
        {/* ========= Categories Links ========= */}
        <div className="categories-name">
          <h3 onClick={() => showAllProductsByCategories()}>
            Popular Products
          </h3>
          <ul>
            {/*====== show categories nav depend on price range ======*/}
            {pricesRange == null &&
              categoriesData.productData.map((product) =>
                product.items.map((item, i) => (
                  <li
                    key={i}
                    className="p-relative"
                    onClick={(e) => filterByCategories(e.target.innerHTML)}>
                    {item.cat_name}
                  </li>
                ))
              )}
          </ul>
        </div>
        <p className="category-name section-name">All Products</p>
        <div className="shopping-products">
          <div className="all-products">
            {data?.[0]?.[0].products === undefined ? (
              <AllProductsContent data={data} />
            ) : (
              <FilteredProducts data={data} />
            )}

            {/* ========== Show Product sorting By Brice =========== */}
            {pricesRange !== null && <FilterProductByPrice />}
          </div>
          {/* ============= aside Category =========== */}
          <aside>
            <Categories />
          </aside>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Shop;
