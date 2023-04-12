import React, { useState } from "react";

import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SelectedPage } from "@/utils/types";
import ActionButton from "./ActionButton";

interface NavbarProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Navbar: React.FC<NavbarProps> = ({ selectedPage, setSelectedPage }) => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const flexCustom: string = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${flexCustom} fixed top-0 z-40 w-full py-5 `}>
        {/* container */}
        <div className={`${flexCustom} mx-auto w-5/6`}>
          <img src={Logo} alt="Logo" />
          {/* menuitems */}
          <div
            className={`md:flex items-center justify-between gap-8 font-semibold hidden`}
          >
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
          {/* auth parts */}
          <div
            className={`md:flex items-center justify-between gap-6 font-semibold hidden`}
          >
            <p>Sign In</p>
            <ActionButton setSelectedPage={setSelectedPage}>
              Become a member
            </ActionButton>
          </div>
          <button
            className={`${flexCustom} rounded-full bg-yellow-400 p-2 text-black md:hidden`}
            onClick={() => setIsMobileMenu(!isMobileMenu)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu Popup */}
      {isMobileMenu && (
        <div
          className={`fixed right-0 bottom-0 z-50 h-full w-[300px] bg-red-100 drop-shadow-xl rounded-md `}
        >
          <div className="flex justify-end p-8">
            <button onClick={() => setIsMobileMenu(!isMobileMenu)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[10%] flex flex-col gap-8 font-semibold">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
