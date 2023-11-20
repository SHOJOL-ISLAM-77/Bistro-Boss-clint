import Title from "../../../SharedComponents/Title/Title";
import "./style.css";
import img from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="my-[100px] min-h-[700px]">
      <div className=" bg-img bg-fixed">
        <div className="backdrop-blur-md bg-black/50 py-24">
          <Title title={"FROM OUR MENU"} subTitle={"Check It Out"} />
          <div className="flex justify-center items-center pt-12">
            <div className="flex max-w-5xl justify-center items-center gap-11">
              <img className="w-[548px]" src={img} alt="" />
              <div>
                <h3 className=" uppercase text-xl">aug 20 2025</h3>
                <h3 className=" uppercase text-xl">where can i get some .</h3>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic labore aut harum qui molestiae error
                  voluptatibus exercitationem dicta illum, sequi suscipit
                  consequatur et? Ratione deserunt soluta, a beatae amet
                  reiciendis id quidem libero ad ipsam est nisi numquam nam
                  velit voluptas, qui vero recusandae deleniti inventore non
                  facilis consectetur.
                </p>
                <button className="uppercase  w-44 mx-auto py-3 rounded-lg text-[#fff] border-b-4 border-[#c5c4c4] hover:border-none hover:bg-black font-semibold">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
