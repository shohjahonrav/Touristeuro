import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"
import Location from "@/icons/location"
import StarIcon from "@/icons/star"

const cards = [
  {id: 1, city: "California", country: "USA", image_url: "/california.jpg"},
  {id: 2, city: "Oslo", country: "Norway", image_url: "/oslo.jpg"},
  {id: 3, city: "Seoul", country: "South Korea", image_url: "/seoul.png"},
  {id: 4, city: "Osaka", country: "USA", image_url: "/osaka.jpg"},
]

const Destinations = () => {
  return (
    <div className="md:pt-27.25 md:pb-37.5 py-12.5 md:px-40 bg-white">
      <div className="flex items-center justify-between">
        <span className="font-medium text-[28px] max-w-38 md:text-[48px] text-[#373737]">Featured Destinations</span>
        <div className="md:flex gap-3.5 hidden">
          <Button className="w-12.5 bg-white shadow-lg shadow-[#0000001F] h-12.5 rounded-full">
            <Arrow className="stroke-black scale-140" />
          </Button>
          <Button className="bg-[#2196F3] w-12.5 h-12.5 rounded-full">
            <Arrow className="stroke-white scale-140 rotate-180" />
          </Button>
        </div>
      </div>
      <div className="grid mt-7.5 md:mt-12.5  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7.5 md:gap-5">
        {
          cards.map((card) => (
            <div>
              <img src={card.image_url} className="bg-red-400 object-cover h-50 w-full rounded-3xl" alt="" />
              <div className="mt-3.75">
                <span className="text-[24px] font-medium">{card.city}</span>
                <div className="flex items-center justify-between gap-0.75">
                  <span className="text-[#C7C7C7] flex items-center gap-0.75 text-[16px]">
                    <Location />
                    {card.country}
                  </span>
                  <span className="flex items-center bg-[#2196F3] rounded-[40px] w-13.75 h-6.5 justify-center text-white">
                    <StarIcon />
                    4.5
                  </span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Destinations