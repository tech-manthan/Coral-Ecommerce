import { Link } from "react-router-dom";
import {
  Bars,
  CategoryIcon,
  Cross,
  DiamondIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "../assets/icons";
import { useState } from "react";

const categoryItems = [
  {
    title: "Jewelry & Accessories",
    path: "/products",
  },
  {
    title: "Clothing & Shoes",
    path: "/products",
  },
  {
    title: "Home & Living",
    path: "/products",
  },
  {
    title: "Wedding & Party",
    path: "/products",
  },
  {
    title: "Toys & Entertainment",
    path: "/products",
  },

  {
    title: "Art & Collectibles",
    path: "/products",
  },
  {
    title: "Craft Supplies & Tools",
    path: "/products",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  function handleNavbar() {
    setOpen((value) => !value);
    setCategoriesOpen(false);
  }
  return (
    <header className="relative">
      <nav className="navbar bg-white/50 backdrop-blur-sm flex flex-col gap-4 z-50 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <SearchIcon className="text-lg text-Black hidden sm:block" />
          <div className="flex justify-between items-center gap-2 lg:ml-32">
            <DiamondIcon />
            <p className="font-logo text-[1.25rem] lg:text-[1.75rem] font-medium">
              CORAL
            </p>
            <DiamondIcon />
          </div>
          <div className="hidden lg:flex items-center gap-x-6">
            <Link
              to={"/account"}
              className="flex items-center gap-x-2 text-lg text-Black"
            >
              <UserIcon className="text-lg" />
              <span className="">Account</span>
            </Link>
            <Link
              to={"/cart"}
              className="flex items-center gap-x-2 text-lg text-Black"
            >
              <ShoppingBagIcon className="text-lg" />
              <span className="">Shopping</span>
            </Link>
          </div>

          <button onClick={handleNavbar} className="lg:hidden">
            <Bars className="text-lg" />
          </button>
        </div>
        <hr className="hidden lg:block w-full bg-Stroke" />
        <div className="hidden lg:flex justify-between items-center">
          {categoryItems.map((category) => (
            <Link
              className="text-sm font-secondary"
              to={category.path}
              key={category.title}
            >
              {category.title}
            </Link>
          ))}
        </div>

        <div
          className={`absolute w-80 bg-white/95 min-h-screen top-0 shadow-md ${
            open ? "right-0" : "-right-80"
          }  p-4 transition-[right] duration-300 z-50 lg:hidden `}
        >
          <button className="absolute top-4 right-4" onClick={handleNavbar}>
            <Cross className="w-8 h-8" />
          </button>

          <div className="mt-12 flex flex-col gap-y-4">
            <Link
              to={"/account"}
              className="flex items-center gap-x-4 text-xl text-Black hover:bg-Black/15 rounded-md px-2 py-2"
            >
              <UserIcon className="text-lg" />
              <span className="">Account</span>
            </Link>
            <Link
              to={"/cart"}
              className="flex items-center gap-x-4 text-xl text-Black hover:bg-Black/15 rounded-md px-2 py-2"
            >
              <ShoppingBagIcon className="text-lg" />
              <span className="">Shopping</span>
            </Link>
            <div>
              <button
                className="flex items-center gap-x-4 text-xl text-Black hover:bg-Black/15 rounded-md px-2 py-2 w-full"
                onClick={() => setCategoriesOpen((value) => !value)}
              >
                <CategoryIcon className="text-xl" />
                <span className="">Categories</span>
              </button>

              <div
                className={`mt-4 ml-6 ${
                  categoriesOpen ? "flex" : "hidden"
                } flex-col gap-y-1`}
              >
                {categoryItems.map((category) => (
                  <Link
                    to={category.path}
                    key={category.title}
                    className="text-Black hover:bg-Black/10 px-2 py-1 rounded-sm"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
