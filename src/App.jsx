

import { useState } from "react";
import Wheel from "./components/Wheel";
import RideSection from "./components/RideSection";
import Navbar from "./components/Navbar";

const App = () => {
  const [activeSection, setActiveSection] = useState("land");

  return (
    <>
    <Navbar/>
    <div className="flex items-end h-screen">
      <Wheel 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <RideSection activeSection={activeSection} />
    </div>
    </>
  );
};

export default App;
