import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"

const TravelAbout = () => {
  return (
    <div className="bg-[#F3F6FF]">
      <div className="container">
        <div className="py-22.5 pl-36 flex gap-13 items-center">
          <div className="flex items-center gap-5">
            <img src="/image1.jpg" className="bg-gray-200 object-cover rounded-3xl w-63.5 h-67.5" alt="" />
            <img src="/image2.png" alt="" className="w-70 object-cover h-118.75 rounded-3xl bg-gray-200" />
          </div>
          <div className="flex flex-col max-w-130.5 gap-5">
            <span className="text-[48px] text-[#373737]">
              We’re Number One Travel
              Adventure Company
            </span>
            <span className="text-[16px] text-[#A5A5A5]">
              We turn your travel dreams into carefully planned, truly unforgettable journeys around the world.
            </span>
            <div className="flex gap-10 items-center mt-2.5">
              <div className="flex flex-col ">
                <span className="text-[32px] text-[#373737] font-semibold">6,560+</span>
                <span className="text-[22px] text-[#A5A5A5] ">Selected Tours</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-[32px] text-[#373737] font-semibold">6,560+</span>
                <span className="text-[22px] text-[#A5A5A5] ">Selected Tours</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-[32px] text-[#373737] font-semibold">6,560+</span>
                <span className="text-[22px] text-[#A5A5A5] ">Selected Tours</span>
              </div>
            </div>
            <Button className="w-50.75 h-12.5 rounded-[30px] bg-[#2196F3] hover:bg-blue-500 mt-2.5 text-[18px]">
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