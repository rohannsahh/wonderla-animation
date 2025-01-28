/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useEffect } from "react";


const Card = ({ title, location, description, videoUrl, link }) => {
    return (
      <div className="relative h-[394px] w-[229px] overflow-hidden rounded-t-[26px] lg:h-[346px] lg:min-w-[246px] lg:rounded-t-[22px]">
        <div className="aspect-[229/394] w-[229px] lg:aspect-[246/346] lg:w-[246px]">
          <video
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="aspect-[229/394] w-full object-cover lg:aspect-[246/346]"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(51,77,207,0)_42.94%,_#334DCF_100%)] lg:bg-[linear-gradient(180deg,_rgba(34,48,74,0)_34.08%,_#22304A_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(51,77,207,0)_50%,_#334DCF_100%)] lg:bg-[linear-gradient(180deg,_rgba(34,48,74,0)_34.08%,_#22304A_100%)]"></div>
        <div className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(180deg,_rgba(245,245,245,0)_34.08%,_#F5F5F501_100%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col px-3 pb-2.5 text-white lg:pb-1">
          <h3 className="text-xl font-mulish capitalize !leading-[1.255] font-bold">
            {title}
          </h3>
          <p className="text-sm inline-block  font-normal !leading-[1.255] mt-px opacity-80">
            {location}
          </p>
          <div className="mt-1.5 line-clamp-4 text-sm leading-[1.255]">
            {description}
          </div>
          <a className="inline-block w-full max-w-[150px]" href={link}>
            <div
              className="h-10 w-full max-w-[150px] rounded-lg text-sm font-black uppercase leading-tight flex items-center justify-center text-blue-800 bg-yellow-300 mt-2"
              tabIndex="0"
            >
              Ride Details
            </div>
          </a>
        </div>
      </div>
    );
  };
  


const RideSection = () => {

        const carouselRef = useRef(null);
        const scrollAmount = 264;
      
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
        
      
    }

    const rides = [
        {
          title: "Recoil",
          location: "Bengaluru",
          description: "India’s first-ever action-packed reverse looping roller coaster ride!",
          videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Recoil_480p_dd3c781929.mp4",
          link: "/bengaluru/rides/recoil",
        },
        {
          title: "Sky Screamer",
          location: "Hyderabad",
          description: "Experience the thrill of sky-high adventure in this iconic ride.",
          videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Sky_Ring_480p_1749236cd3.mp4",
          link: "/hyderabad/rides/sky-screamer",
        },
        {
          title: "Twister",
          location: "Mumbai",
          description: "A high-speed, spinning coaster that will leave you breathless!",
          videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Mission_Interstellar_480p_5d8cb5e5aa.mp4",
          link: "/mumbai/rides/twister",
        },
        {
            title: "Sky Ring",
            location: "Kochi",
            description: "Shoot up a sky-high tower for a birds-eye view of Wonderla Kochi!",
            videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Equinox_480p_bafc65400f.mp4",
            link: "/mumbai/rides/twister",
          },
          {
            title: "Mission Interstellar",
            location: "Hyderabad",
            description: "Blast through cosmic chaos on a wild, out-of-this-world space ride!",
            videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Space_Gun_480p_a91b755b34.mp4",
            link: "/mumbai/rides/twister",
          },
          {
            title: "Equinox",
            location: "Bhubaneswar",
            description: "A thrill monster that flips you around 360 degrees in a gravity-defying spin.",
            videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Y_Scream_480p_0a746cad75.mp4",
            link: "/mumbai/rides/twister",
          },
          {
            title: "Space Gun",
            location: "Kochi",
            description: "See the world upside-down, dangling from high up above the ground!",
            videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/G_Fall_480p_54a0131d48.mp4",
            link: "/mumbai/rides/twister",
          }, 


          {
            title: "Y-Scream",
            location: "Bengaluru",
            description: "Strap in tight to swing, spin and scream on this dizzying 360-degree thrill fest!",
            videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Air_Race_480p_5d9fb9b2f6.mp4",
            link: "/mumbai/rides/twister",
          },
          {
            title: "G Fall",
            location: "Hyderabad",
            description: "Brace yourself for a heart-pounding, high-speed plunge into a dizzying freefall!",
            videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Maverick_480p_993d94b2c8.mp4",
            link: "/mumbai/rides/twister",
          }, 
           
      ];

      
  return (
    <div className="ml-16 my-16">
        <div className="flex justify-between">
      <h1 className="text-6xl font-extrabold text-white">Our Iconic Rides</h1>
      <div className="flex mx-5 ">
        <button onClick={scrollLeft}
        className="bg-yellow-300 rounded-full cursor-pointer px-2 py-2 text-5xl font-extrabold mx-2"><MdKeyboardArrowLeft className="text-blue-900"/></button>
       <button onClick={scrollRight} className="bg-yellow-300 cursor-pointer rounded-full px-2 py-2 text-5xl font-extrabold mx-2"><MdKeyboardArrowRight className="text-blue-900" /></button>
      </div>
      </div>

      <div className="my-10 overflow-hidden transform-3d grid grid-flow-col gap-8 overflow-x-auto">
      <div
        ref={carouselRef}
        className="flex gap-5  overflow-x-scroll  no-scrollbar"
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
  )
}

export default RideSection
