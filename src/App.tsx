import { Navbar } from "@/components";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
