/* eslint-disable react/prop-types */
export const Card = ({ title, location, description, videoUrl, link }) => {
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