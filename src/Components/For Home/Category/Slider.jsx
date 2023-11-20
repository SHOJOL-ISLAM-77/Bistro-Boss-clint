import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import Title from "../../../SharedComponents/Title/Title";

const Slider = () => {
  return (
    <section  className='max-w-[1400px] mx-auto'>
      <Title subTitle={"From 11:00am to 10:00pm"} title={"ORDER ONLINE"}/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img className="wf" src={slide1} alt="" />
          <h3 className="text-center text-3xl -mt-12 drop-shadow-md text-white shadow-inherit">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-center text-3xl -mt-12 drop-shadow-md text-white shadow-inherit">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-center text-3xl -mt-12 drop-shadow-md text-white shadow-inherit">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-center text-3xl -mt-12 drop-shadow-md text-white shadow-inherit">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-center text-3xl -mt-12 drop-shadow-md text-white shadow-inherit">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
