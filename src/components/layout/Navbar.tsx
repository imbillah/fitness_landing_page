import React from "react";

import Logo from "@/assets/Logo.png";
import Link from "./Link";

interface NavbarProps {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ selectedPage, setSelectedPage }) => {
  const flexCustom: string = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexCustom} fixed top-0 z-40 w-full py-5`}>
        <div className={`${flexCustom} mx-auto w-5/6`}>
          <div className={`${flexCustom} w-full gap-16`}>
            {/* Logo section */}
            <img src={Logo} alt="Logo" />
            {/* Right parts */}
            <div className={`${flexCustom} w-full`}>
              {/* menu items */}
              <div className={`${flexCustom} gap-8 font-semibold`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Plans"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* Auth parts */}
              <div className={`${flexCustom} gap-8 font-semibold`}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
