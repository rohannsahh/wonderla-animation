import { useState } from "react";

const Wheel = () => {
  const [activeSection, setActiveSection] = useState("land");

  const getCircleStyle = () => {
    switch (activeSection) {
      case "water":
        return {
          left: "8.75rem",  
          top: "13.75rem",  
          background: "conic-gradient(from 0deg, rgb(232, 233, 241) -5deg, rgb(250, 213, 0) 65deg, rgb(250, 213, 0) 115deg, rgb(232, 233, 241) 185deg, rgb(232, 233, 241))",
        };
      case "kids":
        return {
          left: "3.125rem",  
          top: "25.625rem",  
          background: "conic-gradient(from 0deg, rgb(232, 233, 241) 45deg, rgb(250, 213, 0) 115deg, rgb(250, 213, 0) 165deg, rgb(232, 233, 241) 235deg, rgb(232, 233, 241))",
        };
      default: // land
        return {
          left: "2.75rem",   
          top: "1.25rem",   
          background: "conic-gradient(from 0deg, rgb(232, 233, 241) -55deg, rgb(250, 213, 0) 15deg, rgb(250, 213, 0) 65deg, rgb(232, 233, 241) 135deg, rgb(232, 233, 241))",
        };
    }
  };

  return (
    <div className="my-6">
      <div className="relative h-[37.5rem] w-[22.5rem] overflow-visible rounded-lg">
        {/* Wheel  */}
        <div className="absolute right-[5.75rem] top-0 size-[37.5rem] rounded-full" 
          style={{ background: getCircleStyle().background }}>
          <div className="absolute left-[5.625rem] top-[5.625rem] size-[26.25rem] rounded-full" 
               style={{ background: "rgb(34, 48, 74)" }}></div>
        </div>

        {/* Circle */}
        <div className="absolute size-[10rem] rounded-full border-[0.625rem] border-yellow-300 bg-white 
                        transition-all duration-500 ease-in-out"
             style={{ left: getCircleStyle().left, top: getCircleStyle().top }}>
        </div>

        {/* Land */}
        <div className="absolute cursor-pointer transition-all duration-500 right-[12.375rem] top-[4.125rem]"
             onClick={() => setActiveSection("land")}>
          <img src="../../land.svg" alt="land rides"/>
          <div className="absolute left-[calc(100%+4.375rem)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
            <span className="text-2xl inline-block font-mulish font-normal !leading-[1.255]">Land</span>
            <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-violet-600 px-3">73 Rides</span>
          </div>
        </div>

        {/* Water */}
        <div className="absolute cursor-pointer transition-all duration-500 right-[6.875rem] top-1/2 -translate-y-1/2"
             onClick={() => setActiveSection("water")}>
          <img src="../../water.svg" alt="water rides"/>
          <div className="absolute left-[calc(100%+4.375rem)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
            <span className="text-2xl inline-block font-mulish font-normal !leading-[1.255]">Water</span>
            <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-violet-600 px-3">54 Rides</span>
          </div>
        </div>

        {/* Kids */}
        <div className="absolute cursor-pointer transition-all duration-500 bottom-[5rem] right-[12.375rem]"
             onClick={() => setActiveSection("kids")}>
          <img src="../../kids.svg" alt="kids rides"/>
          <div className="absolute left-[calc(100%+4.375rem)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
            <span className="text-2xl inline-block font-mulish font-normal !leading-[1.255]">Kids</span>
            <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-violet-600 px-3">35 Rides</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;