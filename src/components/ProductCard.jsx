/* eslint-disable react/prop-types */

const ProductCard = ({ image, title, category, price, salePrice, isHot }) => {
  return (
    <div className="flex flex-col gap-2 font-secondary relative max-w-72">
      <img className="max-w-72" src={image} alt="" />
      <div className="flex flex-col gap-2 p-2">
        <h4 className="text-base font-medium font-secondary text-Dark">
          {title}
        </h4>
        <div className="flex justify-between items-center font-secondary">
          <span className="text-Dark/50 capitalize">{category}</span>
          <div className="flex items-center gap-2">
            <span
              className={`font-secondary ${
                salePrice ? "text-Dark/50 line-through" : "text-Dark"
              } `}
            >
              $ {price}
            </span>
            {salePrice !== 0 && (
              <span className={`font-secondary text-red-500`}>$ {price}</span>
            )}
          </div>
        </div>
      </div>
      {isHot && (
        <p className="absolute top-6 left-0 bg-red-500 text-white font-medium text-xs px-4 py-1">
          HOT
        </p>
      )}
      {salePrice !== 0 && (
        <p className="absolute top-6 left-0 bg-Black text-white font-medium text-xs px-4 py-1">
          SALE
        </p>
      )}
    </div>
  );
};

export default ProductCard;
