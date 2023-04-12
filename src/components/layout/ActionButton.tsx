import { SelectedPage } from "@/utils/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ButtonProps {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}
const ActionButton: React.FC<ButtonProps> = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink
      className="bg-yellow-400 px-8 py-2 rounded-md hover:bg-red-300 transition duration-300"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
