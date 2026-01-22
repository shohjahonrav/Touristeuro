import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"
import Location from "@/icons/location"

const cards = [
  {id: 1, city: "California", country: "USA", image_url: "/image1.jpg"},
  {id: 2, city: "Alaska", country: "Norway", image_url: "/homebg.jpg"},
  {id: 3, city: "Seoul", country: "Korea", image_url: "/image2.png"},
  {id: 4, city: "California", country: "USA", image_url: "/image1.jpg"},
]

const Destinations = () => {
  return (
    <div className="pt-27.25 pb-37.5 px-40 bg-white">
      <div className="flex items-center justify-between">
        <span className="font-medium text-[48px] text-[#373737]">Featured Destinations</span>
        <div className="flex gap-3.5">
          <Button className="w-12.5 bg-white shadow-lg shadow-[#0000001F] h-12.5 rounded-full">
            <Arrow className="stroke-black scale-140" />
          </Button>
          <Button className="bg-[#2196F3] w-12.5 h-12.5 rounded-full">
            <Arrow className="stroke-white scale-140 rotate-180" />
          </Button>
        </div>
      </div>
      <div className="grid mt-12.5 grid-cols-4 gap-5">
        {
          cards.map((card) => (
            <div>
              <img src={card.image_url} className="bg-red-400 object-cover h-50 w-full rounded-3xl" alt="" />
              <div className="mt-3.75">
                <span className="text-[24px] font-medium">{card.city}</span>
                <span className="flex items-center gap-0.75 text-[#C7C7C7] text-[16px]">
                  <Location />
                  {card.country}
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Destinations