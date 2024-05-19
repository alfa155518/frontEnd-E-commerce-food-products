import { useContext } from "react";
import { PopularProductsContext } from "../context/ContextProducts";
import ProductContent from "./ProductContent";

function FilterProductByPrice() {
  let { data, pricesRange } = useContext(PopularProductsContext);

  // Show Filtered Products By Pricing
  return (
    pricesRange !== null &&
    data?.[0]?.map((allProducts) =>
      allProducts.map((product) => (
        <ProductContent product={product} key={product.id} />
      ))
    )
  );
}

export default FilterProductByPrice;
