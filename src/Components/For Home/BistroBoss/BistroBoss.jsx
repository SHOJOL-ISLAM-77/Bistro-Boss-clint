import img from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={backgroundImageStyle} className="box-border p-28 max-w-[1400px] font-Inter mx-auto">
      <div className="px-28 py-24 bg-white text-black text-center">
        <h2 className="text-7xl mb-7">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
