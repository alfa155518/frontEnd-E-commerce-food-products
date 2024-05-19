import { useContext } from "react";
import { CartContainerContext } from "../context/CartContext";

import { Toaster } from "react-hot-toast";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";
import "../sass/pages/cart-page.css";
import TableCart from "../components/TableCart";

function CartPage() {
  let { cartData } = useContext(CartContainerContext);

  return (
    <>
      {/* ============== LayOut ========== */}
      <MainHeader />
      <NavBar />
      <SecondNav />
      {/* ======== section img ========= */}
      <div className="section-img">Product In Cart Page</div>
      <TableCart cartData={cartData} />
      {/* ======= Toaster Alert ======== */}
      <Toaster />
      <Footer />
    </>
  );
}

export default CartPage;
