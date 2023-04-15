import { SelectedPage } from "@/utils/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
interface BenefitsCradProps {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const BenefitCard: React.FC<BenefitsCradProps> = ({
  icon,
  title,
  description,
  setSelectedPage,
}) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounder-full border-2 border-gray-100 bg-red-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="font-semibold underline text-red-400 hover:text-black ms-5"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href="#contactus"
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default BenefitCard;
