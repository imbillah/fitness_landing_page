import React from "react";
import {
  HomePageText,
  HomePgaeGraphic,
  SponsorForbes,
  SponsorRedBull,
  SponsorFortune,
} from "@/assets";
import { SelectedPage } from "@/utils/types";
import ActionButton from "./layout/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

interface HomePageProps {
  setSelectedPage: (value: SelectedPage) => void;
}
const HomePage: React.FC<HomePageProps> = ({ setSelectedPage }) => {
  return (
    <section id="home" className="gap-14  py-10 md:h-full mt-20">
      {/* header , subtittle & action buttons */}
      <div className="md:flex items-center mx-auto w-5/6 ">
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <img src={HomePageText} alt="home_page_text" />
          </div>
          <div className="my-5 text-[18px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quidem eveniet eos sapiente deserunt doloribus temporibus? Id amet
              fuga hic voluptatem non corporis commodi quia!
            </p>
          </div>
          <div className="flex items-center">
            <ActionButton setSelectedPage={setSelectedPage}>
              <p className="font-bold">Join Now</p>
            </ActionButton>
            <AnchorLink
              className="font-semibold underline text-red-400 hover:text-black ms-5"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href="#contactus"
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </motion.div>
        {/* Right Image */}
        <div className="flex-1">
          <img src={HomePgaeGraphic} alt="homepage_graphic" />
        </div>
      </div>
      {/* sponsors */}
      <div className="hidden md:block h-[100px] w-full bg-red-100 mt-10">
        <div className="flex items-center justify-between w-5/6 m-auto py-5">
          <img src={SponsorRedBull} alt="sponsor_redbull" />
          <img src={SponsorForbes} alt="SponsorForbes" />
          <img src={SponsorFortune} alt="sSponsorFortune" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
