import { SelectedPage } from "@/utils/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface LinkProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Link: React.FC<LinkProps> = ({ page, selectedPage, setSelectedPage }) => {
  const pageId = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === pageId ? "text-red-400" : ""
      } transition duration-500 hover:text-red-300`}
      href={`#${pageId}`}
      onClick={() => setSelectedPage(pageId)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
