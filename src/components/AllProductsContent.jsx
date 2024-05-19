import ProductContent from "./ProductContent";

function AllProductsContent({ data }) {
  // Show All Popular Products
  return data.productData?.map((allItems) =>
    allItems?.items?.map((allProducts) =>
      allProducts?.products?.map((product) => (
        <ProductContent product={product} key={product.id} />
      ))
    )
  );
}

export default AllProductsContent;
