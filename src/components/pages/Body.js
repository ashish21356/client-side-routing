import Herader from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Herader />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Body;
