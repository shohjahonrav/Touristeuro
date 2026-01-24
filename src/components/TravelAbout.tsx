import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"

const TravelAbout = () => {
  return (
    <div className="bg-[#F3F6FF]">
      <div className="container">
        <div className="md:py-22.5 py-12.5 pr-5 md:pl-36 flex gap-13 flex-wrap flex-col md:flex-row md:items-center">
          <div className="flex items-center w-full md:w-[70%] lg:w-[50%] gap-5">
            <img src="/travelabout1.jpg" className="bg-gray-200 object-cover rounded-3xl aspect-square w-[50%]   " alt="" />
            <img src="/travelabout2.jpg" alt="" className=" w-[50%] object-cover aspect-9/16 rounded-3xl bg-gray-200" />
          </div>
          <div className="flex flex-col max-w-130.5 gap-5">
            <span className="text-[32px] font-medium md:font-normal md:text-[48px] text-[#373737]">
              We’re Number One Travel
              Adventure Company
            </span>
            <span className="text-[14px] md:text-[16px] text-[#A5A5A5]">
              We turn your travel dreams into carefully planned, truly unforgettable journeys around the world.
            </span>
            <div className="flex gap-10 w-full justify-around items-center mt-2.5">
              <div className="flex flex-col ">
                <span className="text-[24px] md:text-[32px] text-[#373737] font-semibold">6,560+</span>
                <span className="text-[14px] md:text-[22px] text-[#A5A5A5] ">Selected Tours</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-[24px] md:text-[32px] text-[#373737] font-semibold">6,560+</span>
                <span className="text-[14px] md:text-[22px] text-[#A5A5A5] ">Selected Tours</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-[24px] md:text-[32px] text-[#373737] font-semibold">6,560+</span>
                <span className="text-[14px] md:text-[22px] text-[#A5A5A5] ">Selected Tours</span>
              </div>
            </div>
            <Button className="w-43  md:w-50.75 h-11 md:h-12.5 rounded-[30px] bg-[#2196F3] hover:bg-blue-500 mt-2.5 text-[14px] md:text-[18px]">
              About Us More 
              <Arrow className="stroke-white rotate-180 scale-140" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TravelAbout