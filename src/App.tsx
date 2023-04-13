import { Navbar } from "@/components";
import { useState } from "react";
import { SelectedPage } from "@/utils/types";
import HomePage from "./components/HomePage";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <HomePage setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
