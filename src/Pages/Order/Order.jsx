import { useState } from "react";
import Cover from "../../Components/For Menu/Cover/Cover";
import imgBg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFetch from "../../Hooks/useFetch";
import FoodCard from "../../SharedComponents/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useFetch();
  // const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drink = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={imgBg} title={"OUR SHOP"} />

      <div className="mx-auto max-w-[1400px] my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="mx-auto max-w-md">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 my-16">
              {salad?.map((menu) => (
                <FoodCard key={menu._id} menu={menu} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 my-16">
              {pizza?.map((menu) => (
                <FoodCard key={menu._id} menu={menu} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 my-16">
              {soup?.map((menu) => (
                <FoodCard key={menu._id} menu={menu} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 my-16">
              {dessert?.map((menu) => (
                <FoodCard key={menu._id} menu={menu} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 my-16">
              {drink?.map((menu) => (
                <FoodCard key={menu._id} menu={menu} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
