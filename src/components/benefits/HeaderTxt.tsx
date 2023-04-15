import React from "react";

interface HeaderTextProps {
  children: React.ReactNode;
}
const HeaderTxt: React.FC<HeaderTextProps> = ({ children }) => {
  return (
    <h1 className="basis-3/5 text-3xl font-bold uppercase text-[#5D0000]">
      {children}
    </h1>
  );
};

export default HeaderTxt;
