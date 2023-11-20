import Title from "../../../SharedComponents/Title/Title";
import MenuItem from "../../../SharedComponents/Title/MenuItem";
import useFetch from "../../../Hooks/useFetch";

const FromOurMenu = () => {
  const [menu] = useFetch()
  const filter = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-28 max-w-[1400px] mx-auto">
      <Title subTitle={"Check it out"} title={"FROM OUR MENU"} />
      <div className="my-12 grid lg:grid-cols-2 gap-14">
        {filter.map((Item) => (
          <MenuItem key={Item._id} item={Item} />
        ))}
      </div>
    </div>
  );
};

export default FromOurMenu;
