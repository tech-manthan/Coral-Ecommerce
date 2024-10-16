import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { products } from "../../data";
import { ProductCard } from "../../components";

const BestSellers = () => {
  const bestSellingProducts = products.filter(
    (product) => product.status === "best-seller"
  );

  return (
    <div className="container flex flex-col">
      <div className="mt-16 flex flex-col gap-4 max-w-4xl mx-auto">
        <h2 className="text-3xl text-center capitalize">Best sellers</h2>
        <p className="text-justify sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per{" "}
        </p>
      </div>
      <div className="mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellingProducts.map((product) => (
            <SwiperSlide key={product.id} className="">
              <ProductCard
                className={"mx-auto"}
                image={product.image}
                category={product.category}
                price={product.price}
                isHot={product.isHot}
                salePrice={product.salePrice}
                title={product.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
