import { Link } from "react-router-dom";
import { brands, models } from "../../data";

const Category = () => {
  return (
    <div className="container lg:relative pt-16">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8 md:text-4xl xl:text-3xl xl:absolute xl:-rotate-90 xl:w-72 text-center xl:-translate-y-1/2 xl:top-1/2 uppercase -left-8">
          Explore new and popular styles
        </h2>
        <div className=" flex flex-wrap gap-4 items-center justify-center md:justify-around">
          {brands.map((brand) => {
            return (
              <img
                key={brand.id}
                src={brand.src}
                className="h-10 md:h-14 hover:scale-110 transition-[scale] duration-200 cursor-pointer"
                alt=""
              />
            );
          })}
        </div>

        <div className="grid gap-4 xs:grid-cols-2 xs:grid-rows-4 md:grid-cols-4 md:grid-rows-2">
          {models.map((model) => {
            return (
              <Link
                key={model.id}
                to={"/"}
                className={`${
                  model.id == 4 &&
                  "xs:col-start-1 xs:col-end-3 xs:row-start-1 xs:row-end-3"
                } object-cover hover:scale-110 transition-[scale] duration-200`}
              >
                <img src={model.src} className="" alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
