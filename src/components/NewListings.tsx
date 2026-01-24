import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const cards = [
  {id: 1, activity_name: "Amazonka", country: "Brazil", img_url: "/amazonka.jpg"},
  {id: 2, activity_name: "surfing", country: "australia", img_url: "/surfing.jpg"},
  {id: 3, activity_name: "sahara", country: "morocco", img_url: "/sahara.jpg"},
  {id: 4, activity_name: "camping", country: "canada", img_url: "/camping.jpg"},
  {id: 5, activity_name: "pro biking", country: "poland", img_url: "/biking.jpg"},
  {id: 6, activity_name: "mountain climbing", country: "USA", img_url: "/climbing.jpg"}
]

type CardType = {
  id: number
  activity_name: string
  country: string
  img_url: string
}

const NewListings = () => {
  const [renderCardList, setRenderCardList] = useState<CardType[]>()

  useEffect(() => {
    if(window.innerWidth < 776){
      setRenderCardList(cards.slice(0, 3))
    }
    else{
      setRenderCardList(cards.slice(0, 6))
    }
  }, [window.innerWidth])
  
  return (
    <div className="md:py-37.5 py-12.5 md:px-40">
      <div className="flex items-center justify-between">
        <span className="font-medium text-[28px] max-w-45.75 md:max-w-none md:text-[48px] text-[#373737]">New Listings in Our Tour</span>
        <div className="md:flex gap-3.5 hidden">
          <Button className="w-12.5 bg-white shadow-lg shadow-[#0000001F] h-12.5 rounded-full">
            <Arrow className="stroke-black scale-140" />
          </Button>
          <Button className="bg-[#2196F3] w-12.5 h-12.5 rounded-full">
            <Arrow className="stroke-white scale-140 rotate-180" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7.5 md:mt-12.5 gap-5">
        {
          renderCardList?.map((card) => (
            <Link to='/tour/2' key={card.id} className="max-h-125 h-125 relative w-full">
              <img src={card.img_url} className="w-full h-full object-cover rounded-3xl" alt="card" />
              <div className="absolute bottom-0 left-0 w-full flex justify-center flex-col items-center pb-10">
                <span className="text-white text-[32px] uppercase">{card.activity_name}</span>            
                <span className="text-white text-[14px] uppercase border-b-2 border-white">{card.country}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default NewListings