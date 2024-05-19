import { useContext } from "react";
import Products from "../components/Products";
import { PopularProductsContext } from "../context/ContextProducts";
import "../sass/sections/popular-products.css";
import Categories from "./Categories";
function PopularProducts() {
  const {
    categoriesData,
    filterByCategories,
    showAllProductsByCategories,
    pricesRange,
  } = useContext(PopularProductsContext);

  return (
    <section className="container-section">
      {/* ========= Categories Links ========= */}
      <div className="categories-name">
        <h3 onClick={() => showAllProductsByCategories()}>Popular Products</h3>
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
      {/* ========= All Products ========= */}
      <div className="popular-products-container">
        <Products />
        <Categories />
      </div>
    </section>
  );
}

export default PopularProducts;
