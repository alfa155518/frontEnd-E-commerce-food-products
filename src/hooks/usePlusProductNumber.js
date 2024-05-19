function usePlusProductNumber(cartData, setCartData) {
  // Plus Product Number
  function plusProductNum(e, product) {
    e.stopPropagation();

    let currentProductClass = e.target.classList.value;

    // Check To Plus number Of Quantity Product
    function plusAction(product) {
      if (currentProductClass === "plus") {
        return product.quantity + 1;
      }
    }

    // Return target Product
    let sameProduct = cartData.find((item) => {
      return item.id === product.id;
    });
    // Check if It target Product To Increase It
    if (sameProduct) {
      setCartData(
        cartData.map((currentProduct) => {
          return currentProduct.id === sameProduct.id
            ? { ...sameProduct, quantity: plusAction(sameProduct) }
            : currentProduct;
        })
      );
    }
  }

  return [plusProductNum];
}

export default usePlusProductNumber;
