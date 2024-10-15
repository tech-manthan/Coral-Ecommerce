import { ShoppingBagIcon } from "../../assets/icons";
import { BannerModel, Design1, Design2 } from "../../../public/images";

const Banner = () => {
  return (
    <div className="container pt-20 md:pt-32 bg-Black-5 flex flex-col items-center justify-center md:flex-row-reverse gap-4 md:gap-8 lg:relative">
      <div className="relative max-w-[280px] my-10 ">
        <div className="rounded-tl-[8rem] rounded-br-[8rem] w-full h-[400px] absolute top-4 left-4 border-2 border-Dark/25"></div>
        <img
          src={BannerModel}
          className="scale-x-[-1] rounded-tr-[8rem] rounded-bl-[8rem] w-[280px] h-[400px]"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-6 md:gap-y-10">
        <h1 className="text-5xl sm:text-6xl font-light">Collections</h1>
        <p className="capitalize max-w-96 leading-[32px]">
          you can explore and shop many differnt collection from various barands
          here.
        </p>
        <button className="flex items-center gap-x-4 px-5 py-3 bg-Black w-fit text-white">
          <ShoppingBagIcon className="text-xl" />
          <span className="self-center text-lg">Shop Now</span>
        </button>
      </div>
      <img
        src={Design1}
        className="hidden lg:block absolute right-0 top-1/2"
        alt=""
      />
      <img
        src={Design2}
        className="hidden lg:block absolute left-0 bottom-1/2"
        alt=""
      />
    </div>
  );
};

export default Banner;
