import Assistance from "@/components/Assistance"
import Arrow from "@/icons/arrow"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const cards = [
  {id: 1, activity_name: "Amazonka", country: "Brazil", img_url: "/image1.jpg"},
  {id: 2, activity_name: "surfing", country: "australia", img_url: "/image2.png"},
  {id: 3, activity_name: "sahara", country: "morocco", img_url: "/homebg.jpg"},
]

const TourInfo = () => {
  return (
    <div>
      <section>
        <div className="h-dvh relative">
          <img src="/surfing.jpg" className="w-full h-full object-cover" alt="" />
          <div className="container absolute bottom-10 md:bottom-18.25 left-1/2 -translate-x-1/2">
            <span className="text-white text-[128px] md:ml-36 font-medium">Oslo</span>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="md:px-40 py-12.5 md:py-20">
          <div className="flex flex-col gap-7.5">
            <span className="text-[48px] text-[#373737] font-medium">About</span>
            <p className="text-[20px] text-[#373737]">Oslo, the capital of Norway, is a remarkable destination where pristine nature and modern city life exist in perfect harmony. Surrounded by majestic fjords, lush forests, and scenic hills, the city offers travelers a unique blend of outdoor adventure and cultural discovery. Oslo is home to iconic landmarks such as the Oslo Opera House, Vigeland Sculpture Park, the Viking Ship Museum, and the historic Akershus Fortress, each reflecting the city’s rich history and contemporary spirit. Visitors can enjoy waterfront walks, explore world-class museums, relax in stylish cafés, and experience the calm yet vibrant atmosphere that defines Scandinavian living. Clean, safe, and thoughtfully designed, Oslo is an ideal destination for those seeking inspiration, comfort, and unforgettable travel experiences in the heart of Northern Europe.</p>
          </div>
          <div className="flex flex-col gap-7.5 mt-25">
            <span className="text-[48px] text-[#373737] font-medium">Visa</span>
            <p className="text-[20px] text-[#373737] font-medium">For travelers planning a trip to Oslo, obtaining a visa is an important part of the journey. Norway is part of the Schengen Area, so visitors may need a Schengen tourist visa depending on their nationality. This visa allows short-term stays of up to 90 days within a 180-day period and also permits travel to other Schengen countries. Applicants are usually required to provide a valid passport, travel itinerary, accommodation details, travel insurance, and proof of sufficient financial means. The visa application process is straightforward when documents are prepared correctly, and applying in advance is highly recommended. With the right preparation, securing a visa makes your journey to Oslo smooth and stress-free.</p>
          </div>

          <div className="mt-25">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[48px] text-[#373737]">Tours</span>
              <div className="hidden md:flex gap-3.5 ">
                <Button className="w-12.5 bg-white shadow-lg shadow-[#0000001F] h-12.5 rounded-full">
                  <Arrow className="stroke-black scale-140" />
                </Button>
                <Button className="bg-[#2196F3] w-12.5 h-12.5 rounded-full">
                  <Arrow className="stroke-white scale-140 rotate-180" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-12.5 gap-5">
              {
                cards.map((card) => (
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
        </div>
      </section>
      <section>
        <Assistance />
      </section>
      
    </div>
  )
}

export default TourInfo