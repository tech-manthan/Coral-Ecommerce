import { Link } from "react-router-dom";
import { imagePaths } from "../../constants";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-Black-5 h-screen">
      <img src={imagePaths.notFoundImage} alt="" />
      <Link
        to={"/"}
        className="mt-4 px-4 py-2 bg-Dark text-white rounded-sm hover:opacity-90"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
