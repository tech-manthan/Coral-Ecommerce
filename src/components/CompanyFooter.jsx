import { PaymentsIcons } from "../../public/images";

const CompanyFooter = () => {
  return (
    <div className="bg-Dark flex flex-col gap-2 xs:gap-4 sm:flex-row-reverse navbar justify-between items-center">
      <img src={PaymentsIcons} className="xs:h-10" alt="" />
      <p className="text-white text-sm ">© 2022 Coral , Inc.</p>
    </div>
  );
};

export default CompanyFooter;
