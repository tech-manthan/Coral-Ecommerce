import { imagePaths } from "../../constants";

const Collection = () => {
  return (
    <div
      className={`container bg-[url('/images/zara-cover.jpg')] bg-cover bg-[40%] relative flex items-end xs:justify-end h-screen`}
    >
      <img
        src={imagePaths.zaraOne}
        alt=""
        className="absolute top-5 right-0 w-64 sm:w-80 md:w-96"
      />
      <div className="text-white xs:w-[400px]">
        <img src={imagePaths.zaraTwo} alt="" className="w-32 mb-4" />
        <p className="text-xl text-justify font-light mb-6">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <button className="bg-white text-Dark px-4 py-2 hover:opacity-90">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default Collection;
