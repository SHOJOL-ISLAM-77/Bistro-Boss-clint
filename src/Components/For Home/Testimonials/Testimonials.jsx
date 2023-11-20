import { useEffect, useState } from "react";
import Title from "../../../SharedComponents/Title/Title";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto">
      <Title title={"Testimonials"} subTitle={"What our client say"} />
      <div className="my-28">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex justify-center items-center mx-20">
                <div className="text-center my-8">
                  <Rating
                    style={{ maxWidth: 180, margin: "auto" }}
                    value={review.rating}
                    readOnly
                  />
                  <FaQuoteLeft className="text-black mx-auto text-13xl my-10" />
                  <p className="text-black">{review.details}</p>
                  <h3 className="text-[#CD9003] text-5xl font-semibold my-10">{review.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

<Rating style={{ maxWidth: 180 }} value={3} readOnly />;
