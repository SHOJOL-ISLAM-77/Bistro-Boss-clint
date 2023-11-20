/* eslint-disable react/prop-types */

const FoodCard = ({ menu }) => {
  return (
    <div className="bg-[#F3F3F3] max-w-[374px] mx-auto relative ">
      <img
        className="object-cover w-[374px] h-[250px]"
        src={menu?.image}
        alt=""
      />

      <div className="text-black flex flex-col space-y-4 text-center py-4 px-2">
        <h3 className="text-3xl font-semibold">{menu?.name}</h3>
        <p>{menu?.recipe}</p>
        <button className="uppercase bg-gray-50 w-44 mx-auto py-3 rounded-lg text-[#BB8506] border-b-4 border-[#BB8506] hover:border-none hover:bg-black font-semibold">
          Add to cart
        </button>
      </div>
        <p className="text-white bg-black absolute top-5 right-5 px-4 py-2 rounded-lg">$ {menu?.price}</p>
    </div>
  );
};

export default FoodCard;
