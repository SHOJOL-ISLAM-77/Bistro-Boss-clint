import Cover from "../../Components/For Menu/Cover/Cover";
import useFetch from "../../Hooks/useFetch";
import HelmetTitle from "../../SharedComponents/Title/HelmetTitle";
import MenuItem from "../../SharedComponents/Title/MenuItem";
import Title from "../../SharedComponents/Title/Title";

import bannerImg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
  const [menu] = useFetch();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <HelmetTitle title={"Menu"} />
      <div>
        <Cover title={"OUR MENU"} img={bannerImg} />
        <div className="my-24">
          <Title title={"today's offer"} subTitle={"Don't miss"} />

          <div className="my-12 grid lg:grid-cols-2 gap-14 max-w-[1400px] mx-auto">
            {offered.map((Item) => (
              <MenuItem key={Item._id} item={Item} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Cover title={"DESSERTS"} img={dessertBg} />
        <div className="my-24">
          <div className="my-12 grid lg:grid-cols-2 gap-14 max-w-[1400px] mx-auto">
            {dessert.map((Item) => (
              <MenuItem key={Item._id} item={Item} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Cover title={"PIZZA"} img={pizzaBg} />
        <div className="my-24">
          <div className="my-12 grid lg:grid-cols-2 gap-14 max-w-[1400px] mx-auto">
            {pizza.map((Item) => (
              <MenuItem key={Item._id} item={Item} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Cover title={"SALADS"} img={saladBg} />
        <div className="my-24">
          <div className="my-12 grid lg:grid-cols-2 gap-14 max-w-[1400px] mx-auto">
            {salad.map((Item) => (
              <MenuItem key={Item._id} item={Item} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <Cover title={"SOUPS"} img={soupBg} />
        <div className="my-24">
          <div className="my-12 grid lg:grid-cols-2 gap-14 max-w-[1400px] mx-auto">
            {soup.map((Item) => (
              <MenuItem key={Item._id} item={Item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
