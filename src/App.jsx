

import { useState } from "react";
import Wheel from "./components/Wheel";
import RideSection from "./components/RideSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("land");

  return (
    <div className="flex items-end h-screen">
      <Wheel 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <RideSection activeSection={activeSection} />
    </div>
  );
};

export default App;
