import { ContactUs, Navbar, OurClasses } from "@/components";
import { useState } from "react";
import { SelectedPage } from "@/utils/types";
import { HomePage, Benefits } from "@/components";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <HomePage setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
