import {
  DiamondIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../assets/icons";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10">
        <div className="flex flex-col gap-4  cursor-pointer">
          <div className="flex  items-center gap-2">
            <DiamondIcon />
            <p className="font-logo text-[1.25rem] font-medium">CORAL</p>
            <DiamondIcon />
          </div>
          <p className="text-Dark/50 sm:w-56 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex items-center gap-x-4 text-xl">
            <FacebookIcon className="cursor-pointer" />
            <TwitterIcon className="cursor-pointer" />
            <InstagramIcon className="cursor-pointer" />
            <LinkedinIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">CATALOG</h4>
          <ul className="text-Dark/50 space-y-1">
            <li>Necklaces</li>
            <li>Hoodies</li>
            <li>Jewelry Box</li>
            <li>T-Shirt</li>
            <li>Jacket</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">ABOUT US</h4>
          <ul className="text-Dark/50 space-y-1">
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">CUSTOMER SERVICES</h4>
          <ul className=" text-Dark/50 space-y-1">
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book an Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
