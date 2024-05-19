import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const CartContainerContext = createContext();

function CartContext({ children }) {
  let [cartData, setCartData] = useState([]);
  let [productNumberInCart, setProductNumberInCart] = useState(0);
  let [favoriteProduct, setFavoriteProduct] = useState([]);

  // Add To Favorite Product
  function addToFavorite(product) {
    let exit = favoriteProduct.find((productInCart) => {
      return productInCart.id === product.id;
    });

    if (exit) {
      toast.error("Product Already Exit In Favorite");
    } else {
      setFavoriteProduct([...favoriteProduct, { ...product, quantity: 1 }]);
      toast.success("Product Added To Cart");
    }
  }

  function addToCart(product) {
    let exit = cartData.find((productInCart) => {
      return productInCart.id === product.id;
    });

    if (exit) {
      toast.error("Product Already Exit In Cart");
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      setProductNumberInCart((number) => (number += 1));

      toast.success("Product Added To Cart");
    }
  }

  return (
    <CartContainerContext.Provider
      value={{
        cartData,
        setCartData,
        addToCart,
        setProductNumberInCart,
        productNumberInCart,
        favoriteProduct,
        setFavoriteProduct,
        addToFavorite,
      }}>
      {children}
      <Toaster />
    </CartContainerContext.Provider>
  );
}

export default CartContext;
