import { followImages } from "../../data";

const NewsLetter = () => {
  return (
    <div className="container bg-Black-5">
      <div className="mt-10 flex flex-col gap-6 max-w-5xl mx-auto">
        <h2 className="text-3xl  text-center capitalize">
          Follow products and discounts on Instagram
        </h2>
        <div className="lg:mt-4 flex flex-wrap gap-4 items-center justify-center ">
          {followImages.map((follow) => (
            <img
              key={follow.id}
              src={follow.image}
              className="w-36 border border-Dark/50"
            />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-6 max-w-5xl mx-auto justify-center items-center">
        <h2 className="text-3xl  text-center capitalize">
          Or subscribe to the newsletter
        </h2>
        <div className="lg:mt-4 flex flex-col gap-4 sm:flex-row justify-center items-center w-[250px] xs:w-[300px] sm:w-[440px] mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="outline-none  bg-transparent  border-b border-Black/50 focus:border-Black w-full"
          />
          <button className="px-4 py-2 bg-Black text-white hover:opacity-90 w-fit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
