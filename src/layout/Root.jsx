import { Outlet } from "react-router-dom";
import { CompanyFooter, Footer, Navbar } from "../components";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <CompanyFooter />
    </div>
  );
};

export default Root;
