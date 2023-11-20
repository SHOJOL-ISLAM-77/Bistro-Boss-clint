import FoodCard from "../../../SharedComponents/FoodCard";
import Title from "../../../SharedComponents/Title/Title";
import { useEffect, useState } from "react";

const ChefRecommend = () => {
  const [recommendMenu, setRecommendMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setRecommendMenu(data);
      });
  }, []);
  return (
    <div className="mb-24 max-w-[1400px] mx-auto">
      <Title title={"CHEF RECOMMENDS"} subTitle={"Should Try "} />
      <div className="grid grid-cols-3 my-16">
        {recommendMenu?.slice(0, 3).map((menu) => (
          <FoodCard key={menu._id} menu={menu}/>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
