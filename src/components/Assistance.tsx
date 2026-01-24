import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"

const Assistance = () => {
  return (
    <div className="h-152.5 overflow-hidden relative">
      <img className="w-full absolute -z-20 h-full object-cover" src="/assistancebg.jpg" alt="assistance bg" />
      <div className="absolute container  w-full h-full left-1/2 flex items-center  -translate-x-1/2 z-100">
        <div className="flex flex-col md:px-40 gap-3.75 md:gap-10">  
          <span className="text-white text-[48px] md:text-[80px] font-medium">Need Assistance</span>
          <span className="text-white max-w-157 text-wrap font-medium text-[20px] md:text-[32px]">Need Help? Call us drop a message, Our agents will be in touch shortly.</span>
          <Button className="flex border text-[24px] h-12.5 w-54.75 border-white bg-transparent rounded-[30px] ">
            Contact Us 
            <Arrow className="stroke-white rotate-180 scale-140" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Assistance