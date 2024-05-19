function useMinusProductNumber(cartData, setCartData) {
  // Plus Product Number
  function minusProductNum(e, product) {
    e.stopPropagation();

    let currentProductClass = e.target.classList.value;

    // Check To Minus number Of Quantity Product
    function minusAction(product) {
      if (currentProductClass === "minus") {
        return product.quantity - 1;
      }
    }

    // Return target Product
    let sameProduct = cartData.find((item) => {
      return item.id === product.id;
    });

    if (sameProduct) {
      setCartData(
        cartData.map((currentProduct) => {
          return currentProduct.id === sameProduct.id
            ? { ...sameProduct, quantity: minusAction(sameProduct) }
            : currentProduct;
        })
      );
    }
  }
  return [minusProductNum];
}

export default useMinusProductNumber;
