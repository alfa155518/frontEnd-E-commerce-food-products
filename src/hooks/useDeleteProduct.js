import { useContext } from "react";
import { CartContainerContext } from "../context/CartContext";
import toast from "react-hot-toast";

function useDeleteProduct(cartData, setCartData) {
  const { setProductNumberInCart } = useContext(CartContainerContext);

  function removeProduct(product) {
    toast.success("Product Deleted Done");
    let filteredProduct = cartData.filter((item) => {
      return item.id !== product.id;
    });
    setCartData(filteredProduct);
    setProductNumberInCart((number) => (number -= 1));
  }

  return [removeProduct];
}

export default useDeleteProduct;
