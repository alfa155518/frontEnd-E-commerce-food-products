import ProductContent from "./ProductContent";
function FilteredProducts({ data }) {
  return data?.[0]?.[0]?.products?.map((product) => (
    <ProductContent product={product} key={product.id} />
  ));
}

export default FilteredProducts;
