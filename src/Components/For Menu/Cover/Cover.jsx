/* eslint-disable react/prop-types */

const Cover = ({img, title}) => {
  return (
    <div>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage:
            `url(${img})`,
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl p-44 text-white backdrop-blur-sm bg-black/30 ">
            <h1 className="mb-5 text-7xl font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
