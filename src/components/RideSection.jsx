/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useEffect, useState } from "react";
import { Card } from "./Card";
import { Landrides } from "../utils/Landrides";
import { Waterrides } from "../utils/Waterrides";
import { Kidsrides } from "../utils/Kidsrides";

const RideSection = ({ activeSection }) => {
  const [rides, setRides] = useState(Landrides);
  const [fade, setFade] = useState(true); 
  const carouselRef = useRef(null);
  const scrollAmount = 264;

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
    
      setRides(
        activeSection === "water"
          ? Waterrides
          : activeSection === "kids"
          ? Kidsrides
          : Landrides
      );
      setFade(true); 
    }, 300);
  }, [activeSection]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += scrollAmount;

        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= scrollAmount;
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += scrollAmount;
  };

  return (
    <div className="ml-16 my-16">
      <div className="flex justify-between">
        <h1 className="text-6xl font-extrabold text-white">Our Iconic Rides</h1>
        <div className="flex mx-5">
          <button
            onClick={scrollLeft}
            className="bg-yellow-300 rounded-full cursor-pointer px-2 py-2 text-5xl font-extrabold mx-2"
          >
            <MdKeyboardArrowLeft className="text-blue-900" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-yellow-300 cursor-pointer rounded-full px-2 py-2 text-5xl font-extrabold mx-2"
          >
            <MdKeyboardArrowRight className="text-blue-900" />
          </button>
        </div>
      </div>

      <div
        className={`my-10 overflow-hidden transform-3d grid grid-flow-col gap-8 overflow-x-auto transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-scroll no-scrollbar"
          style={{
            scrollBehavior: "smooth",
            overflowX: "auto",
            whiteSpace: "nowrap",
            display: "flex",
          }}
        >
          {rides.map((ride, index) => (
            <Card
              key={index}
              title={ride.title}
              location={ride.location}
              description={ride.description}
              videoUrl={ride.videoUrl}
              link={ride.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideSection;
