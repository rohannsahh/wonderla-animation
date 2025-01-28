const Wheel = () => {
  return (
    <div className=" my-6  ">
      <div className="relative h-[600px] w-[360px] overflow-visible rounded-lg" >
      <div className="absolute right-[92px] top-0 size-[600px] rounded-full" style={{background:  "conic-gradient(from 0deg, rgb(232, 233, 241) -55deg, rgb(250, 213, 0) 15deg, rgb(250, 213, 0) 65deg, rgb(232, 233, 241) 135deg, rgb(232, 233, 241))"}}>
        <div className="absolute left-[90px] top-[90px] size-[420px] rounded-full" style={{background: "rgb(34, 48, 74)"}}></div>
      
      </div>

      <div className="absolute size-[160px] translate-y-1 rounded-full border-[10px] border-yellow-300 bg-white transition-all duration-500 ease-in-out" style={{left: "141px", top: "220px"}}></div>

      
      <div className="absolute cursor-pointer transition-all duration-500 right-[198px] top-[66px]">
        
        <img src="../../land.svg" alt='land rides'/>
      
      <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
      <span className="text-2xl inline-block font-mulish font-normal !leading-[1.255]">Land</span>
      <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-violet-400 px-3">73 Rides</span>
      </div></div>
      <div className="absolute cursor-pointer transition-all duration-500 right-[110px] top-1/2 -translate-y-1/2">
        <img src="../../water.svg" alt='water rides'/>
      <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
      <span className="text-2xl inline-block font-mulish font-normal !leading-[1.255]">Water</span><span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-violet-400 px-3">54 Rides</span>
      </div></div>
      <div className="absolute cursor-pointer transition-all duration-500 bottom-[80px] right-[198px]">
        <img src="../../kids.svg" alt='kids rides'/>
      <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
      <span className="text-2xl inline-block font-mulish font-normal !leading-[1.255]">Kids</span>
      <span className="text-sm font-mulish font-normal !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-violet-400 px-3">35 Rides</span>
      </div>
      </div>
      </div>
    </div>
  )
}


export default Wheel
