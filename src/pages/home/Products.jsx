import { useMemo, useState } from "react";
import { FilterIcon } from "../../assets/icons";
import { products } from "../../data";
import { ProductCard } from "../../components";

const Products = () => {
  const [filter, setFilter] = useState("no");
  const [category, setCategory] = useState("all");

  const selectedProducts = useMemo(() => {
    let productsSelected = [...products];
    if (category !== "all") {
      productsSelected = products.filter(
        (product) => product.category == category
      );
    }

    if (filter == "l-h") {
      return sortProductsByPrice(productsSelected);
    } else if (filter == "h-l") {
      return sortProductsByPrice(productsSelected).reverse();
    } else if (filter == "a-z") {
      return sortProductsAlphabetically(productsSelected);
    } else if (filter == "z-a") {
      return sortProductsAlphabetically(productsSelected).reverse();
    } else if (filter == "no") {
      return productsSelected;
    }
  }, [category, filter]);

  function sortProductsByPrice(products) {
    return products.sort((a, b) => {
      const priceA = a.salePrice > 0 ? a.salePrice : a.price;
      const priceB = b.salePrice > 0 ? b.salePrice : b.price;

      return priceA - priceB;
    });
  }

  function sortProductsAlphabetically(products) {
    return products.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  return (
    <div className="container">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl text-center capitalize">
          Or subscribe to the newsletter
        </h2>

        <div className="flex text-Dark/50 justify-between items-center flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <button
              className={`text-sm md:text-base ${
                category === "all" && "text-Dark"
              }`}
              onClick={() => setCategory("all")}
            >
              All Products
            </button>
            <button
              className={`text-sm md:text-base ${
                category === "t-shirts" && "text-black"
              }`}
              onClick={() => setCategory("tshirt")}
            >
              T-Shirt
            </button>
            <button
              className={`text-sm md:text-base ${
                category === "hoodie" && "text-black"
              }`}
              onClick={() => setCategory("hoodie")}
            >
              Hoodies
            </button>
            <button
              className={`text-sm md:text-base ${
                category === "bag" && "text-black"
              }`}
              onClick={() => setCategory("bag")}
            >
              Bag
            </button>
          </div>

          <div>
            <button className="flex justify-center items-center gap-2 bg-black text-white px-4 py-1 rounded-sm">
              <FilterIcon className="w-4 h-4" />
              <select
                defaultValue={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="outline-none selection:border-none bg-black"
              >
                <option value="no">Filter</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <option value="l-h">Low to High</option>
                <option value="h-l">High to Low</option>
              </select>
            </button>
          </div>
        </div>

        <div className="mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {selectedProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              price={product.price}
              title={product.title}
              isHot={product.isHot}
              salePrice={product.salePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
