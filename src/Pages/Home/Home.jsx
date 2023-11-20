import Banner from "../../Components/For Home/Banner";
import BistroBoss from "../../Components/For Home/BistroBoss/BistroBoss";
import Slider from "../../Components/For Home/Category/Slider";
import ChefRecommend from "../../Components/For Home/ChefRecomment/ChefRecomment";
import Featured from "../../Components/For Home/Featured/Featured";
import FromOurMenu from "../../Components/For Home/FromOurMenu/FromOurMenu";
import Testimonials from "../../Components/For Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <BistroBoss />
      <FromOurMenu />
      <div className="max-w-[1400px] mx-auto text-center bg-black box-border py-24 mb-14">
        <a href="tel:+88 0192345678910" className="text-8xl font-semibold ">
          Call Us: +88 0192345678910
        </a>
      </div>
      <ChefRecommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
