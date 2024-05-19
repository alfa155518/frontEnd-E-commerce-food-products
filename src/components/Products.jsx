import { useContext } from "react";
import { PopularProductsContext } from "../context/ContextProducts";

import "../sass/components/products.css";
import AllProductsContent from "./AllProductsContent";
import FilteredProducts from "./FiltredProducts";
import FilterProductByPrice from "./FilterProductByPrice";

function Products() {
  const { data, pricesRange } = useContext(PopularProductsContext);

  return (
    <>
      <div className="all-products">
        {data?.[0]?.[0].products === undefined ? (
          <AllProductsContent data={data} />
        ) : (
          <FilteredProducts data={data} />
        )}

        {/* ========== Show Product sorting By Brice =========== */}
        {pricesRange !== null && <FilterProductByPrice />}
      </div>
    </>
  );
}

export default Products;
