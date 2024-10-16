import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
