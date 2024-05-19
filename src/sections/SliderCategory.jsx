// All Slider Img
import slide_1 from "../images/slide-1.png";
import slide_2 from "../images/slide-2.png";
import slide_3 from "../images/slide-3.png";
import slide_4 from "../images/slide-4.png";
import slide_5 from "../images/slide-5.png";
import slide_6 from "../images/slide-6.png";
import slide_7 from "../images/slide-7.png";
import slide_8 from "../images/slide-8.png";
import slide_9 from "../images/slide-9.png";
import slide_10 from "../images/slide-10.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import Sass File
import "../sass/sections/slider-category.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";
function SliderCategory() {
  return (
    <section className="slider-categories">
      {window.location.pathname === "/e-commerce-food/shop" ? (
        ""
      ) : (
        <h2 className="section-name category-name">
          Shop By Slider Categories
        </h2>
      )}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper">
        <SwiperSlide>
          <img src={slide_1} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_4} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_5} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_6} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_7} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_8} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_9} alt="slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_10} alt="slide-img" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SliderCategory;
