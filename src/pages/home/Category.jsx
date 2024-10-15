import {
  BrandFive,
  BrandFour,
  BrandOne,
  BrandThree,
  BrandTwo,
  ModelFive,
  ModelFour,
  ModelOne,
  ModelThree,
  ModelTwo,
} from "../../assets/images";

const Category = () => {
  return (
    <div className="container lg:relative pt-16 ">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8 md:text-4xl xl:text-3xl xl:absolute xl:-rotate-90 xl:w-72 text-center xl:-translate-y-1/2 xl:top-1/2 uppercase -left-8">
          Explore new and popular styles
        </h2>
        <div className=" flex flex-wrap gap-4 items-center justify-center md:justify-around">
          <img src={BrandOne} className="h-10 md:h-14" alt="" />
          <img src={BrandThree} className="h-10 md:h-14" alt="" />
          <img src={BrandFour} className="h-10 md:h-14" alt="" />
          <img src={BrandFive} className="h-10 md:h-14" alt="" />
          <img src={BrandTwo} className="h-10 md:h-14" alt="" />
        </div>

        <div className="grid gap-4 xs:grid-cols-2 xs:grid-rows-4 md:grid-cols-4 md:grid-rows-2">
          <img
            src={ModelFour}
            className="xs:col-start-1 xs:col-end-3 xs:row-start-1 xs:row-end-3 object-cover"
            alt=""
          />
          <img src={ModelOne} alt="" />
          <img src={ModelTwo} alt="" />
          <img src={ModelThree} alt="" />
          <img src={ModelFive} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
