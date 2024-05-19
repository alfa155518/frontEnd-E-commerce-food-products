import { createContext, useState } from "react";
import productData from "../data/db.json";

export const PopularProductsContext = createContext();
function ContextProducts({ children }) {
  // all Data
  const [containerData] = useState(productData);
  // All Product Data
  const [data, setData] = useState(...[productData]);
  // Categories Data
  const [categoriesData] = useState(...[productData]);
  // State Of Product Information
  const [productInfo, setProductInfo] = useState("");

  let [pricesRange, setPricesRange] = useState(null);

  // Show Filtered Products
  function filterByCategories(categoryName) {
    let filteredData = containerData.productData.map((items) =>
      items.items.filter((allProducts) => allProducts.cat_name === categoryName)
    );
    // Set Filtered Data
    setData(filteredData);
  }

  // Show All Popular Products
  function showAllProductsByCategories() {
    // To reset Price
    setPricesRange(null);
    setData(containerData);
  }

  // Show Products By Range Price
  function showProductsByPrice(price) {
    let filteredByPrice = containerData.productData.map((allItems) =>
      allItems.items.map((allProducts) =>
        allProducts.products.filter(
          (prices) => prices.price === price.toString()
        )
      )
    );
    setPricesRange(price);
    setData(filteredByPrice);
  }

  // Show Info About Product
  function getProductInfo(product) {
    setProductInfo(product);
  }

  return (
    <PopularProductsContext.Provider
      value={{
        data,
        categoriesData,
        setData,
        filterByCategories,
        showAllProductsByCategories,
        showProductsByPrice,
        pricesRange,
        setPricesRange,
        productData,
        getProductInfo,
        productInfo,
        containerData,
      }}>
      {children}
    </PopularProductsContext.Provider>
  );
}

export default ContextProducts;
