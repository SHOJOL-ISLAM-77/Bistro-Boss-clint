import { Outlet } from "react-router-dom";
import Footer from "../../SharedComponents/Title/Footer";
import Navbar from "../../SharedComponents/Title/Navbar";

const Main = () => {
  return (
    <div>
      <div className="z-50 fixed w-full">
        <Navbar />
      </div>
      <div className="z-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
