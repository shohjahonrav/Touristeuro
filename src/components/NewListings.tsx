import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"

const cards = [
  {id: 1, activity_name: "Amazonka", country: "Brazil", img_url: "/image1.jpg"},
  {id: 2, activity_name: "surfing", country: "australia", img_url: "/image2.png"},
  {id: 3, activity_name: "sahara", country: "morocco", img_url: "/homebg.jpg"},
  {id: 4, activity_name: "camping", country: "canada", img_url: "/image1.jpg"},
  {id: 5, activity_name: "pro biking", country: "poland", img_url: "/image2.png"},
  {id: 6, activity_name: "mountain climbing", country: "USA", img_url: "/homebg.jpg"}
]

const NewListings = () => {
  return (
    <div className="py-37.5 px-40">
      <div className="flex items-center justify-between">
        <span className="font-medium text-[48px] text-[#373737]">New Listings in Our Tour</span>
        <div className="flex gap-3.5">
          <Button className="w-12.5 bg-white shadow-lg shadow-[#0000001F] h-12.5 rounded-full">
            <Arrow className="stroke-black scale-140" />
          </Button>
          <Button className="bg-[#2196F3] w-12.5 h-12.5 rounded-full">
            <Arrow className="stroke-white scale-140 rotate-180" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-12.5 gap-5">
        {
          cards.map((card) => (
            <div key={card.id} className="max-h-125 h-125 relative w-full">
              <img src={card.img_url} className="w-full h-full object-cover rounded-3xl" alt="card" />
              <div className="absolute bottom-0 left-0 w-full flex justify-center flex-col items-center pb-10">
                <span className="text-white text-[32px] uppercase">{card.activity_name}</span>            
                <span className="text-white text-[14px] uppercase border-b-2 border-white">{card.country}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewListings