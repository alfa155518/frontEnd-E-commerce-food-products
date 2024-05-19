import { useContext } from "react";
import { PopularProductsContext } from "../context/ContextProducts";
import ProductContent from "../components/ProductContent";
import "../sass/sections/famous-product.css";
function FamousProduct() {
  let { productData } = useContext(PopularProductsContext);
  return (
    <section className="famous-product">
      {productData.productData[0].items.slice(0, 4).map((allProducts, i) => (
        <ul key={i} className="list-items">
          {<li className="category-name">{allProducts.category}</li>}
          {allProducts.products.slice(0, 3).map((product) => (
            <li key={product.id} className="item">
              <ProductContent product={product} key={product.id} />
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
}

export default FamousProduct;
