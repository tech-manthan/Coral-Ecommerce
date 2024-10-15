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

const brands = [
  {
    id: 1,
    src: BrandOne,
  },
  {
    id: 3,
    src: BrandThree,
  },
  {
    id: 4,
    src: BrandFour,
  },
  {
    id: 5,
    src: BrandFive,
  },
  {
    id: 2,
    src: BrandTwo,
  },
];

const models = [
  {
    id: 4,
    src: ModelFour,
  },
  {
    id: 1,
    src: ModelOne,
  },
  {
    id: 2,
    src: ModelTwo,
  },

  {
    id: 3,
    src: ModelThree,
  },
  {
    id: 4,
    src: ModelFour,
  },
];

const Category = () => {
  return (
    <div className="container lg:relative pt-16">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8 md:text-4xl xl:text-3xl xl:absolute xl:-rotate-90 xl:w-72 text-center xl:-translate-y-1/2 xl:top-1/2 uppercase -left-8">
          Explore new and popular styles
        </h2>
        <div className=" flex flex-wrap gap-4 items-center justify-center md:justify-around">
          {brands.map((brand) => {
            return (
              <img
                key={brand.id}
                src={brand.src}
                className="h-10 md:h-14"
                alt=""
              />
            );
          })}
        </div>

        <div className="grid gap-4 xs:grid-cols-2 xs:grid-rows-4 md:grid-cols-4 md:grid-rows-2">
          {models.map((model) => {
            return (
              <img
                key={model.id}
                src={model.src}
                className={`${
                  model.id == 4 &&
                  "xs:col-start-1 xs:col-end-3 xs:row-start-1 xs:row-end-3"
                } object-cover`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
