import HomePageSLider from "../sections/HomePageSLider";
import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import PopularProducts from "../sections/PopularProducts";
import SliderCategory from "../sections/SliderCategory";
import FamousProduct from "../sections/FamousProduct";
import NewsLetter from "../sections/NewsLetter";
import Services from "../sections/Services";
import Footer from "../layout/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <>
      {/* ========== LayOut ============= */}
      <MainHeader />
      <NavBar />
      <SecondNav />
      {/* ============ Slider Section ============ */}
      <HomePageSLider />
      {/* =============== Popular Product Section ================= */}
      <PopularProducts />
      {/* ================ Slider Category Section ================= */}
      <SliderCategory />
      {/* =============== Famous Product Section ================== */}
      <FamousProduct />
      {/* ================ NewsLetter Section ================= */}
      <NewsLetter />
      {/* ================ Services Section ================= */}
      <Services />
      {/* ================ Footer ================= */}
      <Footer />
      {/* ================ Scroll To Top Arrow ================= */}
      <ScrollToTop />
    </>
  );
}

export default Home;
