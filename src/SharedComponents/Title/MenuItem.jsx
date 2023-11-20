/* eslint-disable react/prop-types */


const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex gap-6">
      <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
      <div>
        <h3 className="text-2xl">{name} --------------</h3>
         <p>{recipe}</p>
      </div>
      <p className="flex-grow">${price}</p>
    </div>
  );
};

export default MenuItem;
